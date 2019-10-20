const modelConfig = require("./config/model.config");
const middlewareConfig = require("./config/middleware.config");
const routerConfig = require("./config/router.config");
const express = require("express");

var app = express();

modelConfig.init();

middlewareConfig(app);

routerConfig(app);
const server = app.listen(4000, () => console.log('Server started on http://localhost:4000'));







