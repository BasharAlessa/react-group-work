import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { HashLink } from 'react-router-hash-link';
import {HomeTest} from "./HomeTest"
import axios from 'axios'

export const BannerAbout = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "painter", "carpenter", "car renter" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])
  
  const [error , setError] = useState('')
  const [log , setLog] = useState(false)
 
  useEffect(()=>{
     if (log === true)
    //  {axios.post('http://localhost:3500/login')
    //  .then ( ()=> {
    //   axios.get('http://localhost:3500/login')
    //   .then(res => {
    //     console.log(res.data)
    //   })
    //  })   
    //  .catch (err => console.log(err))}

    {axios.post('http://localhost:3500/login')
    .then (res => setError(res.data.err))   
    .catch (err => console.log(err))}
},[]);
  


  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="Banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>


          {/* event submit  */}
          {/* to delete action  and method  */}
          <br/>
    <h5>Welcome to <strong>Refu'In</strong> Empowering Refugees Through Employment</h5>
    <br/>
    <p>At <strong>Refu'In</strong>, we believe in the power of opportunity and the resilience of the human spirit. We understand that seeking refuge in a new land can be a daunting journey, filled with challenges and uncertainties. 
        But we also know that refugees bring incredible skills, talents, and a strong work ethic to their new communities.</p>
    
    <br/>
    <h6>Our Mission</h6>
    <p>o bridge the gap between refugees seeking a fresh start and employers eager to tap into a diverse and talented workforce. We envision a world where every refugee has the chance to rebuild their life, contribute their unique abilities, and thrive in their new homeland.</p>
    <h6>Our Vision</h6>
    <p>We envision a world where every refugee has the chance to rebuild their life, contribute their unique abilities, and thrive in their new homeland. We see a future where borders are not barriers to success, and where diversity is not just celebrated but embraced as a catalyst for growth.</p>
    <h6>Our Goals</h6>
    <p><ul>
        <li>Connect Refugees with Meaningful Employment: Our primary goal is to connect refugees with job opportunities that match their skills and aspirations. We aim to facilitate the integration of refugees into the workforce, enabling them to regain their independence and self-sufficiency.</li>
        <li>Provide Resources for Professional Growth: We are committed to offering resources, training, and support to help refugees develop their professional skills and advance in their careers. Our goal is to empower individuals to reach their full potential.</li>
        <li>Foster Inclusivity and Diversity: We strive to promote inclusivity and diversity in the workplace by partnering with employers who value the unique perspectives and experiences that refugees bring. Our goal is to create workplaces where everyone feels welcomed and valued.</li>
        <li>Raise Awareness and Advocate: Beyond job placement, we aim to raise awareness about the challenges faced by refugees and advocate for policies that support their integration and well-being in their new communities.</li>
    </ul></p>
                {/* <span className="tagline">Welcome to my In-Profile</span>
                <h1>{`Hi! i'm Jasem`} <span className="txt-rotate" dataPeriod="3000" data-rotate='[ "painter", "carpenter", "car renter" ]'><span className="wrap">{text}</span></span></h1> */}
                  {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                  {/* <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button> */}

              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
