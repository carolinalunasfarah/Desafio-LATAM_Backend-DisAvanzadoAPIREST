import pg from "pg";
import { db } from "../config.js";

export const pool = new pg.Pool(db);