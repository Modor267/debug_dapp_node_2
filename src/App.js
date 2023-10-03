import { Outlet } from 'react-router-dom';
import './App.css';
import TopBar from './components/TopBar';
import ScrollToTop from './components/ScrollToTop';

function App() {
	return (
		<main className='App'>
			<ScrollToTop />
			<div className='topBar-container'>
				<TopBar />
			</div>
			<Outlet />
			<div className='footer'>Copyright © 2022 All rights Reserved</div>
		</main>
	);
}

export default App;
