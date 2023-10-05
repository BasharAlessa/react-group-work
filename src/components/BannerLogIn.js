import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { HashLink } from 'react-router-hash-link';
import {HomeTest} from "./HomeTest"
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';


export const BannerLogIn = () => {
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
  const [email , setEmail]= useState('')
  const [ password ,setPassword] = useState('')

  const handelSubmitLogin = () =>
  axios.post('http://localhost:3500/login')
  .then (res => {setError(res.data)  })   
  .catch (err => console.log(err))
 
  // localStorage.setItem('usertoken',JSON.stringify(res.data))



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
                                  <br></br>
                                  <br></br>

        
                                      <form class="form" action="http://localhost:3500/login" method="Post" >
                                        <div class="login-text">
                                            <label class="login-form" for="Email"> Email :</label>
                                            <input class="input-text-login" type="email" name="Email" onChange={(e)=> {setEmail(e.target.value) ; e.preventDefault()}} required/>
                                            <label class="login-form" for="Password"> Password :</label>
                                            <input class="input-text-login" type="password" name="Password" onChange={(e)=> setPassword(e.target.value)} required/>

                                        </div>
                                            <button onClick={handelSubmitLogin}  class="btn btn-light">login</button>
                                      </form>
                                      <div>
                                      <a href="/signup" class="btn btn-success">Create New Account</a>

                                      </div>

                                      <h1>{error}</h1> 

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
