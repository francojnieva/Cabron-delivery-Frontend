import { ReactNode, useEffect  } from "react"
import { useNavigate } from "react-router-dom"

type Prop = { children: ReactNode }

const ProtectedRoute = ({ children }: Prop) : JSX.Element => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    useEffect(() => {
        if (!token) {
            navigate('/iniciar-sesión')
        }
    }, [token, navigate])

    return <>{children}</>

}

export default ProtectedRoute 