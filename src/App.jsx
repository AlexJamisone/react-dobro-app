import './App.scss';
import { Content, NavBar} from './components/index'
import bgLeft from './assets/leftBG-1.png'
import bgRight from './assets/rightBG-1.png'
import { motion } from "framer-motion";

function App() {
	return (
		<div className="app">
			<motion.div
				ami
				className="app-bg-left"
				style={{ backgroundImage: `url(${bgLeft})`}}
			> 	
			</motion.div>
			<div 
				className="app-bg-right"
				style={{ backgroundImage: `url(${bgRight})`}}
			></div>
			<NavBar/>
			<Content/>
		</div>
	);
}

export default App;
