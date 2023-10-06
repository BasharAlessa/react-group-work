const Users = require('../models/userModule')
const Companies = require('../models/companyModule')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const signupUser =(req,res)=>{
    if(req.body.password!== ''){
        var hash = bcrypt.hashSync(req.body.Password, 12)
        let userObj ={
            ...req.body,
            Password:hash
        }     
    const newUser = new Users(userObj)
    newUser.save()
    .then (()=>{
        res.redirect('http://localhost:3000/')
    })
    .catch(err =>{
        console.log(err)
    })
 }
}

 
const logInUser = (req,res)=>{                      // for both users and companies
    Users.findOne({Email:req.body.Email})
      .then(user => {
        if(user !== null){
            let correctPass = bcrypt.compareSync(req.body.Password,user.Password);
            if (correctPass){
                let tokenData= {                               
                    id:user._id, 
                    Name: user.Name,
                    email:user.Email,
                    post:user.post
                }
                let userToken=jwt.sign({tokenData},'this is a random text for jwt sign')
                res.cookie('jwt', userToken)
                res.redirect('http://localhost:3000/home')
                // res.send({userToken,tokenData})
            }
            else{
                res.send({err: 'password is not correct'})
            }

        }
        else {
            Companies.findOne({Email:req.body.Email})
            .then(company => {
                if(company !== null){
                    let correctPass = bcrypt.compareSync(req.body.Password,company.Password);
                    if (correctPass){
                        let tokenData= {                               
                            id:company._id, 
                            Name: company.Name,
                            email:company.Email,
                            comment:company.comment
                        }
                        let companyToken=jwt.sign({tokenData},'this is a random text for jwt sign')
                        res.cookie('jwtc', companyToken)
                        res.redirect('http://localhost:3000/home')
                        // res.send({companyToken,tokenData})
                    }else{
                        res.send({err: 'password is not correct'})
                    }
        
                }else {         
                    res.send({err:'user is not registerd'})     
                }
              })
              .catch(err =>{
                console.log(err)
              })
        }
      })
      .catch(err =>{
        console.log(err)
      })
}    


const logout = (req,res)=>{                                    // for both users and companies
    if(req.cookies.jwt ||req.cookies.jwtc ) { 
    res.clearCookie('jwt')
    res.clearCookie('jwtc')  
    res.redirect('http://localhost:3000/')}
    else {
        res.redirect('http://localhost:3000/')
    }
}



module.exports = {
    signupUser,
    logInUser,
    logout,
}