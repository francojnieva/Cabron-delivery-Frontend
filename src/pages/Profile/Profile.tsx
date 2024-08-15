import ModalLogout from "../../components/ModalLogout/ModalLogout";
import PageTitle from "../../components/PageTitle/PageTitle";
import ModalEditUser from "../../components/ModalEditUser/ModalEditUser";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Profile = () => {

    const { userData } = useContext(UserContext)
    
    return (
        <section className="px-6 pt-4 pb-20 min-h-screen bg-[#F5F5F5] w-full lg:pl-56">
            <PageTitle 
                title='Perfil'
            />
            <ModalLogout />
            <hr className=" my-3" />
            <section className="grid grid-cols-1 gap-3">
                <article className="bg-[#FFF] flex p-4 items-center space-x-3 rounded-lg shadow-md">
                    <div className=" flex flex-col space-y-2">
                        <p>Nombre: {userData.username} </p>
                        <p>Email: {userData.email}</p>
                    </div>
                </article>
                <ModalEditUser />
            </section>
        </section>
    )
}

export default Profile