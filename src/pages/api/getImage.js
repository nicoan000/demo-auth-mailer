const { Storage } = require('@google-cloud/storage');
import { addHours, formatToTimeZone, convertToTimeZone } from 'date-fns';

export default async (req, res) => {
    try {
        const storage = new Storage({
            projectId: process.env.PROJECT_ID,
            credentials: {
                client_email: process.env.CLIENT_EMAIL,
                private_key: process.env.PRIVATE_KEY.replace(/\\n/gm, '\n'),
            },
        });

        // TEMP
        const FILE_TYPE = 'image/jpeg';
        const FILE_NAME = '2c9423bf-e36f-46a5-9d06-99106321ed1b';
        console.log(req.query);

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
        
        res.status(200).send({ url });
    }
    catch (e) {
        console.log(e);
        res.status(400).send({ error: true, msg: "Some uncaught error." })
    }
};