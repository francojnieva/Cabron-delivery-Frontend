import Sidebard from '../../components/Sidebard/Sidebard'
import MenuMobile from '../../components/MenuMobile/MenuMobile'
import { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

const Board = ({ children }: Props) => {
    return (
        <section className=' flex items-center'>
            <Sidebard />
            <MenuMobile />
            { children} 
        </section>
    )
}

export default Board