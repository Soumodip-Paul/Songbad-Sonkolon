import './App.css';
import { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NewsItem } from './Components/pages/NewsItem';
import { NavbarItem } from './Components/items/NavbarItem';
import { ScrollTop } from './Components/items/ScrollTop';
import { DarkModeContext } from './Components/items/DarkMode';
import { Footer } from './Components/items/Footer';
import { isDefaultDarkMode } from './constants';

const App = () => {
	const [progress, setProgress] = useState(0)
	const [darkMode, setDarkMode] = useState(isDefaultDarkMode)
	return (
		<DarkModeContext.Provider value={{ darkMode: darkMode, setDarkMode: setDarkMode }}>
			<Router>
				<LoadingBar color='#f11946' progress={progress} onLoaderFinished={() => setProgress(0)} />
				<NavbarItem darkMode={darkMode} setDarkMode={setDarkMode} />
				<Switch>
					<Route exact path="/">
						<NewsItem setProgress={setProgress} />
					</Route>
					<Route exact path="/science">
						<NewsItem category={"science"} setProgress={setProgress} />
					</Route>
					<Route exact path="/sports">
						<NewsItem category="sports" setProgress={setProgress} />
					</Route>
					<Route exact path="/technology">
						<NewsItem category="technology" setProgress={setProgress} />
					</Route>
					<Route exact path="/business">
						<NewsItem category="business" setProgress={setProgress} />
					</Route>
					<Route exact path="/entertainment">
						<NewsItem category="entertainment" setProgress={setProgress} />
					</Route>
					<Route exact path="/general">
						<NewsItem category="general" setProgress={setProgress} />
					</Route>
					<Route exact path="/health">
						<NewsItem category="health" setProgress={setProgress} />
					</Route>
					<Route exact path="/privacy-policy">
						<div className={`p-0 m-0 ${darkMode ? "bg-secondary" : "bg-light"}`} style={{minHeight: '82.3vh'}}></div>
					</Route>
					<Route exact path="/terms-and-conditions">
						<div className={`p-0 m-0 ${darkMode ? "bg-secondary" : "bg-light"}`} style={{minHeight: '82.3vh'}}></div>
					</Route>
				</Switch>
				<ScrollTop />
				<Footer/>
			</Router>
		</DarkModeContext.Provider>
	);
}

export default App;
