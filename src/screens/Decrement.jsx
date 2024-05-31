import { useContext } from 'react'
import '../App.css'
import Navbar from '../components/Navbar'
import { counterContext } from '../context/counterContext'

const Decrement = () => {
  const { contador, decrementar } = useContext( counterContext )
  return (
    <>
      <h1>{ contador }</h1>
      <div className="card">
        <button onClick={() => decrementar()}>
          Decrementar
        </button>
      </div>
      <p className="read-the-docs">
        <Navbar />
      </p>
    </>
  )
}

export default Decrement