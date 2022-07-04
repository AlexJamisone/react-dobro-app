import './App.scss';
import { MainContent, Navigation} from './components/index';
import Background from './container/Background/Background';


function App() {
	return (
		<div className="app">
			<Background/>
			<Navigation/>
			<MainContent/>
		</div>
	);
}

export default App;
