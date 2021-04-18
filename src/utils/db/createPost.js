import pool from './main';

const createPost = async ({title, body}) => {    
    const query = {
        // give the query a unique name
        name: 'create-post',
        text: `INSERT INTO posts(title, body)
        VALUES ($1, $2)
        RETURNING id`,
        values: [ title, body ],
    };

    return pool.query(query);
};

export default createPost;