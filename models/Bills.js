const mongoose = require("mongoose");

const BillsSchema = new mongoose.Schema({
  Month: {
    type: String,
  },
  Rent: {
    type: Array,
    
  },
  OGE: {
    type: String,
    
  },
  Storage: {
    type: String,
    
  },
  Phone: {
    type: String,
    
  },
  Insurance: {
    type: String,
    
  },
  Water:{
    type: String,
    
  },
  Windstream: {
    type: String,
    
  },
  Car: {
    type: String,
    
  },
  USAA: {
    type: String,
    
  },
  Academy: {
    type: String,
    
  },
  CapitalOne: {
    type: String,
    
  },
  Milestone: {
    type: String,
    
  },
  Indigo: {
    type: String,
    
  },
  Lowes: {
    type: String,
    
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
