import { BiSolidTrashAlt } from "react-icons/bi";


const CardItemCart = () => {
    return (
        <article className="relative p-3 mb-3 border rounded-lg">
            <button className=" absolute top-3 right-3 text-red-500 text-lg"><BiSolidTrashAlt /></button>
            <div className="space-y-6">
                <div className=" flex items-center space-x-3">
                    <img className=" w-10 h-10 bg-black rounded-full" src="#" alt="Comida" />
                    <div className=" pr-10 space-y-2">
                        <p>Americana doble queso errwesafdfsfs sdfsfsdf assaf</p>
                        <p className=" font-medium text-xs">$ 34324</p>
                    </div>
                </div>
                <div className=" flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-[#F8B602]">
                        <button className=" px-3 py-1 rounded-md border border-[#f8b602c9]">-</button>
                        <p className="rounded-md font-semibold px-3 py-1">1</p>
                        <button className=" px-3 py-1 rounded-md  border border-[#f8b602c9]">+</button>
                    </div>
                    <p className=" font-semibold text-base">$ 34234</p>
                </div>
            </div>
        </article>
    )
}

export default CardItemCart