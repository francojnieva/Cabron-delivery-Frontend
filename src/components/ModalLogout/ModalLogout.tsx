import { HiOutlineLogout } from "react-icons/hi"
import { Link } from "react-router-dom"

const ModalLogout = () => {
    return (
        <>
            <button className="flex items-center space-x-1 py-2 px-3 font-medium text-xs rounded-lg hover:bg-[#f80202] hover:text-[#FFF] transition-all lg:text-sm" onClick = {()=> document.getElementById('my_modal_2').showModal()}>
                <HiOutlineLogout /> 
                <p>Cerrar sesión</p>
            </button>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box space-y-6 font-medium bg-[#232324] text-[#fff]">
                    <p className="">¿Seguro que quieres cerrar sesión?</p>
                    <div className=" flex items-center justify-end text-xs space-x-7">
                        <button onClick = {()=> document.getElementById('my_modal_2').close()}>Cancelar</button>
                        <Link className="p-2 rounded-md bg-[#f80202e8]" to={'/iniciar-sesión'}>Cerrar sesión</Link>
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