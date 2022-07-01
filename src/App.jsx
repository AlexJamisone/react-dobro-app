import './App.scss';
import { Content, NavBar} from './components/index'

//Destop BG
import bgLeft from './assets/leftBG-1.png'
import bgRight from './assets/rightBG-1.png'

//Mobile BG
import mobileLeftBG from './assets/leftBG.png'
import mobileRightBG from './assets/rightBG.png'
import { motion } from "framer-motion";

function App() {
	return (
		<div className="app">
			<div className="app-bg">
				<motion.div
					initial={{ scale: 1.2, opacity: 0}}
					animate={{ scale: 1, opacity: 1}}
					transition={{ duration: 1.5}}
					className="app-bg-left"
					style={{ backgroundImage: `url(${bgLeft})`}}
				> 	
				</motion.div>
				<motion.div
					initial={{ scale: 1.2, opacity: 0}}
					animate={{ scale: 1, opacity: 1}}
					transition={{ duration: 1.5}}
					className="app-bg-left-mobile"
					style={{ backgroundImage: `url(${mobileLeftBG})`}}
				> 	
				</motion.div>
				<motion.div
					initial={{ scale: 1.1, opacity: 0, rotateY: 10}}
					animate={{ scale: 1, opacity: 1, rotateY: 0}}
					transition={{ duration: 2, delay: .5}}
					className="app-bg-right"
					style={{ backgroundImage: `url(${bgRight})`}}
				></motion.div>
				<motion.div
					initial={{ scale: 1.1, opacity: 0, rotateY: 10}}
					animate={{ scale: 1, opacity: 1, rotateY: 0}}
					transition={{ duration: 2, delay: .5}}
					className="app-bg-right-mobile"
					style={{ backgroundImage: `url(${mobileRightBG})`}}
				></motion.div>
			</div>
			<NavBar/>
			<Content/>
		</div>
	);
}

export default App;
