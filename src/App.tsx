import React from 'react';
import './App.css';
import Main from './components/layout/main-container';
import Sidebar from './components/layout/sidebar';

function App() {
	return (
		<div className="App">
			<div className="page-container">
				<Sidebar />
				<Main />
			</div>
		</div>
	);
}

export default App;
