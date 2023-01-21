const GetRandomId = () => {
  fetch(`https://rickandmortyapi.com/api/character/`)
  .then(resp => resp.json())
  .then(data => {
    if(data.error){
      window.alert('No existe ese personaje')
    } else {
      return Math.floor(Math.random() * (data.info.count - 1 + 1) + 1)
    }
  })
}


export const onClose = ({ characterId, charactersArray, setCharacters }) => {
  // eslint-disable-next-line
  const characterIndex = charactersArray.findIndex(character => character.id == characterId)
  if (characterIndex > -1) {
    // eslint-disable-next-line
    setCharacters(charactersArray.filter(character => character.id != characterId))
  }
}

export const onSearch = ({characterId, setCharacters, charactersArray}) => {
  // eslint-disable-next-line
  const find = charactersArray.find(character => character.id == characterId.id)
  if(!find){
    fetch(`https://rickandmortyapi.com/api/character/${characterId.id}`)
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

export const toggleModal = ({ characterId, modal, setModal, characters }) => {
  if(modal.status) {
    setModal({
      status: false,
      character: ''
    })
    return modal
  } else {
    // eslint-disable-next-line
    const characterFind = characters.find(character => character.id == characterId)
    console.log('modal : ', modal)
    setModal({
      status:true,
      character: characterFind
    })
    return modal
  } 
}

export const getRandom = ({ setCharacters, charactersArray}) => {
  // eslint-disable-next-line
  const id = GetRandomId()
  const find = charactersArray.find(character => character.id == id)
  const addCharacter = () => {
    
  }
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