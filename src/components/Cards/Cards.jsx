import { useState } from 'react'
import { Card } from '../Card/Card'
import './Cards.css'
const image = require('../../images/charactersnotfound.png')

export const Cards = ({ characters, onClose }) => {

  const [modal , setModal] = useState({
    status: false,
    character: ''
  })

  const toggleModal = (characterId) => {
    if(modal.status) {
      setModal({
        status: false,
        character: ''
      })
      return modal
    } else {
      // eslint-disable-next-line
      const characterFind = characters.find(character => character.id == characterId)
      setModal({
        status:true,
        character: characterFind
      })
      return modal
    } 
  }

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
            return <Card character={character} index={index} modal={modal} toggleModal={toggleModal} key={character.id} onClose={onClose}/>
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