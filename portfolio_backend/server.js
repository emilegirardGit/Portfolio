const express = require('express');
const cors = require('cors');
const postgres = require('postgres');
require('dotenv').config();


let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

const sql = postgres({
    host: PGHOST,
    database: PGDATABASE,
    username: PGUSER,
    password: PGPASSWORD,
    port: 5432,
    ssl: 'require',
    connection: {
        options: `project=${ENDPOINT_ID}`,
    },
});
const routes = require('./Routes/Routes')(sql);

async function getPgVersion() {
    const result = await sql`select version()`;
    console.log(result);
  }
  
  getPgVersion();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', routes);

app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
  });
