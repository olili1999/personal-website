import Home from './components/Home';
import NavigationBar from './components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import headshot_outside from './headshot_outside.jpg'
import { FaMapMarker, FaGithub, FaClipboardCheck} from "react-icons/fa";
import {Card, Row, Col, Button, ListGroupItem, ListGroup, Container, Image, OverlayTrigger, Tooltip, Accordion, ProgressBar} from 'react-bootstrap';
import { BsPersonLinesFill, BsPeopleFill} from "react-icons/bs";
import {MdWork, MdEmail} from "react-icons/md"; 
import {IoLogoLinkedin} from "react-icons/io";
import { IoDocumentTextSharp } from "react-icons/io5";
import {GiProgression} from "react-icons/gi";

import Umich from "./UMich.png"; 
import Enova from "./enova-logo.png"; 
import Principal from "./principal.png"; 
import BT from "./BT.png";
import {Twemoji} from "react-emoji-render";
import React, { useState, useEffect } from 'react';
import {GoPencil} from "react-icons/go";




// https://faiizii992.medium.com/creating-a-navbar-using-react-router-dom-and-react-bootstrap-react-router-bootstrap-e6b59015a5ec

function App() {



return (
<div className="App">
    {/* <Router> */}
    <div style = {{position: "sticky", top: 0, zIndex: 1000}}> <NavigationBar ></NavigationBar></div>

    <Container fluid> 

      <Row style = {{height: "100%"}}> 

        {/* Big Outer Column #1 */}
        <Col xs = {12} sm = {12} md ={3} style = {{height: "100%"}} className = "stickyClass d-flex justify-content-center"> 
          <Card className = "box-shadow mt-4 mb-5" style={{width: '20rem'}}>
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
            <ListGroupItem><FaMapMarker/> Ann Arbor, MI &nbsp;| &nbsp;
             
              <OverlayTrigger placement ="bottom" overlay={<Tooltip> Recently got into rock climbing & I really like it!</Tooltip>}>
                <span style = {{display: ""}} className = "m-0 p-0"><Twemoji text = "🧗‍♂️"/></span>
              </OverlayTrigger> &nbsp;
              <OverlayTrigger placement ="bottom" overlay={<Tooltip> Last summer I ran mile a day at the last for ~75 days straight</Tooltip>}>
                <span style = {{display: ""}} className = "m-0 p-0"><Twemoji text = "🏃"/></span>
              </OverlayTrigger> &nbsp;  
              <OverlayTrigger placement ="bottom" overlay={<Tooltip> Club Tennis @UMICH</Tooltip>}>
                <span style = {{display: ""}} className = "m-0 p-0"><Twemoji text = "🎾"/></span>
              </OverlayTrigger> &nbsp;            
              <OverlayTrigger placement ="bottom" overlay={<Tooltip> Web Dev & Design</Tooltip>}>
                <span style = {{display: ""}} className = "m-0 p-0"><Twemoji text = "💻"/></span>
              </OverlayTrigger> &nbsp;  
              <OverlayTrigger placement ="bottom" overlay={<Tooltip> Guitar</Tooltip>}>
                <span style = {{display: ""}} className = "m-0 p-0"><Twemoji text = "🎸"/></span>
              </OverlayTrigger> &nbsp;  
       
              
            </ListGroupItem>



            <ListGroupItem><MdEmail/> <a style ={{textDecoration: 'none'}} target = "_blank" href ="mailto:olili@umich.edu">E-mail</a> </ListGroupItem>
            <ListGroupItem><IoLogoLinkedin />&nbsp;<a style ={{textDecoration: 'none'}} target = "_blank" href = "https://www.linkedin.com/in/oliver-y-li/">LinkedIn</a></ListGroupItem>
            <ListGroupItem><FaGithub/>&nbsp;<a style ={{textDecoration: 'none'}} target = "_blank"  href ="https://github.com/olili1999">GitHub</a> </ListGroupItem>
            <ListGroupItem><IoDocumentTextSharp/> <a style ={{textDecoration: 'none'}} target = "_blank" href ="https://drive.google.com/file/d/1_xpoY7JNl5T4BFgI1oRm1boCCKXlTTMd/view?usp=sharing">Resume</a> </ListGroupItem>
          </ListGroup>
          </Card>

        </Col>
        {/* Big Outer Column #2 */}
        <Col className = "d-flex flex-column" xs = {12} sm = {12} md = {9} style = {{}}>

          <h3 id = "about" className = "mt-3"> <BsPersonLinesFill/> About Me </h3> 
          <p className = "p-0 m-0"> Hey, nice to meet you! I'm Oliver, a tennis player, runner, rock climber, programmer, and student at the University of Michigan. </p> 
          <h3 id = "skills" className = "mt-4 mb-4"> <GiProgression/> Skills </h3> 


          <div className = "d-flex flex-column align-items-center">
            <div className ="barContainer mb-4"> 
              <div className = "d-flex justify-content-between bar"> 
                <p className = "m-0 p-0 float-left">Python</p>
                <p className = "m-0 p-0 float-right">90%</p>
              </div>
              <ProgressBar variant="info" min = "0" max = "100" now = "90" className = "bar"/>
            </div>
            <div className ="barContainer mb-4"> 
              <div className = "d-flex justify-content-between bar"> 
                <p className = "m-0 p-0 float-left">Querying Languages (SQL, Splunk)</p>
                <p className = "m-0 p-0 float-right">75%</p>
              </div>
              <ProgressBar variant="primary" min = "0" max = "100" now = "75" className = "bar"/>
            </div>
            <div className ="barContainer mb-4"> 
              <div className = "d-flex justify-content-between bar"> 
                <p className = "m-0 p-0 float-left">Frontend (React.js, HTML, CSS, Javascript) </p>
                <p className = "m-0 p-0 float-right">50%</p>
              </div>
              <ProgressBar variant="success" min = "0" max = "100" now = "50" className = "bar"/>
            </div>
            <div className ="barContainer mb-4"> 
              <div className = "d-flex justify-content-between bar"> 
                <p className = "m-0 p-0 float-left">C++</p>
                <p className = "m-0 p-0 float-right">60%</p>
              </div>
              <ProgressBar variant="warning" min = "0" max = "100" now = "60" className = "bar"/>
            </div>
            <div className ="barContainer mb-4"> 
              <div className = "d-flex justify-content-between bar"> 
                <p className = "m-0 p-0 float-left">UI/UX Design (Figma, Wireframing & Prototyping)</p>
                <p className = "m-0 p-0 float-right">85%</p>
              </div>
              <ProgressBar variant="danger" min = "0" max = "100" now = "85" className = "bar"/>
            </div>
          </div>
          <h3 id = "work_experience" className = "mt-5"> <MdWork/> Work Experience </h3> 
          <p> My work experience spans across data science, strategy & operations, and product management.  </p> 


{/*  defaultActiveKey="0" */}
          <Accordion className = "mb-5">
            <Accordion.Item eventKey="0" >
              <Accordion.Header className = "d-flex align-items-center">
                <Image src = {BT} style = {{width: "1.5rem"}} rounded/>&nbsp; 
                <p className = "m-0 p-0"> Belvedere Trading - Product Analyst Intern (Summer 2021) </p>
              </Accordion.Header>
              <Accordion.Body>
                <h6 className = "p-0 m-0"> <FaMapMarker/>&nbsp;Chicago, IL (Remote) </h6> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;At Belvedere, I worked as a product analyst intern. The first 6 weeks of our internship were 
                spent in Belvedere Trading University (BTU), where we took classes on the basics of <mark>market making</mark>, <market>core options theory</market>, basic dev environments, and internal belvedere systems. Alongside our rigorous courses in BTU, we shadowed across all the different products 
                and year-long initiatives across the company. Throughout our shadows, we were assigned work to complete across every stage of the <mark> product management lifecycle.</mark> We worked with several different end users, from traders (the most common of course), accounts, clerks, and risk managers to define 
                and clarify business requirements for feature requests, helped to guide software engineers with implementation, performed functional reviews of that code, and finally ensured rollout of features was successful and safe with A/B testing across different teams. 
                <br/> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;One of my favorite parts of the summer was the week long <mark> intern hackathon.</mark> We got to experience an intense and condensed version of the whole product management lifecycle. We ended up creating a web app that simulates a live
                trading environment with performance metrics for candidates, allowing Belvedere to make more data-driven decisions on hiring future candidates. This was a super cool project because it was one of the projects that was fully implemented by my team and is <mark> actually going to be used this upcoming recruiting cycle.</mark> For this project, I acted as product manager by making sure the business requirements we laid out beforehand were implemented and also contributed
                by creating the frontend interface. 
                <br/> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Another hefty chunk of my time was spent in <mark> Splunk</mark>, a hybrid query language that allows you to easily generate visualizations and large scale dashboards. I spearheaded a Splunk dashboard that allowed stakeholders (Product, Traders, Support) to more easily investigate and understand the reasoning behind the decisions of one of Belvedere's autofitting algorithms. I finished the project half way through the internship and it ended up <mark> saving stakeholders an estimated 10 hrs/week total.</mark>&nbsp;
                In the latter half of the internship, I worked on revamping one of Belvedere's open interest dashboards. <mark>Open interest</mark> is the concept of how many total contracts are out in the market at the end of a trading day. This dashboard was helpful for traders to have a high level view of the marketand also know how much of that market Belvedere captures. In the old dashboard, the problem was the values for different days 
                were being aggregated into one. However, this doesn't really help when looking at Open Interest because you want to see how it changes per trading day. The main contribution I had was to <mark> change the data aggregation</mark> to be at a more <mark> granular level </mark>and I also corrected some calculation errors to <mark>gain trust</mark> from traders to use the product. 

                </Accordion.Body>

            </Accordion.Item>

             <Accordion.Item eventKey="1">
              <Accordion.Header className = "d-flex align-items-center">
                <Image src = {Enova} style = {{width: "1.5rem"}} rounded/>&nbsp; 
                <p className = "m-0 p-0"> Enova International - Strategy & Operations Intern (Summer 2020) </p>
              </Accordion.Header>
              <Accordion.Body>
                <h6 className = "p-0 m-0"> <FaMapMarker/>&nbsp;Chicago, IL (Remote) </h6> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I worked at Enova International as the sole S&O intern with a focus
                on <mark>product launch strategy.</mark>
                &nbsp;Collaborating with various stakeholders in many departments, <mark>I lead</mark> feature ideation 
                and prioritization for Headway Capital Account Home. Headway Capital is Enova's main small business lending 
                branch and Account Home is similar to any Bank app's home page: you're able to see your current balance, how much you owe, etc.
                <mark> I ended up shipping a feature</mark> called "Draw Cost Configurator." 
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The main problem people have when dealing with any type of loan is transparency and clarity. The Draw Cost Configurator
                sought to fix this problem by allowing customers to toggle their loan details such as draw amount, term length, payment amount, and payment frequency 
                and, most importantly, visualize that contract. One of the biggest takeaways I learned is that while business owners
                are really good at what they do, they almost always are very unfamiliar with both their own finances and financial contracts.
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This tool effectively<mark> increased trust between Enova</mark> and its existing customers as well as  
                <mark> decreased the number of defaults on loans.</mark> This feature gave Enova a <mark>huge competitive advantage </mark>
                over its competitors by giving customers so much more freedom and insight into what 
                they were signing. 
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
            <Accordion.Header className = "d-flex align-items-center">
                <Image src = {Principal} style = {{width: "1.5rem"}} rounded/>&nbsp; 
                <p className ="p-0 m-0"> Principal Financial Group - Data Science Intern (Summer 2019)</p> 
            </Accordion.Header>              
            <Accordion.Body>
                <h6 className = "p-0 m-0"> <FaMapMarker/>&nbsp; Des Moines, Iowa </h6> 
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



            <h3 id = "projects" className = "mt-5"> <FaClipboardCheck/> Projects </h3> 
            <p class> I enjoy working on a variety of projects both academic and some for fun. Here are a few examples:</p> 
            <Container className = "mb-3"> 
              <Row> 
                <Col className = "center-cards" sm = {12} md = {6} lg = {6}> 
                  <Card className = "box-shadow bob-on-hover mt-3" border style={{ width: '18rem' }}>
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
                <Col className = "center-cards" sm = {12} md = {6} lg = {6}> 
                  <Card className = "box-shadow bob-on-hover mt-3" border style={{ width: '18rem' }}>
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
                <Col className = "center-cards" sm = {12} md = {6} lg = {6}>
                  <Card className = "box-shadow bob-on-hover mt-3" border style={{ width: '18rem' }}>
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
                <Col className = "center-cards" sm = {12} md = {6} lg = {6}>  
                  <Card className = "box-shadow bob-on-hover mt-3" border style={{ width: '18rem' }}>
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



          <h3 id = "coursework" className = "mt-5"> <GoPencil/> Coursework </h3> 
          <p class = "p-0 m-0 "> Here are some notable classes I've taken & been involved with: </p> 
          <Container className = "mb-5"> 
              <Row> 
                <Col className = "center-cards" md = {6} lg = {4}> 
                  <Card className = "box-shadow bob-on-hover mt-3" border style={{ width: '18rem' }}>
                      <Card.Body>
                        <Card.Title> <a style ={{textDecoration: 'none'}} target = "_blank" href = "https://www.eecs.umich.edu/courses/eecs281/"> Data Structures & Algorithms </a></Card.Title>
                        <Card.Text>
                        Introduction to algorithm analysis and O-notation; Fundamental data structures including lists, stacks, queues, priority queues, 
                        hash tables, binary trees, search trees, balanced trees and graphs; 
                        searching and sorting algorithms.
                        </Card.Text>
                      </Card.Body>
                  </Card>
                </Col>
                <Col className = "center-cards" md = {6} lg = {4}> 
                  <Card className = "box-shadow bob-on-hover mt-3" border style={{ width: '18rem' }}>
                      <Card.Body>
                        <Card.Title><a style ={{textDecoration: 'none'}} target = "_blank" href = "https://www.si.umich.edu/programs/courses/539"> Frontend Web Design </a></Card.Title>
                        <Card.Text>
                          The purpose of this course is to provide students with all necessary frontend development skills for designing and building responsive and accessible websites. 
                          Topics include recent changes to HTML, CSS and WCAG standards, media-queries, responsive frameworks, and manual and automated testing.
                        </Card.Text>
                      </Card.Body>
                      <ListGroup className="list-group-flush">
                        <ListGroupItem>TA for both grad and undergrad class. Winter/Fall '21</ListGroupItem>
                      </ListGroup>
                  </Card>
                </Col>
                <Col className = "center-cards" md = {6} lg = {4}> 
                  <Card className = "box-shadow bob-on-hover mt-3" border style={{ width: '18rem' }}>
                      <Card.Body>
                        <Card.Title><a style = {{textDecoration: 'none'}} target = "_blank" href = "https://drive.google.com/file/d/1nIXXwwPOuQ2TnefQZMacXeFg4Rmkf2Jn/view?usp=sharing"> UI/UX Design</a></Card.Title>
                        <Card.Text>
                          The focus of this course is to introduce you to User Interface and User Experience (UX/UX)
                          Design. In this course you will learn how to discover and assess user needs, how to generate
                          design ideas and quickly prototype them, and how to gather user feedback. You will also learn
                          principles of human perception and cognition that inform effective interface design.
                        </Card.Text>
                      </Card.Body>
                  </Card>
                </Col>
               
              </Row>
            </Container> 




          <h3 id = "recommendations" className = "mt-5"> <BsPeopleFill/> Recommendations  </h3> 
          <p> Some recommendations I've gotten from my managers in my past work experiences. </p> 
          <Accordion className = 'mb-5'>
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