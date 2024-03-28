import { useContext } from "react"
import userContext from "../../contexts/Context"

export default function User() {
    const user = useContext(userContext)
    return (
        <div>
            <h1>Dados do Usuário:</h1>
            <p>Nome: {user.nome}</p>
            <p>E-mail: {user.email}</p>
            <p>Telefone: {user.tel}</p>
        </div>
    )
}