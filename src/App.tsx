import Board from "./layout/Board/Board"
import Dashboard from "./pages/Dashboard/Dashboard"
import Discount from "./pages/Discount/Discount"
import Login from "./pages/Login/Login"
import NotFound from "./pages/NotFound/NotFound"
import Notifications from "./pages/Notifications/Notifications"
import Profile from "./pages/Profile/Profile"
import SignUp from "./pages/SignUp/SignUp"
import { BrowserRouter,Route, Routes } from "react-router-dom"
import AdminProducts from "./pages/AdminProducts/AdminProducts"
import Cart from "./pages/Cart/Cart"
import { CartContextProvider } from "./context/CartContext"
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute "

function App() {

	return (
		<CartContextProvider>
			<BrowserRouter>
					<Routes>
						<Route path="/" element={<SignUp />}></Route>
						<Route path="/iniciar-sesión" element={<Login />}></Route>

						<Route path="/panel" element={<ProtectedRoute><Board><Dashboard /></Board></ProtectedRoute>} />
						<Route path="/notificaciones" element={<ProtectedRoute><Board><Notifications /></Board></ProtectedRoute>} />
						<Route path="/carrito" element={<ProtectedRoute><Board><Cart /></Board></ProtectedRoute>} />
						<Route path="/ofertas" element={<ProtectedRoute><Board><Discount /></Board></ProtectedRoute>} />
						<Route path="/perfil" element={<ProtectedRoute><Board><Profile /></Board></ProtectedRoute>} />
						{/* Admin */}
						<Route path="/admin-productos" element={<ProtectedRoute><Board><AdminProducts /></Board></ProtectedRoute>} />
						{/*  */}
						<Route path="*" element={<NotFound />} />
					</Routes>
			</BrowserRouter>
		</CartContextProvider>
		
	)
}

export default App
