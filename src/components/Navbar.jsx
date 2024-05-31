import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <nav>
            <Link to="/">Contador</Link> |
            <Link to="/increment">Incrementar</Link> |
            <Link to="/decrement">Decrementar</Link> |
            <Link to="/reset">Reiniciar</Link>
        </nav>
    </>
  )
}

export default Navbar