import { getJoyas, getJoyasWithQuery } from "../models/joyaModel.js";

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
        res.status(200).json({ joyas: joyas });
    } catch (error) {
        console.log("error", error);
    }
};

export const getJoyasFiltradas = async (req, res) => {
    try {
    } catch (error) {}
};
