import { MdEdit } from "react-icons/md";


const Profile = () => {
    return (
        <section className="px-6 pt-4 pb-20 min-h-screen bg-[#F5F5F5] w-full">
            <section>
                <h1 className=" text-2xl font-medium">Perfil</h1>
                <p className=" text-[#434444] text-sm">Fecha actual</p>
            </section>
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
                <article className="p-4">
                    <h5 className=" font-medium">Más ordenadas</h5>
                    <hr className=" my-3" />
                    <div className=" space-y-6 md:space-y-0 md:grid item-center grid-cols-3 gap-8">
                        <div className=" flex items-center space-x-4 text-sm lg:text-base">
                            <img className=" rounded-full w-12 h-12 bg-black lg:w-16 lg:h-16" src="" alt="Platos de comida" />
                            <p>Americana doble</p>
                        </div>
                    </div>
                </article>
            </section>
        </section>
    )
}

export default Profile