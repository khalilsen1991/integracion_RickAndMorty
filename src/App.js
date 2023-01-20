import { /* useEffect ,*/ useState } from 'react';
import './App.css';
import { Cards } from './components/Cards/Cards';
/* import characters from "./data"
 */import { Nav } from './components/Nav/Nav';

function App() {
  const [charactersArray, setCharacters] = useState([])

/*   useEffect(() => {
  }, []) */

  const onClose = (characterId) => {
    // eslint-disable-next-line
    const characterIndex = charactersArray.findIndex(character => character.id == characterId)
    if (characterIndex > -1) {
      // eslint-disable-next-line
      setCharacters(charactersArray.filter(character => character.id != characterId))
    }
  }

  const onSearch = ({ id }) => {
    // eslint-disable-next-line
    const find = charactersArray.find(character => character.id == id)
    if(!find){
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(resp => resp.json())
      .then(data => {
        if(data.error){
          window.alert('No existe ese personaje')
        } else {
          setCharacters(allCharacters => [ ...allCharacters, data])
        }
      })
    } else {
      window.alert('Ya seleccionaste a este personaje')
    }
  }
  return (
    <div className='App-header'>
      <div className="navbar">
        <Nav onSearch={onSearch}/>
      </div>
      <Cards characters={charactersArray} onClose={onClose}/>
    </div>
  );
}

export default App;
