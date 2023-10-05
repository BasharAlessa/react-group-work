import { NavBar } from '../components/NavBar';
import {BannerLogIn } from "../components/BannerLogIn"
import { JasemFooter } from '../components/jasemFooter ';
const Login = () =>{
    return (
            
        <div class="">
            <div class="body-login">
            <NavBar />
<BannerLogIn/>
            </div>

<div>
<JasemFooter/>
</div>




            {/* <h3><%= err %></h3> */}
{/* <Footer/> */}
        </div>
    )
}

export default Login