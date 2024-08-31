import { jwtDecode } from "jwt-decode"
import { ReactNode, useEffect  } from "react"
import { useNavigate } from "react-router-dom"

type Prop = { children: ReactNode, requiredRole?: string }

const ProtectedRoute = ({ children, requiredRole  }: Prop) : JSX.Element => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    useEffect(() => {
        if (!token) {
            navigate('/iniciar-sesión')
            return
        }
        try {
            const { rol } = jwtDecode<{ rol: string }>(token)
            if (requiredRole && rol !== requiredRole) {
                navigate('/panel')
                return
            }
        } catch (error) {
            console.error("Token no válido:", error)
            navigate('/iniciar-sesión')
        }
    }, [token, navigate])

    return <>{children}</>

}

export default ProtectedRoute 