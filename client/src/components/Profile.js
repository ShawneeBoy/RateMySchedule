import React from "react";
import BottomNav from "./BottomNav";
import Header from "./Header";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Rating from '@mui/material/Rating'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import pfp from '../assets/pfp.svg';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import {medals, prefixes, suffixes} from "./AchievementData"
import ExpBar from "./ProgressBar";


export default function Profile (props) {
  let randNums = [Math.floor(Math.random() * medals.length),
                  Math.floor(Math.random() * medals.length), 
                  Math.floor(Math.random() * medals.length)];
  return (
    <Card body>
      <Container fluid className="text-center">
        <Row>
          <Figure>
           <Figure.Image
             width={171}
             height={180}  
             alt="171x180"
             src={pfp}
            />
            <Figure.Caption>
              {props.name}
            </Figure.Caption>
         </Figure>
        </Row>

        <Row style={{margin: "20px"}}>
          <ExpBar/>
        </Row>
          
        <Row>
          <p>Year: {props.year}</p>
        </Row>

        <Row>
          <p>Major: {props.major}</p>
        </Row>

        <Row>
          <p>Schedules rated: {props.numSchedules}</p>
        </Row>

        <Row>
          <p>Credits: {props.numCredits}</p>
        </Row>
        
        <Row>
          <p>Credibility Rating: <Rating name={"read-only"} value={props.rating} precision= {0.1} readOnly style={{marginLeft: "5px"}}/></p>
        </Row>
        <Row>
          <Col>
            <Figure>
            <Figure.Image
              width={25}
              height={25}  
              alt="171x180"

              src={medals[randNums[0]]}
              />
              <Figure.Caption>
                {prefixes[randNums[0]] + suffixes[Math.floor(Math.random() * suffixes.length)]}
              </Figure.Caption>
            </Figure>
          </Col>
          <Col>
            <Figure>
            <Figure.Image
              width={25}
              height={25}  
              alt="171x180"
              src={medals[randNums[1]]}
              />
              <Figure.Caption>
                {prefixes[randNums[1]] + suffixes[Math.floor(Math.random() * suffixes.length)]}
              </Figure.Caption>
            </Figure>
          </Col>
          <Col>
            <Figure>
            <Figure.Image
              width={25}
              height={25}  
              alt="171x180"
              src={medals[randNums[2]]}
              />
              <Figure.Caption>
                {prefixes[randNums[2]] + suffixes[Math.floor(Math.random() * suffixes.length)]}
              </Figure.Caption>
            </Figure>
          </Col>
        </Row>

      </Container>
    </Card>

    // <div>
    //   <Header/>
    //   <h1 className = "text-center">My Profile</h1>
    //   <Container fluid = "sm">
    //     <Figure>
    //     <Figure.Image
    //       width={171}
    //       height={180}  
    //       alt="171x180"
    //       src={pfp}
    //     />
    //     <Figure.Caption>
    //       you
    //     </Figure.Caption>
    //     </Figure>
    //   </Container>
    //   <Container fluid = "sm">
    //     <Row>
    //       <Col></Col>
    //       <Col>    
          
    //       </Col>
    //       <Col></Col>
    //     </Row>
    //     <Row>
    //       <Col></Col>
    //       <Col></Col>
    //       <Col></Col>
    //       <Col></Col>
    //     </Row>
    //     <Row>
    //       <Col><p>Your rating: <Rating name={"read-only"} value={0} precision= {0.1} readOnly style={{marginLeft: "5px"}}/></p></Col>
    //       <Col><p>Your rating: <Rating name={"read-only"} value={0} precision= {0.1} readOnly style={{marginLeft: "5px"}}/></p></Col>
    //       <Col><p>Your rating: <Rating name={"read-only"} value={0} precision= {0.1} readOnly style={{marginLeft: "5px"}}/></p></Col>
    //       <Col><p>Your rating: <Rating name={"read-only"} value={0} precision= {0.1} readOnly style={{marginLeft: "5px"}}/></p></Col>
    //     </Row>
    //   </Container>    
    //   <BottomNav/>
    // </div>
  );
}