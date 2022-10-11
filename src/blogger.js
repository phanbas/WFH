import logo from './logo.svg';
import React from 'react';
import { Button, Card, Row, Col, Container} from 'react-bootstrap';
import { BrowserRouter as Router,Link, Route } from 'react-router-dom';
import './blogger.css'
import HomepageTopbar from './homepage-topbar';
import HomepageFooter from './homepage-footer';
import Carousel from 'react-multi-carousel';


function Blogs(){
    return (
    <>

        <img style={{position:'relative'}} src={require('./pic/picshow.png')}></img>
  <Container style={{ backgroundColor:'lightblue'}}>
      <Row>
        <Col md={3} style={{padding:10}}>
          <Card style={{marginTop:10}}>
              <Card.Img variant="top" src={require('./pic/icon-image.png')} />
              <Card.Body>
                <Card.Title><p>Title</p></Card.Title>
                <div className='card-text'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                <br/>
              </Card.Body>
          </Card>
          <Card style={{marginTop:10}}>
              <Card.Img variant="top" src={require('./pic/icon-image.png')} />
              <Card.Body>
                <Card.Title><p>Title</p></Card.Title>
                <div className='card-text'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                <br/>
              </Card.Body>
          </Card>
          <Card style={{marginTop:10}}>
              <Card.Img variant="top" src={require('./pic/icon-image.png')} />
              <Card.Body>
                <Card.Title><p>Title</p></Card.Title>
                <div className='card-text'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                <br/>
              </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={4} style={{padding:10}}>
          <Card style={{marginTop:10}}>
              <Card.Img variant="top" src={require('./pic/icon-image.png')} />
              <Card.Body>
                <Card.Title><p>Title</p></Card.Title>
                <div className='card-text'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                <br/>
              </Card.Body>
          </Card>
          <Card style={{marginTop:10}}>
              <Card.Img variant="top" src={require('./pic/icon-image.png')} />
              <Card.Body>
                <Card.Title><p>Title</p></Card.Title>
                <div className='card-text'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                <br/>
              </Card.Body>
          </Card>
          <Card style={{marginTop:10}}>
              <Card.Img variant="top" src={require('./pic/icon-image.png')} />
              <Card.Body>
                <Card.Title><p>Title</p></Card.Title>
                <div className='card-text'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                <br/>
              </Card.Body>
          </Card>
        </Col>

      </Row>

  </Container>
<br/>
    
    </>
      );
    }


export default Blogs;