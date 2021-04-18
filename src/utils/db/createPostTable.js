import pool from './main';

const query = `
CREATE TABLE IF NOT EXISTS posts (
	id SERIAL PRIMARY KEY UNIQUE,
    title VARCHAR(50) NOT NULL,
	body TEXT
);
`;

const createPostTable = () => {
    return pool.query(query);
}

export default createPostTable;