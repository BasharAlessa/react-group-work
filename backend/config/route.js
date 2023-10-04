const express= require("express")
const route = express.Router()
const postController =require("../controller/postController")
const commentController =require("../controller/commentController")
const userController =require("../controller/userController")
const comapnyController= require("../controller/companyController")

route.get('/', (req,res)=>{res.redirect('/home')})
route.get("/home" , postController.homePage)
route.get("/post/:id" ,comapnyController.companyAuth, postController.postDisplay)
route.get('/info', (req,res)=>{res.render('userInfo')})
route.get('/logout',userController.logout)



route.post("/signup", userController.signupUser)
route.post("/login", userController.logInUser)
route.post("/addPost", postController.creatPost)
route.post("/addComment/:id",commentController.commentAuth, commentController.creatComment)
route.post("/signup-company-new", comapnyController.signupCompnay)


module.exports= route