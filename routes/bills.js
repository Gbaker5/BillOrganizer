const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const billsController = require("../controllers/bills");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/allBills", ensureAuth, billsController.getBills);
router.get("/billsEdit", ensureAuth, billsController.getBillsEdit);
router.put("/billsEdit", ensureAuth, billsController.putBillsEdit)
router.get("/billsList", ensureAuth, billsController.getBillsList);



module.exports = router;
