import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Favorite from './pages/Favorite/Favorite';
import ErrorBoundary from './utils/ErrorBoundary';
import Search from './components/Search/Search';
import Topics from './components/Topics/Topics';
import Works from './components/Works/Works';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<ErrorBoundary>
			<div className="wrapper">
				<Header />
				<Search />
				<Topics />
				<Works />
				<Footer />
				<Routes>
					<Route path="/favorite" element={<Favorite />} />
					{/* <Route path="/settings" element={<Settings />} /> */}
				</Routes>
			</div>
		</ErrorBoundary>
	);
}

export default App;
