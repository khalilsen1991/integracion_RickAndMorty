import { /* useEffect ,*/ useState } from 'react';
import './App.css';
import { Cards } from './components/Cards/Cards';
import { Nav } from './components/Nav/Nav';
import { Route, Routes } from 'react-router-dom';
import { onSearch, onClose } from './utils/functions';
import { About } from './components/About/About';

function App() {
  const [charactersArray, setCharacters] = useState([])
  return (
    <div className='App-header'>
      <div className="navbar">
        <Nav 
          onSearch={onSearch}
          setCharacters={setCharacters}
          charactersArray={charactersArray}
        />
      </div>
      <Routes>
        <Route 
          path="/home" 
          element={
            <Cards 
              characters={charactersArray} 
              onClose={onClose}
              charactersArray={charactersArray} 
              setCharacters={setCharacters}
            />
          }
        />
        <Route
          path='/about'
          element={
            <About

            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
