
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from'./Nav';

import React, { useState, useEffect } from 'react';
import Home from './Home';
import {Routes,Route}from"react-router-dom";
import Film from './Film';

function App() {
  
  const [list,setList]=useState([ {name:"TheInvitation",imgsr:"https://m.media-amazon.com/images/M/MV5BZGQwZWQ0NzctMTcwMS00NzQ0LTgyOGQtMTg0NDk1OTQyYzYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",rate:"4"},
  {name:"BlackPanther",imgsr:"https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/10/black-panther-wakanda-forever-domestic-box-office-prediction-update-01.jpg",rate:"4.5"},
  {name:"HarryPotter",imgsr:"https://static.tvtropes.org/pmwiki/pub/images/f321f0be_1937_4f71_87c3_d436edfe37af.png",rate:"5"},
])
  
  const [filtredlist,setFiltredlist]=useState(list)
  useEffect(()=>{
      setFiltredlist(list)
  },[list])
 
  return (


 <div className="App">
     <Nav setFiltredlist={setFiltredlist} list={list}/>
     <Routes>
      <Route path="home"element={<Home list={list} filtredlist={filtredlist} setList={setList}  /> }/>
      <Route path="/home/:film" element={<Film film={list}/>}/>
     </Routes>
</div>
    
  );
}

export default App;
