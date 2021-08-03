import Home from './components/Home';
import NavigationBar from './components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import headshot_outside from './headshot_outside.jpg'
import {Card, Row, Col, Button, ListGroupItem, ListGroup, Container} from 'react-bootstrap';
import { FaMapMarker, FaGithub, FaClipboardCheck} from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";

import {IoLogoLinkedin} from "react-icons/io";

// https://faiizii992.medium.com/creating-a-navbar-using-react-router-dom-and-react-bootstrap-react-router-bootstrap-e6b59015a5ec

function App() {
return (
<div className="App">
    {/* <Router> */}
    <NavigationBar></NavigationBar>

    <Container fluid style = {{height: "100%"}}> 
      <Row style = {{height: "100%"}}> 
      <Col md ="auto" style = {{height: "100%"}}> 
        <Card style={{width: '20rem', margin: '20px 0 20px 20px'}}>
          <Card.Img variant="top" src= {headshot_outside}/>
          <Card.Body>
            <Card.Title>Oliver Li</Card.Title>
            <Card.Text>
            Industrial & Operations Engineering, Applied Data Science & UX, and Computer Science <strong> @ University of Michigan </strong>
            </Card.Text>
          </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem><FaMapMarker/> &nbsp;Ann Arbor, MI</ListGroupItem>
          <ListGroupItem><IoLogoLinkedin />&nbsp;&nbsp;<a style ={{textDecoration: 'none'}} href = "https://www.linkedin.com/in/oliver-y-li/">LinkedIn</a></ListGroupItem>
          <ListGroupItem><FaGithub/>&nbsp;&nbsp;<a style ={{textDecoration: 'none'}} href ="https://github.com/olili1999">GitHub</a> </ListGroupItem>

        </ListGroup>
        </Card>
      </Col>
      <Col style = {{}}>
      
      <h2 style = {{marginTop: "20px"}}> <BsPersonLinesFill/> About Me </h2> 
      <p class = "lead"> Hi, nice to meet you! I'm Oliver, a rising senior at the University of Michigan. I'm studying Industrial & Operations Engineering, Information Science, 
      and Computer Science at the University of Michigan. My interdisciplinary studies in engineering, business, and design have lead me to be interested in a career in 
       product management and analytics. </p> 
      <h2 style = {{marginTop: "20px"}}> <FaClipboardCheck/> Projects </h2> 
      <p class = "lead"> I enjoy working on a variety of projects both academic and some for fun. Here are a few examples:</p> 

      <div class = "d-flex justify-content-evenly"> 
      <Card border="dark" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>🍕 Discord Pizza Bot</Card.Title>
            <Card.Text>
              Last winter, I created a discord pizza bot for fun that would automatically order an optimally priced Dominos pizza. 
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
          <ListGroupItem>github.com/pizza-discord-bot</ListGroupItem>
          <ListGroupItem>Tech: Selenium, Discord.py</ListGroupItem>
        </ListGroup>
      </Card>
      <Card border="dark" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>🎾 Tennis Friends </Card.Title>
            <Card.Text>
              Last winter, I also spent a lot of time creating a social network website to help tennis players find people of equal level to hit and become friends with. 
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
          <ListGroupItem>github.com/tennis-react</ListGroupItem>
          <ListGroupItem>Tech: React.js, Firebase</ListGroupItem>

        </ListGroup>
      </Card>
      <Card border="dark" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title> 🏭 Detroit Manufacturing Systems (DMS) </Card.Title>
            <Card.Text>
              I was a part of a team of 7 in the Multidisciplinary Design Program at Michigan. I spent a year in a manufacturing plant optimizing operations and the supply chain of rejected automotive parts. 
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
          <ListGroupItem>https://tinyurl.com/DetroitMS</ListGroupItem>

        </ListGroup>
      </Card>
      </div> 

      </Col>
      </Row>

    </Container>

  {/* <Route exact path="/" component={Home}></Route> */}
</div>
  // </Router>

);
}
export default App;