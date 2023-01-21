import { Modal } from '../Modal/Modal'
import './Card.css'

export const Card = ({ character, onClose, modal, toggleModal, setModal, characters, charactersArray, setCharacters }) => {
  return (
    <div className="character" key={character.id}>
      <div className="character-card">
        <button className='close-button' onClick={() => onClose({ characterId: character.id, charactersArray, setCharacters })}>X</button>
        <p className="text">Name : {character.name}</p>
        <img className="img" src={character.image} alt={character.name} onClick={() => toggleModal({ characterId: character.id, modal, setModal, characters })}/>
        <p className="text">Specie : {character.species}</p>
      </div>
      {modal.status && (
        <Modal character={character} toggleModal={toggleModal} modal={modal} setModal={setModal} characters={characters}/>
      )}
    </div>
  )
}
