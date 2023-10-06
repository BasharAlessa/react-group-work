
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
 .then (res => {setPosts(res.data) ; setComment(res.data.comment)})   
 .catch (err => console.log(err))
},[posts]);


//  axios.post(`http://localhost:3500/addComment/${params.id}`)
//  .then (res => console.log(res))   
//  .catch (err => console.log(err))

 
const deleteHandler = (e) =>{
  e.preventDefault()
 axios.delete(`http://localhost:3500/delete/${params.id}`)
 .then (res => console.log(res))   
 .catch (err => console.log(err))
 alert('post deleted')
}
 const commitHandler = () => {
  axios.post(`http://localhost:3500/addComment/${params.id}`)
 .then (res => console.log(res))   
 .catch (err => console.log(err))
 }
 console.log(comment)
    return(

<div>  
<NavBar/>


  {  posts &&
      <div class="post-style">
        <h2 class="post-name"> {posts.UserId.Name}</h2>
        <h4 class="post-body">{posts.body}</h4>
        <h6 class="post-date">{posts.create_at}</h6>
        {comment?.map(item =>
          <h5>{item.body}</h5>
        )}
        {/* <a href={`http://localhost:3500/delete/${params.id}`}>delete</a> */}
        <button  onClick={(e) => deleteHandler(e)}>Delete</button>
        

         <form action={`http://localhost:3500/addComment/${params.id}`} method="post">
             <input class="login-form"type="text" name="comment"/>
             <button  >Add Comment</button>
          </form>
         
       </div>   
  } 
   
<JasemFooter></JasemFooter> 

</div>

)}
export default PostDisplay