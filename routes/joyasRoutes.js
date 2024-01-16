import { Router } from "express";
import {} from "../src/controllers/joyasController.js";

const router = Router();

router
    .route("/joyas")
    .get(getJoyas)
    .all(function (req, res, next) {
        res.status(405).json({ message: "methor not allowed" });
    });

router
    .route("/joyas/filtros")
    .get(getJoyas)
    .all(function (req, res, next) {
        res.status(405).json({ message: "methor not allowed" });
    });
