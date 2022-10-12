import { createContext, useContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../firebase/firebase';


// Context del usuario para loguearse con Firebase Auth (login - logout - signup) y para saber si el usuario inició sesión o aún no

const UserContext = createContext()

const useUserContext = () => useContext(UserContext)


const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password)

    const login = (email,password) => signInWithEmailAndPassword(auth, email, password)

    const logout = () => signOut(auth)
    
    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {setUser(currentUser)})
    }, [])
    

    return (
        <UserContext.Provider value={{signup, login, user, logout}}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserContextProvider, useUserContext } 