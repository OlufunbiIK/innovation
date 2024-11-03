import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Career from "./components/Career";
import ContactUs from "./components/ContactUs";
import LandingPage from "./pages/LadningPage";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/project" element={<Projects />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/career" element={<Career />} />
					<Route path="/contact" element={<ContactUs />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
