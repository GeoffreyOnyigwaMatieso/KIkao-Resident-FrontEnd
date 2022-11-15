import React  from 'react'
import { Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home/Home';
import Card from './Components/Card/Card';
import Land from './Components/Land/Land'
import NavBar from './Components/NavBar/NavBar';
import AddCharacterForm from './Components/AddCharacterForm/AddCharacterForm';

function App() {

  return (
    <div className="App">
    <NavBar>
      <Link to='/'>Home</Link>
      <Link to='/card'>Card</Link>
      <Link to='/land'>Land</Link>
    </NavBar>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='card' element={<Card />} />
      <Route path='land' element={<AddCharacterForm />} />
     </Routes>
    </div>
  );   
}

export default App;
