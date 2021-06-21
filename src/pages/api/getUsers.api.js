import client from '../../utils/useDb';
import nc from 'next-connect';
import multer from 'multer';
import bodyParser from 'body-parser';

const multerMid = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 1000 * 1000 * 1024 * 1024,
    },
})

const handler = nc()
    .use(multerMid.single('file'))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: false }))
    .use((req, res, next) => {
        console.log('Im a dummy middleware, do I work?');
        next();
    })
    .get(async (req, res) => {
        try {
            return res.status(200).json({works: true})
            // const myFile = req.file;
            // const imageUrl = await uploadImage(myFile)
            // res
            //     .status(200)
            //     .json({
            //         message: "Upload was successful",
            //         data: imageUrl
            //     })
        } catch (error) {
            console.log(error);
        }
    });

export default handler;

// CREATE TABLE users (
// 	id SERIAL UNIQUE,
// 	username VARCHAR(15) UNIQUE,
// 	password VARCHAR(100),
// 	email VARCHAR(25) UNIQUE
// );