import Home from './components/Home';
import NavigationBar from './components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import headshot_outside from './headshot_outside.jpg'
import {Card, Row, Col, Button, ListGroupItem, ListGroup, Container} from 'react-bootstrap';
import { FaMapMarker, FaGithub, FaClipboardCheck} from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import {MdWork} from "react-icons/md"; 
import {IoLogoLinkedin} from "react-icons/io";
import { IoDocumentTextSharp } from "react-icons/io5";

// https://faiizii992.medium.com/creating-a-navbar-using-react-router-dom-and-react-bootstrap-react-router-bootstrap-e6b59015a5ec

function App() {
return (
<div className="App">
    {/* <Router> */}
    <NavigationBar></NavigationBar>

    <Container fluid> 
      <Row style = {{height: "100%"}}> 

        {/* Big Outer Column #1 */}
        <Col xs = {12} sm = {12} md ={3} style = {{height: "100%", position: "sticky", top: "0px"}}> 
          <Card style={{width: '20rem', margin: '20px 0 20px 20px'}}>
            <Card.Img variant="top" src= {headshot_outside}/>
            <Card.Body>
              <Card.Title>Oliver Li</Card.Title>
              <Card.Text>
              Industrial & Operations Engineering, Applied Data Science & UX, and Computer Science <strong> @ University of Michigan, Class of 2022 </strong>
              </Card.Text>
            </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem><FaMapMarker/> Ann Arbor, MI</ListGroupItem>
            <ListGroupItem><IoLogoLinkedin />&nbsp;<a style ={{textDecoration: 'none'}} target = "_blank" href = "https://www.linkedin.com/in/oliver-y-li/">LinkedIn</a></ListGroupItem>
            <ListGroupItem><FaGithub/>&nbsp;<a style ={{textDecoration: 'none'}} target = "_blank"  href ="https://github.com/olili1999">GitHub</a> </ListGroupItem>
            <ListGroupItem><IoDocumentTextSharp/> <a style ={{textDecoration: 'none'}} target = "_blank" href ="https://drive.google.com/file/d/1C3zs45lwpNLw_OIpEd0m0-eV_YEVSUo_/view?usp=sharing">Resume</a> </ListGroupItem>
          </ListGroup>
          </Card>
        </Col>
        {/* Big Outer Column #2 */}
        <Col xs = {12} sm = {12} md = {9} style = {{}}>
        
          <h2 id = "about" style = {{marginTop: "20px"}}> <BsPersonLinesFill/> about me </h2> 
          <p class = "lead"> Hey, nice to meet you! I'm Oliver, a tennis player, rock climber, programmer, designer, and student at the University of Michigan. Throughout college, I was pretty clueless about what I wanted to do it upon myself to try anything and everything. Over time, I found my initial home in <a style ={{textDecoration: 'none'}}  target= "_blank" href ="https://ioe.engin.umich.edu/">IOE, where I learned that I enjoy streamlining frustratingly inefficient processes</a>. 
          After my sophomore year, I did a data science internship at Principal Financial Group, where I learned that I love creating 
          accessible and intuitive user experiences and making data-driven decisions.  <a style ={{textDecoration: 'none'}}  target= "_blank" href = "https://www.si.umich.edu/about-umsi"> I then decided to take on an additional major through the School of Information in Applied Data Science & User Experience Design. 
          </a> After gaining some rudimentary programming skills, I realized it was paramount to have a foundation in computer science to have a solid understanding of core engineering principles so that I could build products from the ground up myself.  <a target = "_blank" style ={{textDecoration: 'none'}} href = "https://cse.engin.umich.edu/"> Somehow, I also managed to tack on a minor in computer science in addition to my dual degree with a concentration in User Interface Design. </a>
          My interdisciplinary studies in engineering, business, and design have lead me to be really interested in a career in 
          product management/operations/analytics roles. </p> 
          <h2 id = "projects" style = {{marginTop: "20px"}}> <FaClipboardCheck/> projects </h2> 
          <p class = "lead"> I enjoy working on a variety of projects both academic and some for fun. Here are a few examples:</p> 
          <Container> 
            <Row> 
              <Col xs = {12} sm = {12} md = {6} lg = {4}> 
                <Card className = "bob-on-hover" border="dark" style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>🍕 discord pizza bot</Card.Title>
                      <Card.Text>
                        Last winter, I created a discord pizza bot for fun that would automatically order an optimally priced Dominos pizza. 
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                    <ListGroupItem><a style ={{textDecoration: 'none'}} target = "_blank" href = "github.com/discord-pizza-bot">discord pizza bot github</a></ListGroupItem>
                    <ListGroupItem>Tech: Selenium, Discord.py</ListGroupItem>
                  </ListGroup>
                </Card>
              </Col> 
              <Col xs = {12} sm = {12} md = {6} lg = {4}> 
                <Card className = "bob-on-hover" border="dark" style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>🎾 tennis friends </Card.Title>
                      <Card.Text>
                        Last winter, I also spent a lot of time creating a social network website to help tennis players find people of equal level to hit and become friends with. 
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                    <ListGroupItem><a style ={{textDecoration: 'none'}} target = "_blank" href = "github.com/tennis-react">tennis w/ friends link</a></ListGroupItem>
                    <ListGroupItem>Tech: React.js, Firebase</ListGroupItem>

                  </ListGroup>
                </Card>
              </Col>
              <Col xs = {12} sm = {12} md = {6} lg = {4}>
                <Card className = "bob-on-hover" border="dark" style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title> 🏭 detroit manufacturing systems </Card.Title>
                      <Card.Text>
                        I was a part of a team of 7 in the Multidisciplinary Design Program (MDP) at Michigan. I spent a year in a manufacturing plant optimizing operations and the supply chain of rejected automotive parts. 
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                    <ListGroupItem><a style ={{textDecoration: 'none'}} target = "_blank" href = "https://tinyurl.com/DetroitMS"> Poster Link</a></ListGroupItem>
                  </ListGroup>
                </Card>
              </Col> 
              <Col xs = {12} sm = {12} md = {6} lg = {4}>  
                <Card className = "bob-on-hover" border="dark" style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title> cover letter generator</Card.Title>
                      <Card.Text>
                        I created a cover letter generator with my friend to help us navigate recruiting and applying to different types of jobs. 
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                    <ListGroupItem>Python</ListGroupItem>
                    <ListGroupItem><a style ={{textDecoration: 'none'}} target = "_blank" href = "github.com/mac">cover letter generator github</a></ListGroupItem>

                  </ListGroup>
                </Card>
              </Col>
            </Row>
          </Container> 
          <h2 id = "work_experience"style = {{marginTop: "20px"}}> <MdWork/> work experience </h2> 


        </Col>
      </Row>

    </Container>

  {/* <Route exact path="/" component={Home}></Route> */}
</div>
  // </Router>

);
}
export default App;