import client from '../../utils/useDb';
import useStorage from '../../utils/useStorage';
import nc from 'next-connect';
import multer from 'multer';
import bodyParser from 'body-parser';
import { uploadImage } from '../../utils/helper';

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
    .post(async (req, res) => {
        try {
            console.log(req.body);
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