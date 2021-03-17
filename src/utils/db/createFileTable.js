import pool from './main';

const query = `
CREATE TABLE IF NOT EXISTS files (
	id SERIAL PRIMARY KEY UNIQUE,
	user_id INTEGER REFERENCES users (id),
	file_base VARCHAR(50),
    file_extension VARCHAR(4),
	role VARCHAR(25)
);
`;

const createUserTable = () => pool.query(query);

export default createUserTable;