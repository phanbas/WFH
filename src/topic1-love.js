
import './App.css';
import React, { useEffect} from 'react';
import {useState} from 'react';
import {  Card, Row, Container} from 'react-bootstrap';
import HomepageTopbar from './homepage-topbar';
import HomepageFooter from './homepage-footer';


function Topic1Love(){
    const [data, setData] = useState([])
  useEffect(()=>{
    fetch("https://phanbas-strapi.herokuapp.com/api/loves")
    .then(res =>res.json())
    .then(data => setData(data.data));
  }, []);

    return (
        <>
        <HomepageTopbar/>
        <body>
        <Row>
          <img src={require('./pic/picshow-love.jpg')} ></img>
        </Row>
        
        <br/>
        <div className='topic-text'>
            {data.map((val)=>
                    val.id===2 && <p style={{fontWeight:'bold'}}>{val.attributes.name}</p>
                )}
        </div>
        
        <Container>
        <Card body>
        <br/>
            {data.map((val)=>
                val.id===2 && <p className='desc'>&emsp;&emsp;{val.attributes.desc}</p>
            )}
        <br/>
        </Card>;
        
        <div style={{ width: '80%', padding:20, textAlign:'center',margin:'auto',marginTop:50 }}>

            {data.map((val)=>
                val.id===3 && <Card.Title><p className='name'>{val.attributes.name}</p></Card.Title>
                
            )}
            <br/>
            <Card.Img variant="top" src={require('./pic/love1.png')} style={{width:'70%',margin:'auto'}} />
                
            
            <div style={{marginTop:20}}>
                {data.map((val)=>
                val.id===3 && 
                <Card.Body>
                    <Card.Text>
                    <p style={{textAlign:'left'}}>&emsp;&emsp;{val.attributes.desc}</p>
                    </Card.Text>
                    <p className='bold'>คาถาบูชา</p>
                    <Card.Text>
                        <p>{val.attributes.spell}</p>
                    </Card.Text>
                    <p className='bold'>ของไหว้บูชา</p>
                    <Card.Text>
                        <p>{val.attributes.gift}</p>
                    </Card.Text>
                    <p className='bold'>เวลาในการขอพร</p>
                    <Card.Text>
                        <p>{val.attributes.time}</p>
                    </Card.Text>
                    <p className='bold'>การเดินทาง</p>
                    <Card.Text>
                        <p>{val.attributes.travel}</p>
                    </Card.Text>
                </Card.Body>
                
            )}
            </div>
            
                
        </div>
        
        <div style={{ width: '80%', padding:10, textAlign:'center',margin:'auto',marginTop:50 }}>

            {data.map((val)=>
                val.id===4 && <Card.Title><p className='name'>{val.attributes.name}</p></Card.Title>
                
            )}
            <br/>
            <Card.Img variant="top" src={require('./pic/love2.png')} style={{width:'70%',margin:'auto'}} />
            <br/>
            <div style={{marginTop:20}}>
                {data.map((val)=>
                val.id===4 && 
                <Card.Body>
                    <Card.Text>
                    <p style={{textAlign:'left'}}>&emsp;&emsp;{val.attributes.desc}</p>
                    </Card.Text>
                    <p className='bold'>คาถาบูชา</p>
                    <Card.Text>
                    {val.attributes.spell}
                    </Card.Text>
                    <p className='bold'>ของไหว้บูชา</p>
                    <Card.Text>
                    {val.attributes.gift}
                    </Card.Text>
                    <p className='bold'>เวลาในการขอพร</p>
                    <Card.Text>
                    {val.attributes.time}
                    </Card.Text>
                    <p className='bold'>การเดินทาง</p>
                    <Card.Text>
                    {val.attributes.travel}
                    </Card.Text>
                </Card.Body>
                
            )}
</div>
            
                
        </div>

        <div style={{ width: '80%', padding:10, textAlign:'center',margin:'auto',marginTop:50 }}>

            {data.map((val)=>
                val.id===5 && <Card.Title><p className='name'>{val.attributes.name}</p></Card.Title>
                
            )}
            <br/>
            <Card.Img variant="top" src={require('./pic/love3.png')} style={{width:'70%',margin:'auto'}} />
            <br/>
            <div style={{marginTop:20}}>
                {data.map((val)=>
                                val.id===5 && 
                <Card.Body>
                    <Card.Text>
                    <p style={{textAlign:'left'}}>&emsp;&emsp;{val.attributes.desc}</p>
                    </Card.Text>
                    <p className='bold'>คาถาบูชา</p>
                    <Card.Text>
                    {val.attributes.spell}
                    </Card.Text>
                    <p className='bold'>ของไหว้บูชา</p>
                    <Card.Text>
                    {val.attributes.gift}
                    </Card.Text>
                    <p className='bold'>เวลาในการขอพร</p>
                    <Card.Text>
                    {val.attributes.time}
                    </Card.Text>
                    <p className='bold'>การเดินทาง</p>
                    <Card.Text>
                    {val.attributes.travel}
                    </Card.Text>
                </Card.Body>
                                
                            )}
            </div>
            
                
        </div>

        <div style={{ width: '80%', padding:10, textAlign:'center',margin:'auto',marginTop:50 }}>

            {data.map((val)=>
                val.id===6 && <Card.Title><p className='name'>{val.attributes.name}</p></Card.Title>
                
            )}
            <br/>
            <Card.Img variant="top" src={require('./pic/love4.png')} style={{width:'70%',margin:'auto'}} />
            <br/>
            <div style={{marginTop:20}}>
                {data.map((val)=>
                                val.id===6 && 
                <Card.Body>
                    <Card.Text>
                    <p style={{textAlign:'left'}}>&emsp;&emsp;{val.attributes.desc}</p>
                    </Card.Text>
                    <p className='bold'>คาถาบูชา</p>
                    <Card.Text>
                    {val.attributes.spell}
                    </Card.Text>
                    <p className='bold'>ของไหว้บูชา</p>
                    <Card.Text>
                    {val.attributes.gift}
                    </Card.Text>
                    <p className='bold'>เวลาในการขอพร</p>
                    <Card.Text>
                    {val.attributes.time}
                    </Card.Text>
                    <p className='bold'>การเดินทาง</p>
                    <Card.Text>
                    {val.attributes.travel}
                    </Card.Text>
                </Card.Body>  
                            )}
            </div>
            
                
        </div>
            
        <div style={{ width: '80%', padding:10, textAlign:'center',margin:'auto',marginTop:50 }}>
            {data.map((val)=>
                val.id===7 && <Card.Title><p className='name'>{val.attributes.name}</p></Card.Title>  
            )}
            <br/>
            <Card.Img variant="top" src={require('./pic/love5.png')} style={{width:'70%',margin:'auto'}} />
            <br/>

            <div style={{marginTop:20}}>
                {data.map((val)=>
                                val.id===7 && 
                <Card.Body>
                    <Card.Text><p style={{textAlign:'left'}}>&emsp;&emsp;{val.attributes.desc}</p>
                    </Card.Text>
                    <p className='bold'>คาถาบูชา</p>
                    <Card.Text>
                    {val.attributes.spell}
                    </Card.Text>
                    <p className='bold'>ของไหว้บูชา</p>
                    <Card.Text>
                    {val.attributes.gift}
                    </Card.Text>
                    <p className='bold'>เวลาในการขอพร</p>
                    <Card.Text>
                    {val.attributes.time}
                    </Card.Text>
                    <p className='bold'>การเดินทาง</p>
                    <Card.Text>
                    {val.attributes.travel}
                    </Card.Text>
                </Card.Body>
                            )}
            </div>
            
                
        </div>
        </Container>
        </body>
        <HomepageFooter/>
        </>
      );
    }


export default Topic1Love;