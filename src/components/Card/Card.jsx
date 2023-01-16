export const Card = (props) => {

  const onClose = (event) => {
    console.log(event.target)
  }

  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.species}</p>
      <p>{props.gender}</p>
      <p>{props.image}</p>
      <button onClick={onClose}>X</button>
    </div>
  )
}