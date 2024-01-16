import pg from "pg";
import { db } from "../config.js";

export const pool = new pg.Pool(db);

try {
    await pool.query("SELECT NOW()");
    console.log("Database connected ✅");
} catch (error) {
    console.log(error);
}