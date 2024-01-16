import { getJoyas } from "../models/joyaModel.js";

export const getAllJoyas = async (req, res) => {
    try {
        const joyas = await getJoyas();
        res.status(200).json(joyas);
    } catch (error) {
        console.log(error);
    }
};

export const getJoyasFiltradas = async (req, res) => {
    try {
    } catch (error) {}
};
