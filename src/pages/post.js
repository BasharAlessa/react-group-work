
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import { JasemFooter } from "../components/jasemFooter ";
import moment from "moment";



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
        
        <div>
        <h2 class="post-name">👦_ {posts.UserId.Name} : </h2>

        </div>
        <div class="main-post">
        <h4 class="post-body">{posts.body}</h4>
        <div class="date-delete">
        <h6  class="post-date">{moment(posts.create_at).format('MMMM Do YYYY, h:mm:ss ')}</h6>
        <button class="btn btn-danger"  onClick={(e) => deleteHandler(e)}>Delete</button>

        </div>

      <div>
        <div >
        {comment?.map(item =>
          <h5 class="comment-style">{item.body}</h5>
        )}
        </div>

        {/* <a href={`http://localhost:3500/delete/${params.id}`}>delete</a> */}
        
          <div class="comment-input">
          <form class="comment-form"action={`http://localhost:3500/addComment/${params.id}`} method="post">
             <input class="login-form"type="text" name="comment" placeholder="let's contact"/>
             <button class="btn btn-primary" >In</button>
          </form>
            </div>

        </div>
        </div>

         
       </div>   
  } 
   
<JasemFooter></JasemFooter> 

</div>

)}
export default PostDisplay