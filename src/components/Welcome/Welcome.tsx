import { useEffect } from "react";
import Logo from "../../assets/banner-delivery.png";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
    const navigate = useNavigate()

    useEffect(() => {
    setTimeout(() => {
        navigate('/iniciar-sesión')
    }, 2000)
    }, [])


    return (
        <section className="bg-[#FECE2F] flex h-screen items-center justify-center">
            <img src={Logo} className="w-48 animate-bounce" alt="Logo" />
        </section>
    )
}

export default Welcome