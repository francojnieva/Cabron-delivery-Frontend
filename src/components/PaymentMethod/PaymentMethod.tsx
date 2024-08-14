import { VscChromeClose } from "react-icons/vsc"
import { PiBankFill } from "react-icons/pi";
import { IoIosCheckmarkCircle } from "react-icons/io";

const PaymentMethod = () => {

const handleDrawer = () => {
    const drawer = document.getElementById('my-drawer-2') as HTMLInputElement
    if (drawer) drawer.checked = false
}

    return (
        <div className="drawer drawer-end ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="menu p-4 w-full min-h-full bg-[#fff] text-base-content lg:w-96">
                    <div className=" text-2xl flex justify-end">
                        <VscChromeClose onClick={handleDrawer} />
                    </div>
                    <p className="text-base pb-1 font-medium lg:text-lg">Pagos</p>
                    <small>1 método de pago disponible</small>
                    <div className="py-4 space-y-3">
                        <h3>Métodos de pago</h3>
                        <div>
                            <button className="relative border p-5 rounded-lg">
                                <IoIosCheckmarkCircle className="absolute top-1 text-xl right-1 text-[#53e62e]" />
                                <PiBankFill className=" text-3xl mx-auto"/>
                                <small>Transferencia</small>
                            </button>
                        </div>
                        <div className="space-y-2">
                            <p>Por favor realice la transferencia a los siguientes datos:</p>
                            <div className=" font-normal space-y-3">
                                <p>CBU: xxxxxxxx</p>
                                <p>Alias: xxxxxxx</p>
                                <p>Titular de la cuenta: xxxxx</p>
                                <p>Banco: xxxxxx</p>
                            </div>
                           
                        </div>
                        <form className="space-y-2" action="/upload">
                            <label htmlFor="comprobante">Subir comprobante:</label>
                            <input type="file" id="comprobante" name="comprobante" accept="image/*"/>
                            <div className=" pt-4">
                                <input type="submit" className="py-2 px-4 rounded-md bg-[#F8B602] text-[#fff] cursor-pointer" value="Enviar"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentMethod