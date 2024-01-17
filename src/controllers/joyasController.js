import {
    getJoyas,
    getJoyasWithQuery,
    getJoyasWithFilters,
} from "../models/joyaModel.js";
import { prepareHATEOAS } from "../helpers/hateoas.js";

export const getAllJoyas = async (req, res) => {
    try {
        const joyas = await getJoyas();
        res.status(200).json(joyas);
    } catch (error) {
        console.log(error);
    }
};

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

export const getFilteredJoyas = async (req, res) => {
    try {
        const { precio_max, precio_min, categoria, metal } = req.query;
        const joyas = await getJoyasWithFilters(
            precio_max,
            precio_min,
            categoria,
            metal
        );
        res.status(200).json(joyas);
    } catch (error) {
        console.log("error");
    }
};
