import { useEffect } from "react"
import axios from "axios";

const AddNew = ()=>{
    
  useEffect(()=>{
       axios.post('http://localhost:3500/addPost')
       .then (res => console.log(res))   
       .catch (err => console.log(err))
},[]);
    return (
        <body>

         <h4>Here you can add new post</h4> 
        
        <form class="form" action="http://localhost:3500/addPost" method="post">
            <label for="body" >Post :</label>
            <textarea name="body"></textarea>
            <button>Add Post</button>
        </form>

        </body>
 )}

 export default AddNew