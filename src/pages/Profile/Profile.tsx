import ModalLogout from "../../components/ModalLogout/ModalLogout";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { clientAxios } from "../../utils/axios";
import { changeTitleBrowser } from "../../utils/changeTitleBrowser";
import ModalEditUser from "../../components/ModalEditUser/ModalEditUser";

export type UserData = {
    name: string;
    username: string;
    email: string;
    id?: string
    password?: string
    rol?: string
}

const Profile = () => {
    const token = localStorage.getItem('token') || ''
    const { id } = jwtDecode<UserData>(token)
    const [user, setUser] = useState<UserData | null>(null)

    const getUser = async () => {
        if (token) {
            try {
                const { data } = await clientAxios.get<UserData>(`/api/usuario?id=${id}`, {
                headers: { auth: token }})
                setUser(data)
            } catch (error) {
                console.log(error)
            }
        }
    }

    useEffect(() => {
        getUser()
        changeTitleBrowser('Mi Perfil')
    }, [])
    
    return (
        <section className="px-6 pt-4 pb-20 min-h-screen bg-[#F5F5F5] w-full lg:pl-56">
            <PageTitle 
                title='Perfil'
            />
            <ModalLogout />
            <hr className=" my-3" />
            <section className="grid grid-cols-1 gap-3">
                <article className="bg-[#FFF] md:w-96 flex p-4 items-center space-x-3 rounded-lg shadow-md">
                    <div className=" flex flex-col space-y-2">
                        <p>Nombre: {user?.username} </p>
                        <p>Email: {user?.email}</p>
                    </div>
                </article>
                <ModalEditUser 
                    updateUser={getUser}
                />
            </section>
        </section>
    )
}

export default Profile