import './Modal.css'
const back = require("../../images/cropped-600-600-642540.png")

export const Modal = ({ character, toggleModal, modal, setModal, characters }) => {
  return (
    <div className='modal' onClick={() => toggleModal({ characterId: character.id, modal, setModal, characters })}>
      <div className='modal-background'>
        <div className='overlay' onClick={() => toggleModal({ characterId: character.id, modal, setModal, characters })}>
          <img src={back} alt='back' className='overlay-image'/>
        </div>
        <div className='modal-content'>
          <p className="name">Name: {modal.character.name}</p>
          <p className="origin">Origin: {modal.character.origin.name}</p>
          <img src={modal.character.image} className='img-modal' alt={modal.character.name}/>
          <p className="gender">Gender: {modal.character.gender}</p>
          <br />
          <p className="species">Specie: {modal.character.species}</p>
          <br />
          <p className="status">Status: {modal.character.status}</p>
          <p className="location">Location: {modal.character.location.name}</p>
          <p className="episodes">Episodes appeared in: {modal.character.episode.length}</p>
        </div>
      </div>
    </div> 
  )
}