import { pool } from "../../database/connectionDB.js";

export const getJoyas = async (req, res) => {
    const SQLquery = { text: "SELECT * FROM inventario" };
    try {
        const response = await pool.query(SQLquery);
        return response.rows;
    } catch (error) {
        throw new Error("Error getting all jewels: " + error.message);
    }
};