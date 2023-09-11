const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const { swaggerSpec } = require("./utils/swaggerSpec");
const swaggerUi = require("swagger-ui-express");
const app = express();
const corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(morgan("dev"));
const router = require("./routes/routes");
app.use("/api", router);
app.use("/api/v1-doc", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;
