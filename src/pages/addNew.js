import { useEffect } from "react"
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { NavBar } from '../components/NavBar';
import {BannerAddnew} from "../components/BannerAddnew"



const AddNew = ()=>{
    
  useEffect(()=>{
       axios.post('http://localhost:3500/addPost')
       .then (res => console.log(res))   
       .catch (err => console.log(err))
},[]);
    return (
        <body class="jasem-style">

<NavBar/>
<BannerAddnew/>

        </body>
 )}

 export default AddNew