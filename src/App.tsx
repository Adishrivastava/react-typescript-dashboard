import React from 'react';
import './App.css';
import Main from './components/layout/main';
import Navbar from './components/layout/navbar';

function App() {
	return (
		<div className="App">
			<div className="page-container">
				<Navbar />
				<Main />
			</div>
		</div>
	);
}

export default App;
