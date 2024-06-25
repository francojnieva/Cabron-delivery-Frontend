import { IoMdAdd } from "react-icons/io";
import { FaHeart } from "react-icons/fa";

type CardFood = {
    name:string,
    price:string,
    discount:number,
}

const CardFood = () => {

    return (
        <div className="card  w-36 bg-[#fff] shadow-xl md:w-40 lg:w-44 xl:w-52">
            <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <FaHeart className="absolute top-2 right-3 text-[#a3a0a0e8]" />
            <div className="card-body p-3">
                <p className="badge bg-[#f81f02c2] p-3 text-[#fff] font-medium">20% Off</p>
                <div className="card-actions items-center justify-between">
                    <div>
                        <p className="font-medium text-sm">Americana</p>
                        <p className="font-bold"> <span className="text-[#F8B602]">$</span>2000</p>
                    </div>
                    <div>
                        <button className="p-2 rounded-lg bg-[#F8B602]"><IoMdAdd className="text-[#fff]" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardFood