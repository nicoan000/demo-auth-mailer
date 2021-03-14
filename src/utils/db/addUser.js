import format from 'pg-format';
import pool from './main';

const constructQuery = (data) => (`
INSERT INTO users(username, pass_hash, pass_salt, email, role)
VALUES ('${data.username}', '${data.pass_hash}', '${data.pass_salt}', '${data.email}', '${data.role}' )
`);

const addUser = async (data) => {
    return pool.query(constructQuery(data));
}

export default addUser;