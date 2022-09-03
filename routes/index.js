var express = require("express");
var router = express.Router();
var indexCtrl = require("../controllers/indexCtrl");
router.get("/", indexCtrl.getIndex);
module.exports = router;
