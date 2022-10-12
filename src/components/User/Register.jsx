import { useState } from "react"
import { useUserContext } from "../../context/UserContext"
import { useNavigate } from 'react-router-dom';


function Register() {

    const { signup } = useUserContext()

    const [user, setUser] = useState({
        email: "",
        password: "",
    })
    const navigate = useNavigate()
    const [error, setError] = useState("")

    const handlerInputChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value })
    }

    

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        try {
            await signup(user.email, user.password)
            navigate("/login")
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
            <h1>Registrarse</h1>
            {error && <p>{error}</p>}
            <form className="form-checkout" onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    required
                    onChange={handlerInputChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="******"
                    onChange={handlerInputChange}
                />
                <input
                    type="submit"
                    value="Registrarse"
                    className="btn" />
            </form>
        </>
    )
}

export default Register