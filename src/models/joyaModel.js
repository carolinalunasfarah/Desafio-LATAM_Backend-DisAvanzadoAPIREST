import { pool } from "../../database/connectionDB.js";
import format from "pg-format";

export const getJoyas = async (req, res) => {
    const SQLquery = { text: "SELECT * FROM inventario" };
    try {
        const response = await pool.query(SQLquery);
        return response.rows;
    } catch (error) {
        throw new Error("Error getting all jewels: " + error.message);
    }
};

export const getJoyasWithQuery = async (
    order_by = "stock_ASC",
    limit = 3,
    page = 1
) => {
    try {
        const [attribute, direction] = order_by.split("_");
        const offset = (page - 1) * limit;
        const formattedQuery = format(
            "SELECT * FROM inventario ORDER BY %s %s LIMIT %s OFFSET %s;",
            attribute,
            direction,
            limit,
            offset
        );
        const response = await pool.query(formattedQuery);
        return response.rows;
    } catch (error) {
        console.log(error);
    }
};
