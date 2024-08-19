import { HiOutlineLogout } from "react-icons/hi"
import { useNavigate } from "react-router-dom"
import { UserData } from "../../pages/Profile/Profile"
import { jwtDecode } from "jwt-decode"

const ModalLogout = () => {
    const navigate = useNavigate()
    const showModal = () => {
        const modal = document.getElementById('my_modal_2') as HTMLDialogElement
        if (modal) return modal.showModal()
    }

    const closeModal = () => {
        const modal = document.getElementById('my_modal_2') as HTMLDialogElement
        if (modal) return modal.close()
    }

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/iniciar-sesión')
    }

    return (
        <>
            <button className="flex items-center my-3 space-x-2 py-1 px-2 font-medium text-xs rounded-lg text-white bg-[#f80202] lg:text-sm" onClick = {showModal}>
                <HiOutlineLogout /> 
                <p>Cerrar sesión</p>
            </button>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box space-y-6 font-medium bg-[#232324] text-[#fff]">
                    <p className="">¿Seguro que quieres cerrar sesión?</p>
                    <div className=" flex items-center justify-end text-xs space-x-7">
                        <button onClick = {closeModal}>Cancelar</button>
                        <button onClick={handleLogout} className="p-2 rounded-md bg-[#f80202e8]">Cerrar sesión</button>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
  )
}

export default ModalLogout