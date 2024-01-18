import express from "express";
import { PORT } from "./config.js";
import router from "./routes/joyasRoutes.js";
import { logger } from "logger-express";

const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(logger());
app.use(router);

app.listen(PORT, () => {
    console.log(`🔥 Server on 🔥 http://localhost:${PORT}`);
});
