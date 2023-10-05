import './App.css';
import {BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import AddNew from './pages/addNew'
import Login from './pages/login'
import SignUp from './pages/signup'
import PostDisplay from './pages/post'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import  AppReact from "./pages/homeReact";


// import {Home} from "./pages/home"

function App() {
  return (
    <div className="App">
     
     
            <BrowserRouter>
     <div>
      <Routes>
        
        <Route path='/home' element = {<Home />} />
        <Route path='/logout' element = {<Home />} />
        <Route path='/about' element = {<About />} />
        <Route path='/post/addnew' element = {<AddNew />} />
        <Route path='/login' element = {!document.cookie ?  <Login /> :<Home /> }/>
        <Route path='/signup' element = {!document.cookie ?  <SignUp /> :<Home /> } />
        <Route path='/' element = {<AppReact />} />
        <Route path='/post/:id' element = {<PostDisplay />} />




      </Routes>
     </div>
     </BrowserRouter>
      {/* <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer /> */}

    </div>
  );
}

export default App;
