import Cart from "../Cart/Cart"
import InputSearch from "../InputSearch/InputSearch"

type PageTitle = {
    title: string
}

const PageTitle = ({ title }: PageTitle) => {
    return (
        <section className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:justify-between">
            <h1 className=" text-2xl font-medium">{title}</h1>
            <div className="flex items-center justify-between space-x-3">
                <div>
                    <InputSearch />
                </div>
                <div>
                    <Cart />
                </div>
            </div>
        </section>
    )
}

export default PageTitle