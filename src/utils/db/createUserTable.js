import pool from './main';

const query = `
CREATE TABLE IF NOT EXISTS users (
	id SERIAL UNIQUE,
	username VARCHAR(15) UNIQUE,
	pass_hash VARCHAR(200),
	pass_salt VARCHAR(25),
	email VARCHAR(25) UNIQUE,
	role VARCHAR(25)
);
`;

const createUserTable = () => pool.query(query);

export default createUserTable;