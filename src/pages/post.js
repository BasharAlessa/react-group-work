
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import { JasemFooter } from "../components/jasemFooter ";

const PostDisplay = ()=>{
    
const [posts , setPosts] = useState(null);
const [comment , setComment] = useState(null)
const params = useParams()


useEffect(()=>{
 axios.get(`http://localhost:3500/post/${params.id}`)
 .then (res => {setPosts(res.data)})   
 .catch (err => console.log(err))
},[]);


 axios.post(`http://localhost:3500/addComment/${params.id}`)
 .then (res => console.log(res))   
 .catch (err => console.log(err))



    return(

<div>  
<NavBar/>

  {  posts &&
      <div class="post-style">
        <h2 class="post-name"> {posts.UserId.Name}</h2>
        <h4 class="post-body">{posts.body}</h4>
        <h6 class="post-date">{posts.create_at}</h6>
        
         <form action={`http://localhost:3500/addComment/${params.id}`} method="post">
             <input class="login-form"type="text" name="body"/>
             <button class="btn  btn-light">I'm In</button>
          </form>
       </div>
  } 
<JasemFooter></JasemFooter> 

</div>

)}
export default PostDisplay