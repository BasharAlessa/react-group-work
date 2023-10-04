import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';
import { NavBar } from '../components/NavBar';


export function HomeTest (){

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

            <textarea class="form"name="form"></textarea>
            <button class="btn-submit">Add Post</button>
        </form>
    </div>
    

</body>

</div>
    )
    }

    export default HomeTest