import { createContext, ReactNode, useEffect, useState } from "react"
import { jwtDecode } from "jwt-decode"
import { clientAxios } from "../utils/axios"

type Prop = { children: ReactNode }

type UserData = {
    username: string;
    email: string;
    id?: string
}

export const UserContext = createContext()

const UserContextProvider = ({ children }: Prop) => {

    const token = localStorage.getItem('token')
    const { id } = jwtDecode(token)
        
    const [userData, setUserData] = useState<UserData>({ username: '', email: '' })

    const getUser = async () => {
        try {
           const { data } = await clientAxios.get(`/api/usuario?id=${id}`, {
            headers: { auth: token }})
            setUserData({ username: data.username, email: data.email })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    const editUser = async (data : UserData) => {
        await clientAxios.put(`/api/editar-usuario?id=${id}`, data)
        setUserData({ username: data.username, email: data.email })
    }

    return (
        <UserContext.Provider value={{
            userData,
            editUser,
            id
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider