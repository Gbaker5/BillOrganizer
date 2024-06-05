const cloudinary = require("../middleware/cloudinary");
const { create } = require("../models/Bills");
const Bills = require("../models/Bills");

module.exports = {
  getProfile: async (req, res) => {
    try {
      
      res.render("profile.ejs", {  user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getBills: async (req, res) => {
    try {
      const bills = await Bills.find({user: req.user.id})
      console.log(bills)

      
      res.render("bills.ejs", {user: req.user, bills: bills });
    } catch (err) {
      console.log(err);
    }
  },
  postBillsCreate: async (req, res) => {
    try{

      await Bills.create({
        user: req.user.id,
        Month:'',
        Rent: ['','','','','',''],
        OGE: ['','','','','',''],
        Storage: ['','','','','',''],
        Phone: ['','','','','',''],
        Insurance: ['','','','','',''],
        Water: ['','','','','',''],
        Windstream: ['','','','','',''],
        Car: ['','','','','',''],
        USAA: ['','','','','',''],
        Academy: ['','','','','',''],
        CaptalOne: ['','','','','',''],
        Milestone: ['','','','','',''],
        Indigo: ['','','','','',''],
        Lowes: ['','','','','',''],
        Total:['',''] //total for bill amounts and amount paid
    })


        res.redirect("/bills/billsLayout");
    }catch (err) {
      console.log(err);
    }
  },
  getBillsLayout: async (req, res) => {
    try{

      const bills = await Bills.find({user: req.user.id})
      console.log(bills)

      res.render("billsLayout.ejs", {bills: bills})
    }catch (err) {
      console.log(err);
    }
  },
  getBillsEdit: async (req, res) => {
    try {
      console.log(req.params)

      const bills = await Bills.find(
        {_id: req.params.id })
      //console.log(bills[0]._id)

      const id = bills[0]._id
      const month = bills[0].Month
      const rent = bills[0].Rent
      const oge = bills[0].OGE
      const storage = bills[0].Storage
      const phone = bills[0].Phone
      const insurance = bills[0].Insurance
      const water = bills[0].Water
      const windstream = bills[0].Windstream
      const car = bills[0].Car
      const usaa = bills[0].USAA
      const academy = bills[0].Academy
      const capitalOne = bills[0].CapitalOne
      const milestone = bills[0].milestone
      const indigo = bills[0].Indigo
      const lowes = bills[0].Lowes
      //console.log(rent)
      
      
      res.render("billsEdit.ejs", {  id: id, month: month, rent: rent, oge: oge, storage: storage, phone: phone, insurance: insurance, water: water, windstream: windstream, car: car, usaa: usaa, academy: academy, capitalOne: capitalOne, milestone: milestone, indigo: indigo, lowes:lowes, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  putBillsEdit: async (req, res) => {
    try {

      //const bill = await Bills.find({_id: req.params.id})
      //console.log(bill)
      //console.log(req.user.id)
      //console.log(req.body.rent[0])
      //console.log(req.body.rent.length)
      const updateFields = {};

      // Update Month field
     
      if (req.body.month !== '') {
        updateFields[`Month`] = req.body.month;
      } else {
        console.log(`Empty field for Month`);
      }
    

     // Update Rent fields
     for (let a = 0; a < req.body.rent.length; a++) {
      if (req.body.rent[a] !== '') {
        updateFields[`Rent.${a}`] = req.body.rent[a];
      } else {
        console.log(`Empty field for rent at index ${a}`);
      }
    }

    // Update OGE fields
    for (let b = 0; b < req.body.oge.length; b++) {
      if (req.body.oge[b] !== '') {
        updateFields[`OGE.${b}`] = req.body.oge[b];
      } else {
        console.log(`Empty field for OGE at index ${b}`);
      } 
    }

    // Update Storage fields
    
    for (let c = 0; c < req.body.storage.length; c++) {
      if (req.body.storage[c] !== '') {
        updateFields[`Storage.${c}`] = req.body.storage[c];
      } else {
        console.log(`Empty field for Storage at index ${c}`);
      } 
    }
  

    // Update Phone fields
    for (let d = 0; d < req.body.phone.length; d++) {
      if (req.body.phone[d] !== '') {
        updateFields[`Phone.${d}`] = req.body.phone[d];
      } else {
        console.log(`Empty field for Phone at index ${d}`);
      } 
    }

    // Update Insurance fields
    for (let e = 0; e < req.body.insurance.length; e++) {
      if (req.body.insurance[e] !== '') {
        updateFields[`Insurance.${e}`] = req.body.insurance[e];
      } else {
        console.log(`Empty field for Insurance at index ${e}`);
      } 
    }

    // Update Water fields
    for (let f = 0; f < req.body.water.length; f++) {
      if (req.body.water[f] !== '') {
        updateFields[`Water.${f}`] = req.body.water[f];
      } else {
        console.log(`Empty field for Water at index ${f}`);
      } 
    }

    // Update Windstream fields
    for (let g = 0; g < req.body.windstream.length; g++) {
      if (req.body.windstream[g] !== '') {
        updateFields[`Windstream.${g}`] = req.body.windstream[g];
      } else {
        console.log(`Empty field for Windstream at index ${g}`);
      } 
    }

    // Update Car fields
    for (let h = 0; h < req.body.car.length; h++) {
      if (req.body.car[h] !== '') {
        updateFields[`Car.${h}`] = req.body.car[h];
      } else {
        console.log(`Empty field for Car at index ${h}`);
      } 
    }

    // Update USAA fields
    for (let i = 0; i < req.body.usaa.length; i++) {
      if (req.body.usaa[i] !== '') {
        updateFields[`USAA.${i}`] = req.body.usaa[i];
      } else {
        console.log(`Empty field for USAA at index ${i}`);
      } 
    }

    // Update Academy fields
    for (let j = 0; j < req.body.academy.length; j++) {
      if (req.body.academy[j] !== '') {
        updateFields[`Academy.${j}`] = req.body.academy[j];
      } else {
        console.log(`Empty field for Academy at index ${j}`);
      } 
    }

    // Update CapitalOne fields
    for (let k = 0; k < req.body.capitalOne.length; k++) {
      if (req.body.capitalOne[k] !== '') {
        updateFields[`CapitalOne.${k}`] = req.body.capitalOne[k];
      } else {
        console.log(`Empty field for CapitalOne at index ${k}`);
      } 
    }

    // Update Milestone fields
    for (let l = 0; l < req.body.milestone.length; l++) {
      if (req.body.milestone[l] !== '') {
        updateFields[`Milestone.${l}`] = req.body.milestone[l];
      } else {
        console.log(`Empty field for Milestone at index ${l}`);
      } 
    }

    // Update Indigo fields
    for (let m = 0; m < req.body.indigo.length; m++) {
      if (req.body.indigo[m] !== '') {
        updateFields[`Indigo.${m}`] = req.body.indigo[m];
      } else {
        console.log(`Empty field for Indigo at index ${m}`);
      } 
    }

    // Update Lowes fields
    for (let n = 0; n < req.body.lowes.length; n++) {
      if (req.body.lowes[n] !== '') {
        updateFields[`Lowes.${n}`] = req.body.lowes[n];
      } else {
        console.log(`Empty field for Lowes at index ${n}`);
      } 
    }

    console.log(updateFields);
    
    
     if(Object.keys(updateFields).length > 0){

      
      
      await Bills.findOneAndUpdate(
        
        {_id: req.params.id},
        { $set: {
          Month: req.body.month,
          ...updateFields,
          
          //Storage: req.body.storage,
          //Insurance: req.body.insurance,



        }
        },
        {upsert:true});
      //res.render({bill:bill})
    }
        console.log("updated Bills")
      res.redirect(`/bills/billsEdit/${req.params.id}`);
      
    } catch (err) {
      console.log(err);
    }
  },
  putMarkComplete: async (req,res) => {
    try{

      const update = `${itemFromJS}.5`
      console.log(update)
      //to be put on edit page
      await Bills.findOneAndUpdate(
        {_id:req.params.id},
        {$Set: {
          
        }})
        .then(result =>{
          res.json('marked complete')
          console.log("marked")
        })

      
      res.redirect(`bills/billsEdit/${req.params.id}`)
    }catch (err) {
      console.log(err);
    }
  },
  putMarkUncomplete: async (req,res) => {
    try{


      
      res.redirect(`bills/billsEdit/${req.params.id}`)
    }catch (err) {
      console.log(err);
    }
  },
  deleteBill: async (req,res) => {
    try{
      res.redirect("/bills/allBills")
    }catch (err) {
      console.log(err);
    }
  },
  getBillsList: async (req, res) => {
    try {
      const billsList = await Bills.find().sort()
      res.render("billsList.ejs", { bills: billsList, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  createPost: async (req, res) => {
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);

      await Post.create({
        title: req.body.title,
        image: result.secure_url,
        cloudinaryId: result.public_id,
        caption: req.body.caption,
        likes: 0,
        user: req.user.id,
      });
      console.log("Post has been added!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
  likePost: async (req, res) => {
    try {
      await Post.findOneAndUpdate(
        { _id: req.params.id },
        {
          $inc: { likes: 1 },
        }
      );
      console.log("Likes +1");
      res.redirect(`/post/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },
  deletePost: async (req, res) => {
    try {
      // Find post by id
      let post = await Post.findById({ _id: req.params.id });
      // Delete image from cloudinary
      await cloudinary.uploader.destroy(post.cloudinaryId);
      // Delete post from db
      await Post.remove({ _id: req.params.id });
      console.log("Deleted Post");
      res.redirect("/profile");
    } catch (err) {
      res.redirect("/profile");
    }
  },
};
