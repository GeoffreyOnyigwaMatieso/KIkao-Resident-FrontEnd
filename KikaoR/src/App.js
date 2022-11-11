import React  from 'react'
// import { Route, Routes } from 'react-router-dom';
import { Switch, Route } from "react-router-dom";
import AllCharacter from './Components/AllCharacterContainer/AllCharacter';
import Home from './Components/Home/Home';
import Card from './Components/Card/Card';
import CharacterContainer from './Components/CharacterContainer/charactercontainer';
import NavBar from './Components/NavBar/NavBar';

function App() {

  return (
    <div className="App">
      {/* <Home /> */}
      {/* <AllCharacter /> */}
      <Card />
      {/* <NavBar />
      <Switch>
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
