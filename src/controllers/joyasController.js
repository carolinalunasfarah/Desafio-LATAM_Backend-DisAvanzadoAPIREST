import {
    getJoyas,
    getJoyasWithQuery,
    getJoyasWithFilters,
} from "../models/joyaModel.js";
import { prepareHATEOAS } from "../helpers/hateoas.js";

// TEST CONSULT TO SEE IF DATABASE IS CORRECTLY CONNECTED
export const getAllJoyas = async (req, res) => {
    try {
        const joyas = await getJoyas();
        res.status(200).json(joyas);
    } catch (error) {
        console.log(error);
    }
};

// GET joyas USING QUERY STRINGS
export const getAllJoyasWithQuery = async (req, res) => {
    try {
        const { order_by, limit, page } = req.query;
        const joyas = await getJoyasWithQuery(order_by, limit, page);
        const joyasWithHateoas = prepareHATEOAS("joyas", joyas);
        res.status(200).json({ joyas: joyasWithHateoas });
    } catch (error) {
        console.log("error", error);
    }
};

// export const getFilteredJoyas = async (req, res) => {
//     try {
//         const { precio_max, precio_min, categoria, metal } = req.query;
//         const joyas = await getJoyasWithFilters(
//             precio_max,
//             precio_min,
//             categoria,
//             metal
//         );
//         res.status(200).json(joyas);
//     } catch (error) {
//         console.log("error");
//     }
// };

// GET joyas WITH FILTERS AND filter helper
export const getFilteredJoyas = async (req, res) => {
    try {
        const { precio_max, precio_min, categoria, metal } = req.query;
        const filters = { precio_min, precio_max, categoria, metal };
        const joyas = await getJoyasWithFilters(filters);
        res.status(200).json(joyas);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
