import { BrowserRouter, Routes, Route } from "react-router-dom";
import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";

function App() {
	return (
		<div className='app'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Join />} />
					<Route path='/chat' element={<Chat />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
