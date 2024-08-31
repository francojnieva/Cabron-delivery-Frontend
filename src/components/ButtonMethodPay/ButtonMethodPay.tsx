import { IconType } from "react-icons"

type Prop = {
    name: string
    icon: IconType
    onClick: () => void
}

const ButtonMethodPay = ({ name, icon : Icon, onClick }: Prop) => {
    return (
        <button onClick={onClick} className="border focus:border focus:border-yellow-500 p-3 rounded-lg">
             <Icon className="text-3xl mx-auto" />
            <small>{name}</small>
        </button>
    )
}

export default ButtonMethodPay