import { Router } from "express";
import {
    getAllJoyas,
    getAllJoyasWithQuery,
    getFilteredJoyas,
} from "../src/controllers/joyasController.js";

const router = Router();

// TEST CONSULT TO SEE IF DATABASE IS CORRECTLY CONNECTED
router
    .route("/inventario")
    .get(getAllJoyas)
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
