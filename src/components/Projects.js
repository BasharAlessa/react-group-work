import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/refu'in (1).jpg";
import projImg2 from "../assets/img/refu'in 3.jpg";
import projImg3 from "../assets/img/refu'in (2).jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Dutch-In",
      description: "Education is the key that unlocks the doors to a world of endless possibilities.  `Refu'in`",
      imgUrl: projImg1,
    },
    {
      title: "Hands-In",
      description: "Equality work begins with active participation, where every voice is heard and every hand contributes to building a more just world.  `Refu'in`",
      imgUrl: projImg2,
    },
    {
      title: "Value-In",
      description: "Your dedication and hard work are truly valuable to us.  `Refu'in`",
      imgUrl: projImg3,
    },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg1,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg2,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg3,
    // },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>In-Community </h2>
                <br></br>
                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Motivation</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Positive</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Meaningful</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <p>In the Netherlands for seven months, I am a motivated refugee with skills to offer. My adaptability, language proficiency, and professional experience make me an asset to any workplace. I am determined to contribute to society, eager to work, and ready to embrace new opportunities. `Burok, 25`</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>After nine months in the Netherlands, I am a determined individual, eager to showcase my talents. With a growing proficiency in Dutch, a rich blend of skills, and a deep appreciation for this welcoming society, I am poised to make a positive impact. I invite the chance to contribute, learn, and flourish as a valued member of the community. `Tien , 27`</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Having settled in the Netherlands, I am a motivated individual ready to demonstrate my expertise and dedication. With an ever-improving command of the Dutch language and a diverse range of talents, I am enthusiastic about contributing to this welcoming society. I eagerly seek opportunities to make a meaningful impact and become an integral part of the community. `Memt , 32`</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>

                <Row>                
                  <h2>With Us</h2>



                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>

              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <h4>Let's Get More From "IN" </h4> */}
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
