import format from 'pg-format';
import pool from './main';

const findPost = async ({post_id}) => {    
    const query = {
        // give the query a unique name
        name: 'find-user',
        text: `SELECT posts.id AS post_id, title, body, files.id AS file_id 
        FROM posts
        JOIN files ON files.post_id = posts.id
        WHERE post_id = $1;`,
        values: [ post_id ],
    };

    return pool.query(query);
};

export default findPost;