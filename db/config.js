const {Pool} = require("pg");
require("dotenv").config();

const URL_DATABASE = process.env.DB_URL;

const pool = new Pool({
    connectionString: URL_DATABASE,
    ssl:{
        rejectUnauthorized:false
    }
});

module.exports={pool}