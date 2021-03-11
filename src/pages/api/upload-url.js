import { Storage } from '@google-cloud/storage';

export default async function handler(req, res) {
    const storage = new Storage({
        projectId: process.env.PROJECT_ID,
        credentials: {
            client_email: process.env.CLIENT_EMAIL,
            private_key: process.env.PRIVATE_KEY.replace(/\\n/gm, '\n'),
        },
    });


    async function configureBucketCors() {
        await storage.bucket(process.env.BUCKET_NAME).setCorsConfiguration([
            {
                maxAgeSeconds: 3600,
                method: ["POST"],
                origin: ["http://localhost:3000"],
                responseHeader: ["Content-Type", "access-control-allow-origin"],
            },
        ]);

        console.log(`Bucket ${process.env.BUCKET_NAME} was updated with a CORS config
      to allow ${"POST"} requests from ${"http://localhost:3000"} sharing 
      ${"Content-Type", "access-control-allow-origin"} responses across origins`);
    }

    await configureBucketCors();


    const bucket = storage.bucket(process.env.BUCKET_NAME);
    const file = bucket.file(req.query.file);
    const options = {
        expires: Date.now() + 1 * 60 * 1000, //  1 minute,
        fields: { 'x-goog-meta-test': 'data' },
    };

    const [response] = await file.generateSignedPostPolicyV4(options);
    res.status(200).json(response || { works: true });
}