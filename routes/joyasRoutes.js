import { Router } from "express";
import {
    getJoyasById,
    getAllJoyasWithPagination,
    getAllJoyasWithQuery,
    getFilteredJoyas,
    notFound,
} from "../src/controllers/joyasController.js";

const router = Router();

// GET inventario
router
    .route("/inventario")
    .get(getAllJoyasWithPagination)
    .all(function (req, res, next) {
        res.status(405).json({ message: "method not allowed" });
    });

// GET joya BY id, this is only for the href at HATEOAS works
router
    .route("/inventario/joyas/:id")
    .get(getJoyasById)
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

router.use("*", notFound);

export default router;
