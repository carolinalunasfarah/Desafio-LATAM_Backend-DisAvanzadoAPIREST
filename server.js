import express from "express";
import morgan from "morgan";
import cors from "cors";
import { PORT } from "./config.js";
import router from "./routes/joyasRoutes.js";

const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(router);

app.listen(PORT, () => {
    console.log(`🔥 Server on 🔥 http://localhost:${PORT}`);
});
