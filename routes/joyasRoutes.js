import { Router } from "express";
import {
    getAllJoyas,
    getJoyasFiltradas,
} from "../src/controllers/joyasController.js";
import { report } from "../src/middlewares/report.js";

const router = Router();

router
    .route("/joyas", report)
    .get(getAllJoyas)
    .all(function (req, res, next) {
        res.status(405).json({ message: "methor not allowed" });
    });

router
    .route("/joyas/filtros", report)
    .get(getJoyasFiltradas)
    .all(function (req, res, next) {
        res.status(405).json({ message: "methor not allowed" });
    });

export default router;
