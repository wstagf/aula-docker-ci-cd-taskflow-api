import express from "express";
import dotenv from "dotenv";
import taskRoutes from "./routes/task.routes";
const PORT = process.env.PORT || 3000;
const app = express();

dotenv.config();
app.use(express.json());

app.use("/tasks", taskRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

export default app;