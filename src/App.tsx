import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Favorite from './pages/Favorite/Favorite';
import ErrorBoundary from './utils/ErrorBoundary';

function App() {
	return (
		<ErrorBoundary>
			<div className="wrapper">
				<Header />
				<Routes>
					<Route path="/favorite" element={<Favorite />} />
					{/* <Route path="/settings" element={<Settings />} /> */}
				</Routes>
			</div>
		</ErrorBoundary>
	);
}

export default App;
