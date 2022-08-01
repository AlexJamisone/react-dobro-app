import './App.scss'
import { MainContent, Navigation } from './components/index'
import LinkToApp from './components/LinkToApp/LinkToApp'
import Background from './container/Background/Background'

const App = () => {
	return (
		<div className="app">
			<Background />
			<Navigation />
			<MainContent />
			<LinkToApp />
		</div>
	)
}

export default App
