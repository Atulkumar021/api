const app = require("express");
const emc = require("../controller/enc");
const approute = app.Router();
approute.get("/", emc.getEnc);