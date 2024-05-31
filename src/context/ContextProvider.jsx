import { useState } from "react"
import { counterContext } from "./counterContext"

const ContextProvider = ({ children }) => {
    const [contador, setContador] = useState(100)

    const incrementar = () => {
        setContador( contador + 1 )
    }

    const decrementar = () => {
        setContador( contador - 1 )
    }

    const reiniciar = () => {
        setContador( 100 )
    }

    return (
        <counterContext.Provider
            value={{
                contador,
                incrementar,
                decrementar,
                reiniciar,
            }}
        >
            {children}
        </counterContext.Provider>
    )
}

export default ContextProvider