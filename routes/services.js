var express = require("express");
var router = express.Router();
var servicesCtrl = require("../controllers/servicesCtrl");
router.get("/", servicesCtrl.getServices);
module.exports = router;
