import { ReactNode } from "react"
import ModalLogout from "../../components/ModalLogout/ModalLogout"

type Prop = {
	children: ReactNode
	title: string
}

const Admin = ({children, title} : Prop) => {

	return (
		<section className=" px-6 pt-4 pb-20 min-h-screen bg-[#F5F5F5] w-full lg:pl-56">
			<div className="flex items-center mb-3 justify-between">
				<h1 className="text-2xl font-medium">{title}</h1>
				<ModalLogout />
			</div>
			{children}

		</section>
	)
}

export default Admin