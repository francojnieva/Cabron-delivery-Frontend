import { MdEdit } from "react-icons/md";
import ModalLogout from "../../components/ModalLogout/ModalLogout";
import PageTitle from "../../components/PageTitle/PageTitle";

const Profile = () => {
    return (
        <section className="px-6 pt-4 pb-20 min-h-screen bg-[#F5F5F5] w-full lg:pl-56">
            <PageTitle 
                title='Perfil'
            />
            <ModalLogout />
            <hr className=" my-3" />
            <section className="grid grid-cols-1 gap-3">
                <article className="bg-[#FFF] flex items-center space-x-4 p-4 rounded-lg shadow-md">
                    <img src="" className="rounded-full w-14 h-14 bg-black lg:w-20 lg:h-20" alt="Foto de perfil" />
                    <div className=" flex items-center font-medium space-x-2">
                        <p>francojnieva</p>
                        <button>
                            <MdEdit className="text-[#434444]" />
                        </button>
                    </div>
                </article>
            </section>
        </section>
    )
}

export default Profile