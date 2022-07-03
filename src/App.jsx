import './App.scss';
import { MainContent, Navigation, Spinner} from './components/index';
import Background from './container/Background/Background';


function App() {
	return (
		<div className="app">
			<Background/>
			{/* <Spinner/> */}
			<Navigation/>
			<MainContent/>
		</div>
	);
}

export default App;
