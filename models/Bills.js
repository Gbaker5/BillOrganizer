const mongoose = require("mongoose");

const BillsSchema = new mongoose.Schema({
  Rent: {
    type: String,
    required: true,
  },
  OGE: {
    type: String,
    require: true,
  },
  Storage: {
    type: String,
    require: true,
  },
  Phone: {
    type: String,
    required: true,
  },
  Insurance: {
    type: String,
    required: true,
  },
  Water:{
    type: String,
    required:true,
  },
  Windstream: {
    type: String,
    required: true,
  },
  Car: {
    type: String,
    required: true,
  },
  USAA: {
    type: String,
    required: true,
  },
  Academy: {
    type: String,
    required: true,
  },
  CapitalOne: {
    type: String,
    required: true,
  },
  Milestone: {
    type: String,
    required: true,
  },
  Indigo: {
    type: String,
    required: true,
  },
  Lowes: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Bills", BillsSchema);
