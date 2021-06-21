import { Storage } from '@google-cloud/storage';
import { withIronSession } from 'next-iron-session';
import ironSessionConfig from '../../utils/config/ironSessionConfig';

export default withIronSession(
    async (req, res) => {
        try {
            console.log('/api/uploadImages');
            if (
                !req.query.fileName.endsWith('.jpeg') &&
                !req.query.fileName.endsWith('.png') &&
                !req.query.fileName.endsWith('.jpg')
            ) {
                console.log('File format rejected');
                return res.status(406).json({
                    error: true,
                    msg: "Invalid file type uploaded."
                });
            };

            const storage = new Storage({
                projectId: process.env.PROJECT_ID,
                credentials: {
                    client_email: process.env.CLIENT_EMAIL,
                    private_key: process.env.PRIVATE_KEY.replace(/\\n/gm, '\n'),
                },
            });

            const configureBucketCors = async () => {
                await storage.bucket(process.env.BUCKET_NAME).setCorsConfiguration([
                    {
                        maxAgeSeconds: 3600,
                        method: ["POST"],
                        origin: ["http://localhost:3000"],
                        responseHeader: ["Content-Type", "access-control-allow-origin"],
                    },
                ]);
            }

            await configureBucketCors();

            const bucket = storage.bucket(process.env.BUCKET_NAME);
            const fileID = bucket.file(req.query.fileID);

            const options = {
                expires: Date.now() + 1 * 60 * 1000, //  1 minute,
                fields: {
                    'x-goog-meta-test': 'data'
                },
                conditions: [
                    ["content-length-range", 0, 1 * 1000 * 1000] // in mb
                ]
            };

            const [response] = await fileID.generateSignedPostPolicyV4(options);
            res.status(200).json(response || { works: false });
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