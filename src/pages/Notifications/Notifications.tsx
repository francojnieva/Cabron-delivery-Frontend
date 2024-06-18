
const Notifications = () => {
    return (
        <section className=" px-6 pt-4 pb-20 min-h-screen bg-[#F5F5F5] w-full">
            <section>
                <h1 className=" text-2xl font-medium">Notificaciones</h1>
                <p className=" text-[#434444] text-sm">Fecha actual</p>
            </section>
            <hr className=" my-3" />
            <section className=" space-y-3 bg-[#FFF] rounded-lg p-3">
                <div>
                    <h3 className="text-lg font-medium lg:text-xl">Tus ordenes</h3>
                </div>
                <div className="space-y-3 text-sm lg:text-base">
                    <div className=" font-medium grid items-center grid-cols-3">
                        <h4 className="">N° Orden</h4>
                        <h4 className=" text-center">Menú</h4>
                        <h4 className=" text-end">Total</h4>
                    </div>
                    <article className="grid items-center grid-cols-3">
                        <h4>2343432</h4>
                        <p className=" text-center">dsfdfdfdffd</p>
                        <p className=" text-end">3432434</p>
                    </article>
                </div>
            </section>
        </section>
    )
}

export default Notifications