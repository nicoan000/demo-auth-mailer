import { Pool } from 'pg';

const pool = new Pool({
    ssl: { rejectUnauthorized: false }
});

pool.on('error', (err, client) => {
    console.log('Error:', err)
});

pool.connect();

export default pool;

