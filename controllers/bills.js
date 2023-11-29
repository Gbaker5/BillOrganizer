const cloudinary = require("../middleware/cloudinary");
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
      
      res.render("bills.ejs", {  user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getBillsEdit: async (req, res) => {
    try {

      const bills = await Bills.find(
        {user: req.user.id })
      //console.log(bills)

      
      const month = bills[0].Month
      const rent = bills[0].Rent
      const oge = bills[0].OGE
      //console.log(rent)
      
      
      res.render("billsEdit.ejs", {  month: month, rent: rent, oge: oge, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  putBillsEdit: async (req, res) => {
    try {
      //console.log(req.user.id)
      //console.log(req.body.rent[0])
      //console.log(req.body.rent.length)
      const updateFields = {};
      const updateOGE = {};

     // Update Rent fields
     for (let i = 0; i < req.body.rent.length; i++) {
      if (req.body.rent[i] !== '') {
        updateFields[`Rent.${i}`] = req.body.rent[i];
      } else {
        console.log(`Empty field for rent at index ${i}`);
      }
    }

    // Update OGE fields
    for (let j = 0; j < req.body.oge.length; j++) {
      if (req.body.oge[j] !== '') {
        updateFields[`OGE.${j}`] = req.body.oge[j];
      } else {
        console.log(`Empty field for OGE at index ${j}`);
      } 
    }

    // Update Storage fields
    for (let j = 0; j < req.body.storage.length; j++) {
      if (req.body.storage[j] !== '') {
        updateFields[`Storage.${j}`] = req.body.storage[j];
      } else {
        console.log(`Empty field for Storage at index ${j}`);
      } 
    }

    // Update Phone fields
    for (let j = 0; j < req.body.phone.length; j++) {
      if (req.body.phone[j] !== '') {
        updateFields[`Phone.${j}`] = req.body.phone[j];
      } else {
        console.log(`Empty field for Phone at index ${j}`);
      } 
    }

    // Update OGE fields
    for (let j = 0; j < req.body.oge.length; j++) {
      if (req.body.oge[j] !== '') {
        updateFields[`OGE.${j}`] = req.body.oge[j];
      } else {
        console.log(`Empty field for OGE at index ${j}`);
      } 
    }

    // Update OGE fields
    for (let j = 0; j < req.body.oge.length; j++) {
      if (req.body.oge[j] !== '') {
        updateFields[`OGE.${j}`] = req.body.oge[j];
      } else {
        console.log(`Empty field for OGE at index ${j}`);
      } 
    }

    // Update OGE fields
    for (let j = 0; j < req.body.oge.length; j++) {
      if (req.body.oge[j] !== '') {
        updateFields[`OGE.${j}`] = req.body.oge[j];
      } else {
        console.log(`Empty field for OGE at index ${j}`);
      } 
    }

    // Update OGE fields
    for (let j = 0; j < req.body.oge.length; j++) {
      if (req.body.oge[j] !== '') {
        updateFields[`OGE.${j}`] = req.body.oge[j];
      } else {
        console.log(`Empty field for OGE at index ${j}`);
      } 
    }

    // Update OGE fields
    for (let j = 0; j < req.body.oge.length; j++) {
      if (req.body.oge[j] !== '') {
        updateFields[`OGE.${j}`] = req.body.oge[j];
      } else {
        console.log(`Empty field for OGE at index ${j}`);
      } 
    }

    // Update OGE fields
    for (let j = 0; j < req.body.oge.length; j++) {
      if (req.body.oge[j] !== '') {
        updateFields[`OGE.${j}`] = req.body.oge[j];
      } else {
        console.log(`Empty field for OGE at index ${j}`);
      } 
    }

    console.log(updateFields);
    
    
     if(Object.keys(updateFields).length > 0){

      
      
      await Bills.findOneAndUpdate(
        
        {user: req.user.id},
        { $set: {
          Month: req.body.month,
          ...updateFields,
          
          //Storage: req.body.storage,
          //Insurance: req.body.insurance,



        }
        },
        {upsert:true});
      
    }
        console.log("updated Bills")
      res.redirect("/bills/billsEdit");
      
    } catch (err) {
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
