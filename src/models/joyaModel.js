import { pool } from "../../database/connectionDB.js";
import format from "pg-format";

// TEST CONSULT TO SEE IF DATABASE IS CORRECTLY CONNECTED
export const getJoyas = async (req, res) => {
    const SQLquery = { text: "SELECT * FROM inventario" };
    try {
        const response = await pool.query(SQLquery);
        return response.rows;
    } catch (error) {
        throw new Error("Error getting all jewels: " + error.message);
    }
};

// GET joyas USING QUERY STRINGS
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

// GET joyas WITH FILTERS
export const getJoyasWithFilters = async (
    precio_max,
    precio_min,
    categoria,
    metal
) => {
    try {
        let filtros = [];
        if (precio_max) filtros.push(`precio<=${precio_max}`);
        if (precio_min) filtros.push(`precio>=${precio_min}`);
        if (categoria) filtros.push(`categoria='${categoria}'`);
        if (metal) filtros.push(`metal='${metal}'`);
        let query = "SELECT * FROM inventario";
        if (filtros.length > 0) {
            filtros = filtros.join(" AND ");
            query += ` WHERE ${filtros}`;
        }
        const response = await pool.query(query);
        return response.rows;
    } catch (error) {
        console.log(error);
    }
};
