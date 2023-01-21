import { Link } from "react-router-dom"
import './Form.css'

export const Form = () => {
  return (
    <div>
      <Link to={'/signin'}>
        <button>Signin</button>
      </Link>
    </div>
  )
}