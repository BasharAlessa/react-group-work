import { useState } from "react"
import { useEffect } from "react"
import axios from 'axios'
import NavBar from "../components/NavBar"
import { JasemFooter } from "../components/jasemFooter "
const SignUp = ()=>{
    const [clint , setClint]=useState('')

     
  useEffect(()=>{
     if (clint === 'user ')
      {
        axios.post('http://localhost:3500/signup')
        .then (res => console.log(res))   
        .catch (err => console.log(err))
      } else if (clint === 'company ') 
      {
        axios.post('http://localhost:3500/signup-company-new')
        .then (res => console.log(res))   
        .catch (err => console.log(err))
      }

},[]);

    return (

<body>

<NavBar>
        
        </NavBar>
        <div class="body-about">
            <div class="btn-signup">
            <button type="button" class="btn btn-light" onClick={() => setClint('user')}>User</button>
    <button type="button" class="btn btn-light" onClick={() =>setClint('company')}>Company</button>

            </div>
            <div class="user-style">
            {
        clint === 'user' &&
    <form class="form" action="http://localhost:3500/signup" method="post">
        <label for="Name">User Name :</label>
        <input type="text" name="Name" required/>
        <label for="Email"> Email :</label>
        <input type="email" name="Email" required/>
        <br></br>

        <label for="Linkedin"> Linkedin :</label>
        <input type="text" name="Linkedin" />
        <label for="Facebook"> Facebook :</label>
        <input type="text" name="Facebook" />
        <br></br>
        <label for="Instagram"> Instagram :</label>
        <input type="text" name="Instagram" />
        <label for="Password"> Password :</label>
        <input type="password" name="Password" />
        <label for="Bio"> Tell us more about your self :</label>
        <input class="input-bio"type="text" name="Bio"  placeholder="Bio"  />
        <h2>Working Skills Checklist</h2>

      

            <label for="skill1"><input type="checkbox" id="skill1"/> HTML Structure</label><br/>
            <label for="skill2"><input type="checkbox" id="skill2"/> Semantic HTML</label><br/>
            <label for="skill3"><input type="checkbox" id="skill3"/> HTML Forms</label><br/>
            <label for="skill4"><input type="checkbox" id="skill4"/> HTML Lists</label><br/>
            <label for="skill5"><input type="checkbox" id="skill5"/> Hyperlinks</label><br/>
            <label for="skill6"><input type="checkbox" id="skill6"/> CSS Basics</label><br/>
            <label for="skill7"><input type="checkbox" id="skill7"/> Responsive Web Design</label><br/>
            <label for="skill8"><input type="checkbox" id="skill8"/> JavaScript Fundamentals</label><br/>
            <label for="skill9"><input type="checkbox" id="skill9"/> Version Control (e.g., Git)</label><br/>
            <label for="skill10"><input type="checkbox" id="skill10"/> Web Accessibility</label><br/>

      



        <button class="btn btn-light">Sign up</button>
    </form>
}
      {
      clint === 'company' &&
    <form class="form" action="http://localhost:3500/signup-company-new" method="post">
        <label for="Name">Company Name :</label>
        <input type="text" name="Name" required/>
        <label for="Field">Company Field :</label>
        <input type="text" name="Field" required/>
        <br></br>
        <label for="Email"> Email :</label>
        <input type="email" name="Email" required/>
        <label for="Password"> Password :</label>
        <input type="password" name="Password" required/>
        <br></br>
        <button class="btn btn-light">Sign up</button>
    </form>
    }
            </div>
   
        </div>

    <JasemFooter>
        
    </JasemFooter>
</body>
    )
}
export default SignUp