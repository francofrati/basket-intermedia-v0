import { Pool } from "pg";

const database = {
    credentials: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: Number(process.env.DB_PORT),
    },
}

export const supabaseDb = new Pool(database.credentials)