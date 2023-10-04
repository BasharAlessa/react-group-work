import '../App.css';

import {BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './home'
import About from './about'
import AddNew from './addNew'
import Login from './login'
import SignUp from './signup'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "../components/NavBar";
import { Banner } from "../components/Banner";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";



// import {Home} from "./pages/home"

function AppReact() {
  return (
    <div className="App">
     
     
            {/* <BrowserRouter>
     <div>
      <Routes>
        
        <Route path='/home' element = {<Home />} />
        <Route path='/logout' element = {<Home />} />
        <Route path='/about' element = {<About />} />
        <Route path='/post/addnew' element = {<AddNew />} />
        <Route path='/login' element = {!document.cookie ?  <Login /> :<Home /> }/>
        <Route path='/signup' element = {!document.cookie ?  <SignUp /> :<Home /> } />
        <Route path='/reacthome' element = {<Home />} />

      </Routes>
     </div>
     </BrowserRouter> */}
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      {/* <Contact /> */}
      <Footer />

    </div>
  );
}

export default AppReact;
