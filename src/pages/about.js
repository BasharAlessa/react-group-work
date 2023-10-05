import { NavBar } from '../components/NavBar';
import {Footer} from "../components/Footer"
import {BannerAbout } from "../components/BannerAbout"
import { JasemFooter } from '../components/jasemFooter ';
import firstpic from "../assets/img/firstpic.jpg"



const About = () => {
    return (
<body >


<NavBar />
<div class="about-page"> 
<br></br>
<br></br>
<br></br>
<br></br>
<h5>Welcome to <strong>Refu'In</strong> Empowering Refugees Through Employment</h5>
    <br/>
    <div class ="about-start">
    <img class="about-img" src={firstpic} alt="pic"/>
    
    <p><br></br>
<br></br><br></br>
<br></br>At <strong>Refu'In</strong>, we believe in the power of opportunity and the resilience of the human spirit. <br></br>We understand that seeking refuge in a new land can be a daunting journey, filled with challenges and uncertainties. 
        <br></br>But we also know that refugees bring incredible skills, talents, and a strong work ethic to their new communities.</p>
    

    </div>
    <br/>
    <div class="m&v-style">
    <div class="mission-style">
    <h6>Our Mission</h6>
    <p>o bridge the gap between refugees seeking a fresh start and employers eager to tap into a diverse and talented workforce. We envision a world where every refugee has the chance to rebuild their life, contribute their unique abilities, and thrive in their new homeland.</p>

    </div>
    <div class="vision-stule">
    <h6>Our Vision</h6>
    <p>We envision a world where every refugee has the chance to rebuild their life, contribute their unique abilities, and thrive in their new homeland. We see a future where borders are not barriers to success, and where diversity is not just celebrated but embraced as a catalyst for growth.</p>

    </div>

    </div>


    <h6>Our Goals</h6>
    <p><ul>
        <li>Connect Refugees with Meaningful Employment: Our primary goal is to connect refugees with job opportunities that match their skills and aspirations. We aim to facilitate the integration of refugees into the workforce, enabling them to regain their independence and self-sufficiency.</li>
        <li>Provide Resources for Professional Growth: We are committed to offering resources, training, and support to help refugees develop their professional skills and advance in their careers. Our goal is to empower individuals to reach their full potential.</li>
        <li>Foster Inclusivity and Diversity: We strive to promote inclusivity and diversity in the workplace by partnering with employers who value the unique perspectives and experiences that refugees bring. Our goal is to create workplaces where everyone feels welcomed and valued.</li>
        <li>Raise Awareness and Advocate: Beyond job placement, we aim to raise awareness about the challenges faced by refugees and advocate for policies that support their integration and well-being in their new communities.</li>
    </ul></p>
</div>

    <JasemFooter></JasemFooter>
</body>


    )
}

export default  About