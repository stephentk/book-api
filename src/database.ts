import dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config();
const { HOST, POSTGRES_DB, USER, PASSWORD,NODE_ENV,DATABASE_URL } =
  process.env;


const client = new Pool({
  host: HOST,
  database: POSTGRES_DB,
  user: USER,
  password: PASSWORD,
  connectionString:process.env.DATABASE_URL,
  ssl:{
    rejectUnauthorized:false,
  },
});

export default client;
