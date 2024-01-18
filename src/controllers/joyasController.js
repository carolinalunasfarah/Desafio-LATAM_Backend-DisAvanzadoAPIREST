import {
    getJoyas,
    getJoyasWithQuery,
    getJoyasWithFilters,
} from "../models/joyaModel.js";

import { prepareHATEOAS } from "../helpers/hateoas.js";
import { errorFinder } from "../utils/utils.js";
import { pagination } from "../helpers/paginator.js";

// GET inventario
export const getAllJoyas = async (req, res) => {
    try {
        const joyas = await getJoyas();
        res.status(200).json(joyas);
    } catch (error) {
        console.log(error);
        const errorFound = errorFinder(error.code);
        return res
            .status(errorFound[0]?.status)
            .json({ error: errorFound[0]?.message });
    }
};

// GET inventario WITH PAGINATION
export const getAllJoyasWithPagination = async (req, res) => {
    try {
        const { items, page } = req.query;
        const inventario = await getJoyas();
        const paginationData = pagination(inventario, items, page);
        res.status(200).json(paginationData);
    } catch (error) {
        console.log(error);
        const errorFound = errorFinder(error.code);
        return res
            .status(errorFound[0]?.status)
            .json({ error: errorFound[0]?.message });
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
        console.log(error);
        const errorFound = errorFinder(error.code);
        return res
            .status(errorFound[0]?.status)
            .json({ error: errorFound[0]?.message });
    }
};

// GET joyas WITH FILTERS AND filter helper
export const getFilteredJoyas = async (req, res) => {
    try {
        const { precio_max, precio_min, categoria, metal } = req.query;
        const filters = { precio_min, precio_max, categoria, metal };
        const joyas = await getJoyasWithFilters(filters);
        res.status(200).json(joyas);
    } catch (error) {
        console.log(error);
        const errorFound = errorFinder(error.code);
        return res
            .status(errorFound[0]?.status)
            .json({ error: errorFound[0]?.message });
    }
};
