import CardNotification from "../../components/CardNotification/CardNotification"

const Notifications = () => {
    return (
        <section className=" px-6 pt-4 pb-20 min-h-screen bg-[#F5F5F5] w-full lg:pl-56">
            <h1 className=" text-2xl font-medium">Notificaciones</h1>
            <hr className=" my-3" />
            <section className=" space-y-3 bg-[#FFF] rounded-lg p-3">
                <div>
                    <h3 className="text-lg font-medium lg:text-xl">Tus ordenes</h3>
                </div>
                <div className="space-y-3 text-sm lg:text-base">
                    <div className=" font-medium grid items-center p-3 grid-cols-3">
                        <h4 className="">N° Orden</h4>
                        <h4 className=" text-center">Menú</h4>
                        <h4 className=" text-end">Total</h4>
                    </div>
                    <CardNotification 
                        numberOrder= {123123}
                        menu = 'Americana'
                        total = {4234343}
                    />
                </div>
            </section>
        </section>
    )
}

export default Notifications