import { Modal } from '../Modal/Modal'
import './Card.css'

export const Card = ({ character, onClose, modal, toggleModal }) => {
  return (
    <div className="character" key={character.id}>
      <div className="character-card">
        <button className='close-button' onClick={() => onClose(character.id)}>X</button>
        <p className="text">Name : {character.name}</p>
        <img className="img" src={character.image} alt={character.name} onClick={() => toggleModal(character.id)}/>
        <p className="text">Specie : {character.species}</p>
      </div>
      {modal.status && (
        <Modal character={character} toggleModal={toggleModal} modal={modal}/>
      )}
    </div>
  )
}


/* import { Link } from 'react-router-dom'
import './Card.css'

export const Card = ({ character }) => {
  console.log(character)
  return (
    <>
      <div className="character">
        <Link to={`/character/${character.id}`} >
          <p className="text">Name : {character.name}</p>
          <img className="img" src={character.image} alt={character.name} />
          <p className="text">Gender : {character.gender}</p>
          <p className="text">Specie : {character.species}</p>
        </Link>
      </div> 
    </>
  )
} */
