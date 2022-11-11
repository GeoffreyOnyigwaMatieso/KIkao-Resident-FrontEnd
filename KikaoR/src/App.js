import React  from 'react'
// import { Route, Routes } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Card from './Components/Card/Card';
import Land from './Components/Land/Land'
import NavBar from './Components/NavBar/NavBar';

function App() {

  return (
    <div className="App">
      
      <NavBar />
      {/* <Routes> */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/data" element={<Card />} />
        <Route exact path="/land" element={<Land />} />
      {/* </Routes> */}
      {/* <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/characterhint">
        <AllCharacter />
      </Route>
      <Route exact path="/allcharacter">
        <CharacterContainer />
      </Route>
      </Switch> */}
    </div>
  );   
}

export default App;
