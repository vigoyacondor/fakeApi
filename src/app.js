const express = require('express')
const app = express();
const routes = require("./routes");
const { healthMonitor } = require("@condor-labs/health-middleware");
healthMonitor(app);

// Midlewares
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("", routes);

module.exports = app