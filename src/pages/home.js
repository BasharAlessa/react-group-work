import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';
import { NavBar } from '../components/NavBar';
import {Footer} from "../components/Footer"
import {BannerHome} from "../components/BannerHome"



function Home (){

    return(
      <div>
      <NavBar />

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <BannerHome />

      <Footer />
      </div>

    )
    }

    export default Home