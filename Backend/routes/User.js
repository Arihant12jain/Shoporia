const Category=require('../models/Category');
const Product=require('../models/Product');
const express=require('express');
const mongoose=require('mongoose')
const User=require('../models/User')

const route=express.Router();
const jwt=require('jsonwebtoken');

const secret = "secret";

route.post('/login', async (req, res) => {
  try {
    const one = await User.findOne({ email: req.body.email });
    console.log(one);

    if (!one) {
      return res.status(400).json({ message: "User not found" });
    }

    // Check password
    if (req.body.password === one.password) {
     

      return res.json({ user: one });  // Send the user data and token
    } else {
      return res.status(400).json({ msg: "Incorrect password" });
    }
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "An error occurred during login" });
  }
});

route.delete('/User/:id',async (req,res)=>{
    const result=await User.deleteOne({_id:req.params.id}); 
    return res.send(result);  
   })
route.get('/User',async (req,res)=>{
    const result=await User.find({});
    res.send(result);
})
route.post('/signup',async (req,res)=>{
    
    const data=new User({
 name:req.body.name,
 email:req.body.email,
  password:req.body.password,
    })
 console.log(data)
   
const data1=await data.save();
res.send(data1);

})
route.get('/:id',async (req,res)=>{

    const result=await User.findOne({_id:req.params.id});
    if(!result){
        req.send({msg:"error"});
    }
     console.log(result);
    res.send(result);
})
route.delete('/delete',async (req,res)=>{
    const order=await User.deleteMany({});
    res.send({msg:"item deleted"});
  })
module.exports=route;