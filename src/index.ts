import express from "express";
import { HOST_NAME, NODE_ENV, PORT } from "./constants";
import middlewares from "./middlewares";

const app = express();

// Middlewares
app.use(middlewares.morgan(NODE_ENV));

// Routes
app.get("/", (req, res) => {
  res.json({ hello: "yeahhh" });
});

app.listen(PORT, HOST_NAME, async () => {
  try {
    return console.log(`Server is listening at http://localhost:${PORT}`);
  } catch (error) {
    console.log("Error!", error);
  }
});
