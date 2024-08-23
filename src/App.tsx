import Board from "./layout/Board/Board"
import Dashboard from "./pages/Dashboard/Dashboard"
import Discount from "./pages/Discount/Discount"
import Login from "./pages/Login/Login"
import NotFound from "./pages/NotFound/NotFound"
import Notifications from "./pages/Notifications/Notifications"
import Profile from "./pages/Profile/Profile"
import SignUp from "./pages/SignUp/SignUp"
import { BrowserRouter,Route, Routes } from "react-router-dom"
import Cart from "./pages/Cart/Cart"
import { CartContextProvider } from "./context/CartContext"
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute "
import Payment from "./pages/Payment/Payment"
import Admin from "./pages/Admin/Admin"
import AllUsers from "./components/AllUsers/AllUsers"
import AllProducts from "./components/AllProducts/AllProducts"
import AddProduct from "./components/AddProducto/AddProduct"

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
						<Route path="/pagar" element={<ProtectedRoute><Board><Payment /></Board></ProtectedRoute>} />
						{/* Admin */}
						<Route path="/admin-usuarios" element={<ProtectedRoute requiredRole="admin"><Board><Admin title='Usuarios'><AllUsers /></Admin></Board></ProtectedRoute>} />
						<Route path="/admin-productos" element={<ProtectedRoute requiredRole="admin"><Board><Admin title='Productos'><AllProducts /></Admin></Board></ProtectedRoute>} />
						<Route path="/admin-agregar-productos" element={<ProtectedRoute requiredRole="admin"><Board><Admin title='Agregar producto'><AddProduct /></Admin></Board></ProtectedRoute>} />
						{/*  */}
						<Route path="*" element={<NotFound />} />
					</Routes>
			</BrowserRouter>
		</CartContextProvider>
		
	)
}

export default App
