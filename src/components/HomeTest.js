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

      <body >
    
    
    <div >


        <h3>If you are <strong>IN</strong> start the journey with</h3>
        
        <form  class="form" action="http://localhost:3500/addPost" method="post">

            <textarea class="form"name="body"></textarea>
            <button class="btn-submit">Add Your Words</button>
        </form>
    </div>
    

</body>

</div>
    )
    }

    export default HomeTest