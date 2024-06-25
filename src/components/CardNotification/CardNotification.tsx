
type CardNotification = {
    numberOrder: number,
    menu: string,
    total: number,
}

const CardNotification = ({ numberOrder, menu, total }: CardNotification ) => {
    return (
        <article className="grid items-center grid-cols-3 p-3 rounded-md transition-all hover:bg-[#ffd256]">
            <h4># {numberOrder}</h4>
            <p className=" text-center">{menu}</p>
            <p className=" text-end">{total}</p>
        </article>
    )
}

export default CardNotification