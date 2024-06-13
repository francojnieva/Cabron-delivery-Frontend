import Dashboard from "./pages/Dashboard/Dashboard"
import Login from "./pages/Login/Login"
import SignUp from "./pages/SignUp/SignUp"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<SignUp />}></Route>
				<Route path="/iniciar-sesión" element={<Login />}></Route>
				<Route path="/panel" element={<Dashboard />}></Route>
			</Routes>
		</BrowserRouter>
		
	)
}

export default App
