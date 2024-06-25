import { FaCartShopping } from "react-icons/fa6";
import { VscChromeClose } from "react-icons/vsc";
import CardItemCart from "../CardItemCart/CardItemCart";


const Cart = () => {
    return (
        <div className="drawer drawer-end">
            <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer-1" className="drawer-button text-[#F8B602] text-xl"><FaCartShopping /></label>
            </div>
            <div className="drawer-side z-30">
                <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="menu p-4 w-full min-h-full bg-[#fff] text-base-content lg:w-96">
                    <div className=" text-2xl flex justify-end">
                        <VscChromeClose onClick={() => document.getElementById('my-drawer-1').checked = false} />
                    </div>
                    <p className="text-base pb-4 font-medium lg:text-lg">Menú ordenado</p>
                    <div className=" h-96 overflow-scroll pb-2">
                        <CardItemCart /> 
                    </div>
                    <div className=" fixed bottom-0 pb-20 font-medium pr-9 w-full bg-white border-t pt-7 space-y-8 lg:pb-10">
                        <div className=" flex items-center justify-between">
                            <p>Total</p>
                            <p>$ 324343</p>
                        </div>
                        <div className=" flex justify-end">
                            <button className=" py-2 px-4 rounded-md bg-[#F8B602] text-[#fff]">Continuar</button>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Cart