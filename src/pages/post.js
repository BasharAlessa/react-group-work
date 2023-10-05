
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


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
<body>  
  {  posts &&
      <div>
        <h2> {posts.UserId.Name}</h2>
        <h4>{posts.body}</h4>
        <h6>{posts.create_at}</h6>
        
         <form action={`http://localhost:3500/addComment/${params.id}`} method="post">
             <input type="text" name="body"/>
             <button >Add Comment</button>
          </form>
       </div>
    }  
</body>
)}
export default PostDisplay