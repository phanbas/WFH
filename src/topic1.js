import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Card, Row, Col, Container} from 'react-bootstrap';
import { BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom';
import HomepageTopbar from './homepage-topbar';
import HomepageFooter from './homepage-footer';


function Topic1(){
    return (
        <>
        
        <HomepageTopbar/>
        <Row>
          <img src={require('./pic/topic1-picshow.png')} ></img>
        </Row>
        <Container>
        <br/>
        <Card body>
        <p className='desc'>&emsp;&emsp;&emsp;ด้วยความที่คนไทยเรามีความเชื่อเกี่ยวกับเรื่องดวงและไสยศาสตร์กันอยู่แล้ว ทำให้ ณ 
        ตอนนี้คนไทยเราเปิดรับความเชื่อเกี่ยวกับมูเตลูกันกว้างขวางมากขึ้น ไม่ว่าจะเป็น การใส่อุปกรณ์ต่างๆ (กำไร สร้อยคอ ฯลฯ) 
        การสักยันต์ วอลล์เปเปอร์หน้าจอโทรศัพท์เสริมดวง การขอพรตามสถานที่ต่างๆ และนี่คือสิ่งที่เรากำลังจะพูดถึงนั่นก็คือ “วัด” หรือ “สถานที่”
        ทั่วประเทศที่เหล่าคนไทยได้มีการเดินทางไปด้วยหวังที่ว่า เราจะไปขอพร กราบไหว้ บูชา และขอในสิ่งที่เราหวังไว้ ทั้งในเรื่องของ ความรัก การงาน 
        สุขภาพ ชีวิต และอื่นๆอีกมากมาย ไม่เพียงแต่ในประเทศไทยเท่านั้น สถานที่เหล่านี้มีที่ตั้งอยู่ทั่วโลกหลายประเทศ โดยมีหลักการเดียวกันคือเป็นแหล่งที่ตั้งเพื่อให้ประชาชนมาบูชานั่นเอง</p>
        </Card>;
        <Row className='justify-content-md-center'>
        
            <Col md ={5}  className='topic-left hover01 topicbox'>
                <Link to="love">
                    <figure>
                        <img src={require('./pic/topic1-love.png')} alt=""/>
                    </figure>
                </Link>
            </Col>
        
            <Col md ={5} className='topic-right hover01 topicbox'>
                <Link to="work">
                    <figure>
                        <img src={require('./pic/topic1-work.png')} alt=""/>
                    </figure>
                </Link>
            </Col>
        </Row>
        <Row className='justify-content-md-center'>
            <Col md ={5} className='topic-left hover01 topicbox'>
                <Link to="money">

                    <figure>
                        <img src={require('./pic/topic1-money.png')} alt=""/>
                    </figure>

                </Link>
            </Col>
            <Col md ={5} className='topic-right hover01 topicbox'>
                <Link to="study">

                    <figure  className='position-relative'>
                        <img src={require('./pic/topic1-study.png')} alt=""/>
                    </figure>

                </Link>
            </Col>
        </Row>
        <Row className='justify-content-md-center'>
            <Col md ={5} className='topic-left hover01 topicbox'>
                <Link to="healthy">

                    <figure>
                        <img src={require('./pic/topic1-healthy.png')} alt=""/>
                    </figure>

                </Link>
            </Col>
            <Col md ={5} className='topic-right hover01 topicbox'>
                <Link to="trade">

                    <figure>
                        <img src={require('./pic/topic1-trade.png')} alt=""/>
                    </figure>

                </Link>
            </Col>
        </Row>
        </Container>
        <HomepageFooter/>
        </>
      );
    }


export default Topic1;