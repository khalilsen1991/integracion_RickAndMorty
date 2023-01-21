import { useState } from 'react'
import { Card } from '../Card/Card'
import './Cards.css'
import { toggleModal } from '../../utils/functions'
const image = require('../../images/charactersnotfound.png')

export const Cards = ({ characters, charactersArray, setCharacters }) => {

  const [modal , setModal] = useState({
    status: false,
    character: ''
  })

  if(modal.status) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  if (characters && characters.length > 0) {
    return (
      <div className="cards-container">
        {
          characters.map((character, index) => {
            return <Card 
              character={character} 
              index={index} 
              modal={modal} 
              toggleModal={toggleModal} 
              key={character.id} 
              setModal={setModal} 
              characters={characters}
              charactersArray={charactersArray} 
              setCharacters={setCharacters}
            />
          })
        }
      </div>
    )
  } else {
    return (
      <div className='nocards-container'>
        <img src={image} alt="charactersnotfound" />
        <h1>Characters not found</h1>
      </div>
    )
  } 
  
}