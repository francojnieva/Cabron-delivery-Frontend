import Board from "./layout/Board/Board"
import Dashboard from "./pages/Dashboard/Dashboard"
import Discount from "./pages/Discount/Discount"
import Login from "./pages/Login/Login"
import Notifications from "./pages/Notifications/Notifications"
import Profile from "./pages/Profile/Profile"
import SignUp from "./pages/SignUp/SignUp"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<SignUp />}></Route>
				<Route path="/iniciar-sesión" element={<Login />}></Route>
				<Route path="/panel" element={<Board><Dashboard /></Board>} />
				<Route path="/notificaciones" element={<Board><Notifications /></Board>} />
				<Route path="/ofertas" element={<Board><Discount /></Board>} />
				<Route path="/perfil" element={<Board><Profile /></Board>} />
			</Routes>
		</BrowserRouter>
		
	)
}

export default App
