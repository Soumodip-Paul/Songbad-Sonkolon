import { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NewsItem } from './Components/pages/NewsItem';
import { NavbarItem } from './Components/items/NavbarItem';

const App = () => {
	const [progress, setProgress] = useState(0)
	return (
		<Router>
			<LoadingBar color='#f11946' progress={progress} onLoaderFinished={() => setProgress(0)} />
			<NavbarItem />
			{/* <NewsItem setProgress={setProgress} /> */}
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
			</Switch>
		</Router>
	);
}

export default App;
