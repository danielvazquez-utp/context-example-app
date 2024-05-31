import { useContext } from 'react'
import '../App.css'
import Navbar from '../components/Navbar'
import { counterContext } from '../context/counterContext'

const Reset = () => {
  const { contador, reiniciar } = useContext( counterContext )
  return (
    <>
      <h1>{ contador }</h1>
      <div className="card">
        <button onClick={() => reiniciar()}>
          Reiniciar
        </button>
      </div>
      <p className="read-the-docs">
        <Navbar />
      </p>
    </>
  )
}

export default Reset