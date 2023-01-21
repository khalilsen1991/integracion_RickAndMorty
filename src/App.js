import { useState } from 'react';
import './App.css';
import { Cards } from './components/Cards/Cards';
import { Nav } from './components/Nav/Nav';
import { Route, Routes, useLocation } from 'react-router-dom';
import { About } from './components/About/About';
import { Error } from './components/Error/Error';
import { Form } from './components/Form/Form';
import { Signin } from './components/Signin/Signin';

function App() {
  const [charactersArray, setCharacters] = useState([])
  const location = useLocation()

  return (
    <div className='App-header'>
      { !['/','/form','/signin'].includes(location.pathname) &&
        <div className="navbar">
            <Nav
              setCharacters={setCharacters}
              charactersArray={charactersArray}
            />
        </div>
      }
      <Routes>
        <Route 
          path="/home" 
          element={
            <Cards 
              characters={charactersArray} 
              charactersArray={charactersArray} 
              setCharacters={setCharacters}
            />
          }
        />
        <Route
          path='/form'
          element={
            <Form />
          }
        />
        <Route
          path='/about'
          element={
            <About/>
          }
        />
          <Route
          path='/signin'
          element={
            <Signin/>
          }
        />
        <Route
          path='/*'
          element={
            <Error/>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
