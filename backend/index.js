// we will write all our backend code here

// const express =  require("express");
// const port = 4000;
// const app = express();
// const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");
// const multer = require("multer"); //use to make image storage system
// const path = require("path");
// const cors = require("cors"); //provide excess to react app
// import Stripe from 'stripe';
import express from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import multer from 'multer';
import path from 'path';
import cors from 'cors';
import { Stripe } from 'stripe';

const app = express();
const port = 4000;


app.use(express.json()); //request will be parsed 
app.use(cors()); //get access to connect with the frontend

// database connection with MongoDB
mongoose.connect("mongodb+srv://aman2810:aman2810@cluster0.eiyp775.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() =>{
        console.log("connected"
    )
    })
    .catch( (error) =>{
        console.log(error);
    })

// api creation check our express app
app.get("/",(req,res)=>{
    res.send("Express App is Running");
})


//text storage Engine

const storage = multer.diskStorage({
    destination: './upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

//image storage system

const upload = multer({storage:storage})
//creating one upload end point 
app.use('/images',express.static('upload/images'))

app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})

//schema for creating product using mongoose libray.
const product = mongoose.model("product",{
    id:{
        type: Number,
        require:true, 
    },
    name:{
        type:String,
        required:true, 
    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    new_price:{
        type: Number,
        required:true,
    },
    old_price:{
        type: Number,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    avilable:{
        type:Boolean,
        default:true,
    },
})


 
// creating api for addproduct
 
app.post('/addproduct', async (req, res) => {
    console.log("Request Body:", req.body); // Log the request body

    let products = await product.find({});
    let id;
    if(products.length>0){
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id+1;
    }else{
        id=1;
    }
    const newProduct = new product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
    });

    console.log(newProduct);
    await newProduct.save();
    console.log("Saved");

    res.json({
        success: true,
        name: req.body.name,
    });
});

//creating api for removing/deleting product give id and product will remove

app.post('/removeproduct', async (req,res)=>{
    await product.findOneAndDelete({id:req.body.id})
    console.log("Removed");
    res.json({
        success:true,
        name:req.body.name 
    })
})

// creating api for getting all product 
app.get('/allproducts', async (req,res)=>{
    let products = await product.find({});
    console.log("all product fetched");
    res.send(products);
})

//creating schema for user model

const users = mongoose.model('Users',{
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    cartData:{
        type: Object,
    },
    date:{
        type:Date,
        default:Date.now,
    }
})

//api for regestring the user 

app.post('/signup', async (req, res) => {
    let check = await users.findOne({ email: req.body.email }); // Corrected model name
    if (check) { //if mail is used then send a message as existing user found
        return res.status(400).json({ success: false, errors: "existing user found with the same email id" })
    }
    //to create new user
    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i] = 0;
    }
    const user = new users({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password,
        cartData: cart,
    })

    await user.save(); // save in the database

    const data = { //creating token
        user: {
            id: user.id
        }
    }
    const token = jwt.sign(data, 'secret_ecom'); //data will be encrypted by one layer using jwt sign method
    res.json({ success: true, token }); //token means encrypted password
})

//creating endpoint for user login
app.post('/login', async (req, res) => {
    let user = await users.findOne({ email: req.body.email }); //get user related to the particular mail
    if (user) {
        const passCompare = req.body.password === user.password; //compare the password with the database password
        if (passCompare) {
            const data = {
                user: {
                    id: user.id
                }
            };
            const token = jwt.sign(data, 'secret_ecom'); // Corrected syntax and secret string
            res.json({ success: true, token });
        } else { //when password is incorrect
            res.json({ success: false, error: "Wrong Password" });

        }
    } else {
        res.json({ success: false, errors: "Wrong Email ID" });
    }
});

//creating endpoint for newCollection
app.get('/newcollections',async(req,res)=>{
    let products = await product.find({});
    let newcollection = products.slice(1).slice(-8);
    console.log("NewCollection Fetched");
    res.send(newcollection);
})

//creating endpoint for popular in women
app.get('/popularwomen',async(req,res)=>{
    let products = await product.find({category:"women"});
    let popular_in_women = products.slice(0,4);
    console.log("popular in women Fetched");
    res.send(popular_in_women);;
})

//creating middleware to fetch user
const fetchUser = async (req,res,next)=>{
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({errors:"Please authenticate using valid token"})
    }else{
        try{
            const data = jwt.verify(token,'secret_ecom');
            req.user = data.user;
            next();
        } catch (error){
            res.status(401).send({errors:"Please authenticate using a valid token"});
        }
    }
}

//creating endpoint for adding product in cartdata
// Apply fetchUser middleware before the addtocart route handler
app.post('/addtocart', fetchUser, async (req, res) => {
    console.log("Added", req.body.itemId);
    let userData = await users.findOne({_id:req.user.id});
    userData.cartData[req.body.itemId] += 1;
    await users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData}) //find the user and update the cart data
    res.send("Added");
});

//creating endpoint to remove product from cartdata
app.post('/removefromcart', fetchUser, async (req,res)=>{
    console.log("removed", req.body.itemId);
    let userData = await users.findOne({_id:req.user.id});
    if(userData.cartData[req.body.itemId]>0)
    userData.cartData[req.body.itemId] -= 1;
    await users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData}) //find the user and update the cart data
    res.send("Removed");
})

//creating end point to 
app.post('/getcart',fetchUser,async (req,res)=>{
    console.log("GetCart");
    let userData = await users.findOne({_id:req.user.id});
    res.json(userData.cartData);
})

//creating schema for Order status
const order = mongoose.model('Order',{
    userId:{
        type:String,
        required:true,
    },
    items:{
        type:Array,
        required:true,
    },
    amount:{
        type:Number,
        required:true,
    },
    address:{
        type:Object,
        required:true,
    },
    status:{
        type:String,
        default:"Order Processing",
        date:{type:Date,
            default:Date.now()}
    },
    payment:{
        type:Boolean,
        default:false
    }
});

//logic for the place order

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
// const placeorder = async(req,res)=>{

//     const frontend_url = "http://localhost:3000"

//     try {
//         const newOrder = new order({
//             userId:req.body.userId,
//             items:req.body.items,
//             amount:req.body.amount,
//             address:req.body.address
//         })

//         await newOrder.save();
//         await users.findByIdAndUpdate(req.body.userId,{cartData:{}}) //after order user data will be empty 

//         const line_item = req.body.item.map((item)=>({
//             price_data:{
//                 currency:"inr",
//                 product_data:{
//                     name:item.name, 
//                 },
//                 unit_amount:item.price,
//             },
//             quantity:item.quantity
//         }))

//         line_item.push({
//             price_data:{
//                 currency:"inr",
//                 product_data:{
//                     name:"Delivery Charges"
//                 },
//                 unit_amount:0
//             }
//         })

//         const session = await stripe.checkout.sessions.create({
//             line_items:line_item,
//             mode:'payment',
//             success_url:`${frontend_url}/verify?success=true&orderId=${newOrder._id}`, //successful payment redirected to this page
//             success_url:`${frontend_url}/verify?success=false&orderId=${newOrder._id}` //when payment get failed redirected to this page
//         })

//         res.json({success:true,session_url:session.url})
//     } catch (error){
//         console.log(error);
//         res.json({success:false,message:"Error"})
//     }
// }

app.listen(port,(error)=>{
    if(!error){
        console.log("Server running at port "+port);
    }
    else{
        console.log("Error : "+error);
    }
})
