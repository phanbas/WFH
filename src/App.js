import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Topic1 from './topic1';
import Topic1Love from './topic1-love';
import Blogs from './blogger';
import Topic1Work from './topic1-work';
import Topic1Money from './topic1-money';
import Topic1Study from './topic1-study';
import Topic1Healthy from './topic1-healthy';
import Topic1Trade from './topic1-trade';


function App() {
  return(
    <Router>
        <Routes>
          <Route path='/' element ={<Blogs/>}></Route>
          <Route path='/topic1' element ={<Topic1/>}></Route>
          <Route path='/topic1/love' element ={<Topic1Love/>}></Route>
          <Route path='/topic1/work' element ={<Topic1Work/>}></Route>
          <Route path='/topic1/money' element ={<Topic1Money/>}></Route>
          <Route path='/topic1/study' element ={<Topic1Study/>}></Route>
          <Route path='/topic1/healthy' element ={<Topic1Healthy/>}></Route>
          <Route path='/topic1/trade' element ={<Topic1Trade/>}></Route>
        </Routes>
    </Router>
  )
}


export default App;
