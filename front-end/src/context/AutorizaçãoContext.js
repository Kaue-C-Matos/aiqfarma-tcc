import { createContext, useContext, useState } from "react"

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

function AutorizacaoProvider({children}) {
    const [estaAutorizado, setEstaAutorizado] = useState(false)

    return(
        <AuthContext.Provider value={{estaAutorizado, setEstaAutorizado}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AutorizacaoProvider