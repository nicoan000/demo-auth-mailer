import { withIronSession } from 'next-iron-session';
import ironSessionConfig from '@utils/config/ironSessionConfig';
import findPost from '@utils/db/findPost';
const { Storage } = require('@google-cloud/storage');
import { addHours } from 'date-fns';
import pool from '@utils/db/main';

export default withIronSession(
    async (req, res) => {
        try {
            const storage = new Storage({
                projectId: process.env.PROJECT_ID,
                credentials: {
                    client_email: process.env.CLIENT_EMAIL,
                    private_key: process.env.PRIVATE_KEY.replace(/\\n/gm, '\n'),
                },
            });
            const { post_id } = req.query;
            const { rows } = await findPost({ post_id });

            if (rows.length == 0) {
                return res.status(404).send({ error: true, msg: "Couldn't find post." })
            };

            const file_names = rows.map(row => new Promise(async (resolve, reject) => {
                try {
                    const FILE_NAME = row.file_id;

                    const fileRef = storage
                        .bucket(process.env.BUCKET_NAME)
                        .file(FILE_NAME);

                    const [exists] = await fileRef.exists();
                    if (!exists) {
                        res.status(404).send({ error: true, msg: "Could not find file." });
                    };

                    const config = {
                        action: 'read',
                        expires: addHours(new Date(), 12)
                    };

                    const [url] = await fileRef.getSignedUrl(config);

                    resolve(url);
                }
                catch (e) {
                    reject(e);
                }
            }));



            const post_data = {
                title: rows[0].title,
                body: rows[0].body,
                id: rows[0].post_id,
                images: await Promise.all(file_names)
            };
            return res.status(200).send(post_data);
        }
        catch (e) {
            console.log(e);
            res.status(400).send({
                error: true,
                error_msg: "Uncaught error."
            })
        }
    },
    {
        ...ironSessionConfig
    }
);