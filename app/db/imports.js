import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const postgres_host = process.env.POSTGRES_HOST;
const postgres_port = Number(process.env.POSTGRES_PORT);
const postgres_db = process.env.POSTGRES_DB;
const postgres_user = process.env.POSTGRES_USER;
const postgres_password = process.env.POSTGRES_PASSWORD;
const postgres_max = process.env.POSTGRES_MAX;

const pool = new Pool({
  host: postgres_host,
  port: postgres_port,
  database: postgres_db,
  user: postgres_user,
  password: postgres_password,
  max: postgres_max,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 10000,
});

export const client = await pool.connect();
