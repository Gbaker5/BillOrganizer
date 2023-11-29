const mongoose = require("mongoose");

const BillsSchema = new mongoose.Schema({
  Month: {
    type: String,
  },
  Rent: {
    type: Array,
    
  },
  OGE: {
    type: Array,
    
  },
  Storage: {
    type: Array,
    
  },
  Phone: {
    type: Array,
    
  },
  Insurance: {
    type: Array,
    
  },
  Water:{
    type: Array,
    
  },
  Windstream: {
    type: Array,
    
  },
  Car: {
    type: Array,
    
  },
  USAA: {
    type: Array,
    
  },
  Academy: {
    type: Array,
    
  },
  CapitalOne: {
    type: Array,
    
  },
  Milestone: {
    type: Array,
    
  },
  Indigo: {
    type: Array,
    
  },
  Lowes: {
    type: Array,
    
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
