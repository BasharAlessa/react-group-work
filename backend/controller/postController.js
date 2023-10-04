const postModel = require("../models/postModule")
const Users = require('../models/userModule')
const commentModel = require('../models/commentModule')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')



const homePage =(req,res)=>{
    postModel.find()
    .populate('UserId')
    .populate('comment')
    .sort({created_at :-1})
    .then(data =>{
         //console.log(data[1]);
        res.send(data)
    })
    .catch(err=>{
        console.log(err);
    })
}


const creatPost = (req,res)=>{
    jwt.verify(req.cookies.jwt ,'this is a random text for jwt sign' , function (err , decodedUser){
        if (err){
            console.log('issue with verify token',err)
        } else {
              res.userId = decodedUser.tokenData.id
              res.userFulname = decodedUser.tokenData.Name
        } 
        })
        const post = new postModel({
            ...req.body,
            UserId:res.userId
        });  
        post.save()
        .then((result)=>{
            Users.findById(res.userId)
            .then((user)=>{
                user.post.push(post._id)
                user.save()
                 .then(()=>{
                    res.redirect('http://localhost:3000/home')
                 })
                 .catch((err)=>{
                    console.log(err)
                 })
            })
            .catch((err)=>{
                console.log(err)
            })
         })
        .catch((err)=>{
           console.log(err)
        })
    }
const postDisplay = (req,res)=>{
    const id = req.params.id
    postModel.findById(id)
    .populate('UserId')
    .populate('comment')
    .sort({create_at :-1})
    .then(data =>{
      //  console.log(data);
        res.render("PostDisplay",{
            posts:data , comments:data.comment
        })
    })
    .catch(err=>{
        console.log(err);
    })
}

module.exports={
    homePage,
    creatPost,
    postDisplay
    
}