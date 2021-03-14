import format from 'pg-format';
import pool from './main';

const findUser = async (username) => {
    const query = {
        // give the query a unique name
        name: 'find-user',
        text: 'SELECT * FROM users WHERE username = $1',
        values: [username],
    };

    return pool.query(query);
};

export default findUser;