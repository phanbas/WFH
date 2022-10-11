import logo from './logo.svg';
import React from 'react';
import { Button, Card, Row, Col, Container} from 'react-bootstrap';
import { BrowserRouter as Router,Link, Route } from 'react-router-dom';
import './blogger.css'
import HomepageTopbar from './homepage-topbar';
import HomepageFooter from './homepage-footer';
import Carousel from 'react-multi-carousel';


function Blogs(){
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

    return (
    <>

        <img style={{position:'relative'}} src={require('./pic/picshow.png')}></img>
<Col md ={12}>
        <Carousel responsive={responsive}>
          <div>
            <Link to ='topic1'>
              <img style={{position:'relative'}} src={require('./pic/temple1.png')}></img>
            </Link>
            <div className='text-image'>
              <h1>Topic 1</h1>
            </div>
          </div>
          <div>
            <img style={{position:'relative'}} src={require('./pic/temple4.png')}></img>
            <div className='text-image'>
              <h1>Topic 2</h1>
            </div>
          </div>
          <div>
            <img style={{position:'relative'}} src={require('./pic/temple3.png')}></img>
            <div className='text-image'>
              <h1>Topic 3</h1>
            </div>
          </div>
          <div>
            <img style={{position:'relative'}} src={require('./pic/temple1.png')}></img>
            <div className='text-image'>
              <h1>Topic 4</h1>
            </div>
          </div>
          <div>
            <img style={{position:'relative'}} src={require('./pic/temple4.png')}></img>
            <div className='text-image'>
              <h1>Topic 5</h1>
            </div>
          </div>
          <div>
            <img style={{position:'relative'}} src={require('./pic/temple3.png')}></img>
            <div className='text-image'>
              <h1>Topic 6</h1>
            </div>
          </div>
         
        </Carousel> 
        </Col>
    <br/>
  <Container style={{ backgroundColor:'lightblue'}}>
      <Row>
        <Col md={4} lg={4} sm={4} style={{padding:10}}>
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
        <Col md={4} lg={4} sm={4} style={{padding:10}}>
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
        <Col md={3} lg={3} sm={3} style={{padding:10,marginLeft:'auto'}}>
          <Card style={{marginTop:10}}>
            <h1 style={{textAlign:'center'}}>Best Topic</h1>
              <Card.Img variant="top" src={require('./pic/icon-image.png')}  style={{marginTop:10}}/>
              <Card.Body>
                <Card.Title><p>Title</p></Card.Title>
                <div className='card-text'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                <br/>
              </Card.Body>
              <Card.Img variant="top" src={require('./pic/icon-image.png')}   style={{marginTop:10}}/>
              <Card.Body>
                <Card.Title><p>Title</p></Card.Title>
                <div className='card-text'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                <br/>
              </Card.Body>
              <Card.Img variant="top" src={require('./pic/icon-image.png')}   style={{marginTop:10}}/>
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