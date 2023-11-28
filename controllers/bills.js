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
      
      res.render("billsEdit.ejs", {  user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  putBillsEdit: async (req, res) => {
    try {
      
      await Bills.findOneAndUpdate(

        {user:req.user.id},
        {set: {
          
        }}





      )


      res.render("billsEdit.ejs", {  user: req.user });
      console.log("updated Bills")
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
