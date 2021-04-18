import pool from './main';

const createFile = async ({id, post_id}) => {    
    const query = {
        // give the query a unique name
        name: 'create-file',
        text: `INSERT INTO files(id, post_id)
        VALUES ($1, $2)`,
        values: [ id, post_id],
    };

    return pool.query(query);
};

export default createFile;