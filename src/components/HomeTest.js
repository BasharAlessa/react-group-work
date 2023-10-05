import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';
import { NavBar } from '../components/NavBar';


export function HomeTest (){

    useEffect(()=>{
        axios.post('http://localhost:3500/addPost')
        .then (res => console.log(res))   
        .catch (err => console.log(err))
         },[]);
         
    return(
     <div>

      <body class="body-about">
    
    
    <div class="write-post">
    {/* <h3>If you are <strong>IN</strong> start the journey In-Posting </h3>

        <a href="/post/addnew">
            <div class="In-Posting">
                
            </div>
            <br></br>
         <input type="text" class="form" placeholder="write your post in here" /> </a> */}

        <h3>If you are <strong>IN</strong> start the journey In-Posting </h3>
        
        <form  class="form" action="http://localhost:3500/addPost" method="post">

            <textarea class="form"name="body"></textarea>
            <button class="btn-submit">Add Post</button>
        </form>
    </div>
    

</body>

</div>
    )
    }

    export default HomeTest