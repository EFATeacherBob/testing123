import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Logout from './components/Logout/Logout'


function App() {

  const [sessionToken, setSessionToken] = useState(undefined);

  return (
    <div className="App">
      <nav>
      <NavBar />
      <Logout />
        </nav>
      <p>This is a test of React.</p>
      {sessionToken}
    </div>
  );
}

export default App;

// let [first, second, third] = ['Fellowship of the Ring', 'Two Towers', 'Return of the King']
// console.log(first)
// console.log(second)
// console.log(third)

// let planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];
// let [first,,third,...others] = planets;
// console.log(first)
// console.log(third)
// console.log(others)
