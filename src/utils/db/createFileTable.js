import pool from './main';

const query = `
CREATE TABLE IF NOT EXISTS files (
	id VARCHAR(36) PRIMARY KEY UNIQUE,
    post_id INTEGER REFERENCES posts (id)
);
`;

const createFileTable = () => {
    return pool.query(query);
}

export default createFileTable;