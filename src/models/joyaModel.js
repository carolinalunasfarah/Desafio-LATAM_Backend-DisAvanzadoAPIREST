import { pool } from "../../database/connectionDB.js";
import format from "pg-format";
import { queryFilter } from "../helpers/filter.js";

// GET inventario
export const getJoyas = async (req, res) => {
    const SQLquery = { text: "SELECT * FROM inventario" };
    try {
        const response = await pool.query(SQLquery);
        return response.rows;
    } catch (error) {
        throw new Error("Error getting all jewels: " + error.message);
    }
};

// GET joyas BY id
export const getJoyaById = async (id) => {
    const SQLquery = {
        text: "SELECT * FROM inventario WHERE id = $1",
        values: [id],
    };
    try {
        const response = await pool.query(SQLquery);
        if (response.rowCount === 0) {
            throw new Error("None jewel found by this id");
        }
        return response.rows;
    } catch (error) {
        throw new Error("Error getting a jewel by this id: " + error.message);
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
        throw new Error(
            "Error getting jewels with this query strings: " + error.message
        );
    }
};

// GET joyas WITH FILTERS AND filter helper
export const getJoyasWithFilters = async (filters) => {
    try {
        const { query, values } = queryFilter("inventario", filters);
        const response = await pool.query(query, values);
        return response.rows;
    } catch (error) {
        throw new Error(
            "Error getting jewels with this filters: " + error.message
        );
    }
};
