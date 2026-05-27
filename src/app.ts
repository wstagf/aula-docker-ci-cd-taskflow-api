import express from "express";
import swaggerUi from "swagger-ui-express";

import taskRoutes from "./routes/task.routes";
import { swaggerSpec } from "./docs/swagger";

const app = express();

app.use(express.json());

app.use("/tasks", taskRoutes);

app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);

export default app;