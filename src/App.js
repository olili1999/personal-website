import Home from './components/Home';
import NavigationBar from './components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import headshot_outside from './headshot_outside.jpg'
import { FaMapMarker, FaGithub, FaClipboardCheck} from "react-icons/fa";
import {Card, Row, Col, Button, ListGroupItem, ListGroup, Container, Image, OverlayTrigger, Tooltip, Accordion} from 'react-bootstrap';
import { BsPersonLinesFill, BsPeopleFill} from "react-icons/bs";
import {MdWork, MdEmail} from "react-icons/md"; 
import {IoLogoLinkedin} from "react-icons/io";
import { IoDocumentTextSharp } from "react-icons/io5";
import Umich from "./UMich.png"; 
import Enova from "./enova-logo.png"; 
import Principal from "./principal.png"; 
// https://faiizii992.medium.com/creating-a-navbar-using-react-router-dom-and-react-bootstrap-react-router-bootstrap-e6b59015a5ec

function App() {
return (
<div className="App">
    {/* <Router> */}
    <NavigationBar></NavigationBar>

    <Container fluid> 
      <Row style = {{height: "100%"}}> 

        {/* Big Outer Column #1 */}
         {/* position: "sticky", top: "0px" in Col below*/}
        <Col xs = {12} sm = {12} md ={3} style = {{height: "100%"}} className = "d-flex justify-content-center"> 
          <Card className = "mt-4" style={{width: '20rem'}}>
          <OverlayTrigger placement ="bottom" overlay={<Tooltip> Me, at the Sleeping Bear Dunes in Michigan!</Tooltip>}>
            <Card.Img src= {headshot_outside}/>
          </OverlayTrigger>
     
            <Card.Body>
              <Card.Title> Oliver Li</Card.Title>
              <Card.Text>
              Industrial & Operations Engineering, Applied Data Science & UX, and Computer Science <strong>@ &nbsp;
              <OverlayTrigger placement ="right" overlay={<Tooltip> Go Blue!</Tooltip>}>
                <Image src = {Umich} style = {{width: "25px"}} rounded/>
              </OverlayTrigger>
              <br/>
              Class of 2022 </strong>
              </Card.Text>
            </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem><FaMapMarker/> Ann Arbor, MI</ListGroupItem>
            <ListGroupItem><MdEmail/> <a style ={{textDecoration: 'none'}} target = "_blank" href ="mailto:olili@umich.edu">E-mail</a> </ListGroupItem>
            <ListGroupItem><IoLogoLinkedin />&nbsp;<a style ={{textDecoration: 'none'}} target = "_blank" href = "https://www.linkedin.com/in/oliver-y-li/">LinkedIn</a></ListGroupItem>
            <ListGroupItem><FaGithub/>&nbsp;<a style ={{textDecoration: 'none'}} target = "_blank"  href ="https://github.com/olili1999">GitHub</a> </ListGroupItem>
            <ListGroupItem><IoDocumentTextSharp/> <a style ={{textDecoration: 'none'}} target = "_blank" href ="https://drive.google.com/file/d/1C3zs45lwpNLw_OIpEd0m0-eV_YEVSUo_/view?usp=sharing">Resume</a> </ListGroupItem>

          </ListGroup>
          </Card>

        </Col>
        {/* Big Outer Column #2 */}
        <Col className = "d-flex flex-column" xs = {12} sm = {12} md = {9} style = {{}}>
        
          <h3 id = "about" className = "mt-3"> <BsPersonLinesFill/> About Me </h3> 
          <p class> Hey, nice to meet you! I'm Oliver, a tennis player, rock climber, programmer, designer, and student at the University of Michigan. Throughout college, I was pretty clueless about what I wanted to do it upon myself to try anything and everything. Over time, I found my initial home in <a style ={{textDecoration: 'none'}}  target= "_blank" href ="https://ioe.engin.umich.edu/">IOE, where I learned that I enjoy streamlining frustratingly inefficient processes</a>. 
          After my sophomore year, I did a data science internship at Principal Financial Group, where I learned that I love creating 
          accessible and intuitive user experiences and making data-driven decisions.  <a style ={{textDecoration: 'none'}}  target= "_blank" href = "https://www.si.umich.edu/about-umsi"> I then decided to take on an additional major through the School of Information in Applied Data Science & User Experience Design. 
          </a> After gaining some rudimentary programming skills, I realized it was crucial to have a solid foundation in computer science to have an understanding of core engineering principles so that I could build products from the ground up myself.  <a target = "_blank" style ={{textDecoration: 'none'}} href = "https://cse.engin.umich.edu/"> Somehow, I also managed to tack on a minor in computer science with a concentration in User Interface Design. </a>
          <br/>
          My interdisciplinary studies in engineering, business, and design have lead me to be really interested in a career in 
          product management/operations/analytics roles. </p> 
          <h3 id = "work_experience" className = "mt-3"> <MdWork/> Work Experience </h3> 
          <p> My work experience spans across data science, strategy & operations, and product management.  </p> 

          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header className = "d-flex align-items-center">
                <Image src = {Enova} style = {{width: "1.5rem"}} rounded/>&nbsp; 
                <p className = "m-0 p-0"> Enova International - Strategy & Operations Intern </p>
              </Accordion.Header>
              <Accordion.Body>
                <h6 className = "p-0 m-0"> Summer 2020 </h6> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I worked at Enova International as the sole S&O intern with a focus
                on <mark>product launch strategy.</mark>
                Collaborating with various stakeholders in many departments, <mark>I lead</mark> feature ideation 
                and prioritization for Headway Capital Account Home. Headway Capital is Enova's main small business lending 
                branch and Account Home is similar to any Bank app's home page: you're able to see your current balance, how much you owe, etc.
                <mark> I ended up shipping a feature</mark> called "Draw Cost Configurator." 
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The main problem people have when dealing with any type of loan is transparency and clarity. The Draw Cost Configurator
                sought to fix this problem by allowing customers to toggle their loan details such as draw amount, term length, payment amount, and payment frequency 
                and, most importantly, visualize that contract. One of the biggest takeaways I learned is that while business owners
                are really good at what they do, they almost always are very unfamiliar with both their own finances and financial contracts.
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This tool effectively<mark> increased trust between Enova</mark> and its existing customers, 
                <mark> decreased the number of defaults on loans.</mark> This feature gave Enova a <mark>huge competitive advantage </mark>
                over its competitors by giving customers so much more freedom and insight into what 
                they were signing. 
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
            <Accordion.Header className = "d-flex align-items-center">
                <Image src = {Principal} style = {{width: "1.5rem"}} rounded/>&nbsp; 
                <p className ="p-0 m-0"> Principal Financial Group - Data Science Intern</p> 
            </Accordion.Header>              
            <Accordion.Body>
                <h6 className = "p-0 m-0"> Summer 2019 </h6> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;At Principal, I was hired as a Data Science Intern with <mark>little to no coding experience.</mark>
                &nbsp;It was extremely stressful at the time since each concept was so difficult for me to learn
                and grasp. However, the experience really shaped me and taught 
                me the importance of having a strong technical background. 
                I'm really proud looking back because in <mark>3 months</mark> I had taught myself how to use <mark> Python, pandas, numpy, SQL for data manipulation</mark> and an ounce of <mark>Power BI to visualize that data.</mark> 
                <br/> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                I had a few main tasks throughout the summer. One of the first things I did was understand, 
                discuss, and condense a lot of the database infrastructure for the Fixed Income group at Principal. 
                I also effectively increased loading speed by moving a lot of 
                unnecessary Power BI calculations/transformations to the backend (SQL).
                However, I think the most difficult part of the internship was ensuring 
                data calculation accuracy. In the beginning of the internship, our data calculations were <mark> only 70% accurate</mark> when comparing to the source of truth. In reality, these were pretty simple calculations
                that were being done and pushed to Power BI. So the main question 
                posed was the following: <mark>why were our backend calculations not matching 
                up with the source of truth? </mark> 
                My intern team spent everyday doing deep investigation into underlying data
                and understanding why certain calculations were wrong. There were so many reasons: 
                sometimes data was incomplete, sometimes joining multiple tables could cause issues, 
                there could be duplicate data, etc. Through this tedious and difficult process, 
                I gained a lot of confidence manipulating, wielding, and investigating data.
                In the very last week of our internship, we raised the accuracy to 100%. 
                We honestly never thought we were going to get there because sometimes it would take days to 
                just raise the accuracy by a mere percent. I learned a lot of things from this internship
                that I was really grateful for. 
                <mark> But most importantly, </mark> 
                I became a lot better at engaging with stakeholders and <mark>concisely 
                communicating technical concepts and problems in a simple way.</mark> 

              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <h3 id = "projects" className = "mt-3"> <FaClipboardCheck/> Projects </h3> 
          <p class> I enjoy working on a variety of projects both academic and some for fun. Here are a few examples:</p> 
          <Container> 
            <Row> 
              <Col sm = {12} md = {6} lg = {6}> 
                <Card className = "bob-on-hover mt-3 mr-3" border style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>🍕 Discord Pizza Bot </Card.Title>
                      <Card.Text>
                        Last winter, I created a discord pizza bot for fun that would automatically order an optimally priced Dominos pizza. 
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                    <ListGroupItem><a style ={{textDecoration: 'none'}} target = "_blank" href = "github.com/discord-pizza-bot">Discord Pizza Bot GitHub</a></ListGroupItem>
                    <ListGroupItem>Tech: Selenium, Discord.py</ListGroupItem>
                  </ListGroup>
                </Card>
              </Col> 
              <Col sm = {12} md = {6} lg = {6}> 
                <Card className = "bob-on-hover mt-3" border style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>🎾 Tennis Friends </Card.Title>
                      <Card.Text>
                        Last winter, I also spent a lot of time creating a social network website to help tennis players find people of equal level to hit with. 
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                    <ListGroupItem><a style ={{textDecoration: 'none'}} target = "_blank" href = "github.com/tennis-react">Tennis w/ friends link</a></ListGroupItem>
                    <ListGroupItem>Tech: React.js, Firebase</ListGroupItem>

                  </ListGroup>
                </Card>
              </Col>
              <Col xs = {6} sm = {6} md = {6} lg = {6}>
                <Card className = "bob-on-hover mt-3" border style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title> 🔧 Detroit Manufacturing Systems </Card.Title>
                      <Card.Text>
                        I participated in a company sponsored project through the Multidisciplinary Design Program. I spent a year in a manufacturing plant optimizing operations and the supply chain of rejected automotive parts. 
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroupItem><a style ={{textDecoration: 'none'}} target = "_blank" href = "https://tinyurl.com/DetroitMS"> Poster Link</a></ListGroupItem>
                      <ListGroupItem>Concepts used: Six Sigma DMAIC </ListGroupItem>
                    </ListGroup>
                </Card>
              </Col> 
              <Col sm = {12} md = {6} lg = {6}>  
                <Card className = "bob-on-hover mt-3" border style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title> 📄 Cover Letter Generator</Card.Title>
                      <Card.Text>
                        I created a cover letter generator with my friend to help us navigate recruiting and applying to different types of jobs easily.  
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroupItem><a style ={{textDecoration: 'none'}} target = "_blank" href = "github.com/mac">Cover Letter Generator GitHub</a></ListGroupItem>
                      <ListGroupItem>Tech: Python</ListGroupItem>
                    </ListGroup>
                </Card>
              </Col>
            </Row>
          </Container> 
          


          <h3 id = "recommendations" className = "mt-3"> <BsPeopleFill/> Recommendations  </h3> 
          <p> Some recommendations I've gotten from my managers in my past work experiences. </p> 
          <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header className = "d-flex align-items-center" >
              <Image src = {Enova} style = {{width: "1.5rem"}} rounded/>&nbsp; 
              <p className ="p-0 m-0"> Shivam Malhotra, Product Manager @ Enova International</p>
            </Accordion.Header>
            <Accordion.Body>
            <figure class="text-start">
              <blockquote style = {{fontSize: "1rem"}} class="blockquote">
                <p>Oliver's work and attitude were very impressive during his summer internship at Enova. He is very methodical and thoughtful in his approach; that behavior was consistent throughout his time. He is a great team player and collaborator. He understands the value of end-user and stakeholder feedback. Not only did he proactively seek inputs from different team members, but he was also able to consolidate all the inputs to make recommendations and build the right solutions. Every time he presented, he was very confident and had done his due diligence. Furthermore, he is very energetic in his attitude and has a passion for learning while having fun in the process.</p>
              </blockquote>
              <figcaption class="blockquote-footer">
                <cite title="Source Title"><a style = {{textDecoration: "none"}}target = "_blank" href = "https://www.linkedin.com/in/shivammalhotra/"> Shivam Malhotra </a> </cite>
              </figcaption>
            </figure>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header className = "d-flex align-items-center">
                <Image src = {Principal} style = {{width: "1.5rem"}} rounded/>&nbsp; 
                <p className ="p-0 m-0"> Haiyang (Ocean) Zhang, Data Scientist @ Principal Financial Group </p> 
            </Accordion.Header>
            <Accordion.Body>
              <figure class="text-start">
              <blockquote style = {{fontSize: "1rem"}} class="blockquote">
                <p>Oliver is a fast learner and team player, and he is very reliable in work. I managed Oliver while he worked as a Data Science and Operations Research intern at Principal Financial Group in summer 2019. I was particularly impressed by Oliver’s ability to pick up a new technical skill in a such short time period. He started learning SQL in the first week of his internship and became to a master of SQL after a few weeks. No matter how tough a task assigned to him, Oliver always positively handled it and made sure ask the right questions to solve the problem. Oliver would be an asset to any team looking for a reliable and fun employee with good learning capacity. </p>
              </blockquote>
              <figcaption class="blockquote-footer">
                <cite title="Source Title"><a style = {{textDecoration: "none"}}target = "_blank" href = "https://www.linkedin.com/in/haiyang-ocean-zhang/"> Haiyang Zhang</a> </cite>
              </figcaption>
            </figure>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>


        </Col>
        



      </Row>
      {/* <p style = {{marginLeft: "20px"}}> Portfolio made from scratch with the help of React.js & Bootstrap  </p>
      <p style = {{marginLeft: "20px"}}> &copy; Oliver Li, 2021</p>  */}
    </Container>

  {/* <Route exact path="/" component={Home}></Route> */}
</div>
  // </Router>

);
}
export default App;