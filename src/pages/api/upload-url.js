import { Storage } from '@google-cloud/storage';
import { withIronSession } from 'next-iron-session';
import ironSessionConfig from '../../utils/ironSessionConfig';

export default withIronSession(
    async (req, res) => {
        try {
            if (
                !req.query.file.endsWith('.jpeg') &&
                !req.query.file.endsWith('.png') &&
                !req.query.file.endsWith('.jpg')
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

                console.log(`Configured bucket for CORS`);
            }

            await configureBucketCors();

            console.log(req.session.get("user"));


            const bucket = storage.bucket(process.env.BUCKET_NAME);
            const file = bucket.file(req.query.file);

            const options = {
                expires: Date.now() + 1 * 60 * 1000, //  1 minute,
                fields: {
                    'x-goog-meta-test': 'data'
                },
                conditions: [
                    ["content-length-range", 0, 1 * 1000 * 1000] // in mb
                ]
            };

            const [response] = await file.generateSignedPostPolicyV4(options);
            res.status(200).json(response || { works: true });
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