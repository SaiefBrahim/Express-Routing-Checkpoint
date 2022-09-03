var express = require("express");
var router = express.Router();
var contactCtrl = require("../controllers/contactCtrl");
router.get("/", contactCtrl.getContact);
module.exports = router;
