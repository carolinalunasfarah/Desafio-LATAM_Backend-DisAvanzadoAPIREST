import { Router } from "express";
import {
    getAllJoyas,
    getAllJoyasWithPagination,
    getAllJoyasWithQuery,
    getFilteredJoyas,
} from "../src/controllers/joyasController.js";

const router = Router();

// GET inventario
router
    .route("/inventario")
    .get(getAllJoyas)
    .all(function (req, res, next) {
        res.status(405).json({ message: "method not allowed" });
    });

    router
    .route("/inventario/pagination")
    .get(getAllJoyasWithPagination)
    .all(function (req, res, next) {
        res.status(405).json({ message: "method not allowed" });
    });

// GET joyas USING QUERY STRINGS
router
    .route("/joyas")
    .get(getAllJoyasWithQuery)
    .all(function (req, res, next) {
        res.status(405).json({ message: "method not allowed" });
    });

// GET joyas WITH FILTERS
router
    .route("/joyas/filtros")
    .get(getFilteredJoyas)
    .all(function (req, res, next) {
        res.status(405).json({ message: "method not allowed" });
    });

export default router;
