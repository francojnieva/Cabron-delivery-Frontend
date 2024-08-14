import { Link } from 'react-router-dom'
import Error404 from '../../assets/error404.png'

const NotFound = () => {
	return (
		<section className='h-screen space-y-6 flex flex-col items-center justify-center'>
			<img src={Error404} alt="Página no encontrada" />
			<Link className='py-2 px-4 rounded-md bg-[#F8B602] text-[#fff] cursor-pointer' to='/iniciar-sesión'>Volver</Link>
		</section>
	)
}

export default NotFound