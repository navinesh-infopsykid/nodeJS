//User Routes
const express = require('express');
const router = express.Router();
const User = require("../models/User");
//Create User
 router.post("/", async(req,res)=>{
    const user = new User(req.body)
    const saved = await user.save()
    res.status(201).json(saved)
 })

 //Get All users
  router.get("/", async (req,res)=>{
    const users = await User.find();
    
    res.status(201).json(users)
 })

 //Get Single Users
router.get("/:id", async (req,res)=>{
    const users = await User.findById(req.params.id);
    
    res.status(201).json(users)
 })

//Update Single Users
router.put("/:id", async (req,res)=>{
    const users = await User.findByIdAndUpdate(req.params.id, req.body, {new : true});
    res.status(201).json(users)
 })
 

 //Delete Single Users
router.delete("/:id", async (req,res)=>{
    await User.findByIdAndDelete(req.params.id);
    res.sendStatus(204)
 })


 module.exports = router
