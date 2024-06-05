const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const billsController = require("../controllers/bills");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/allBills", ensureAuth, billsController.getBills);
router.get("/billsEdit/:id", ensureAuth, billsController.getBillsEdit);
router.put("/billsEdit/:id", ensureAuth, billsController.putBillsEdit)
router.get("/billsList", ensureAuth, billsController.getBillsList);
router.post("/billsCreate", ensureAuth, billsController.postBillsCreate);
router.get("/billsLayout", ensureAuth, billsController.getBillsLayout)
router.put("/billsMarkComplete", ensureAuth, billsController.putMarkComplete)
router.put("/billsMarkComplete", ensureAuth, billsController.putMarkUncomplete)
router.delete("/billDelete/:id", ensureAuth, billsController.deleteBill);
module.exports = router;
