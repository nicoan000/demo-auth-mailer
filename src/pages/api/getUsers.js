import client from '../../utils/useDb';

export default async (req, res) => {
    try {
        // console.log(useDb);
        const query = await client.query("SELECT * FROM users");
        console.log(query.rows);

        res.status(200).json({works: true})
    } catch (e) {
        console.log(e);
        res.json({works: false})
    }

};

// CREATE TABLE users (
// 	id SERIAL UNIQUE,
// 	username VARCHAR(15) UNIQUE,
// 	password VARCHAR(100),
// 	email VARCHAR(25) UNIQUE
// );