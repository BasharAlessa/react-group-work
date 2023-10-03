import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';
import { NavBar } from '../components/NavBar';


export function HomeTest (){
    const [posts , setPosts] = useState(null);
    
  useEffect(()=>{
    axios.get('http://localhost:3500/home')
   .then (res => {
          setPosts(res.data)  
    })   
   .catch (err => console.log(err))
},[posts]);

    return(
     <div>

      <body class="body-about">
    
    
    <div class="write-post">
    <h3>If you are <strong>IN</strong> start the journey In-Posting ✍️</h3>

        <a href="/post/addnew">
            <div class="In-Posting">
                
            </div>
            <br></br>
         <input type="text" class="post-input" placeholder="write your post in here" /> 📝</a>

    </div>
    

</body>

</div>
    )
    }

    export default HomeTest