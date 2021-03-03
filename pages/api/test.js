// const pgp = require('pg-promise')();

export default async (req, res) => {
    try {
        // const db = pgp({
        //     host: process.env.PG_HOST,
        //     port: process.env.PG_PORT,
        //     database: process.env.PG_DATABASE,
        //     user: process.env.PG_USER,
        //     password: process.env.PG_PASSWORD,
        //     ssl: { rejectUnauthorized: false }
        // });

        res.status(200).json({success: true})
    }
    catch (e) {
        console.log(e);
    }
}