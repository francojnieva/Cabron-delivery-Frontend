import { IoSearch } from "react-icons/io5";

const InputSearch = () => {
    return (
        <label className="input bg-[#fcfcfc] flex items-center gap-2">
            <IoSearch className=" text-[#F8B602]" />
            <input type="text" className="grow" placeholder="¿Qué quieres comer hoy?" />
        </label>
    )
}

export default InputSearch