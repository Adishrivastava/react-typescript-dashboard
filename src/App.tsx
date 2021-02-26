import React, { useEffect, useState } from 'react';
import './App.css';
import Main from './components/layout/main-container';
import Sidebar from './components/layout/sidebar';

function App() {

	const [menuShow, setMenuShow] = useState(false)

	const [width, setWidth] = useState(window.innerWidth)

	const handleResize = (e: any) => {
		setWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => {
			window.addEventListener("resize", handleResize);
		}
	}, [])

	return (
		<div className="App">
			<div className="page-container">
				<Sidebar setMenuShow={setMenuShow} menuShow={menuShow} width={width} />
				<Main setMenuShow={setMenuShow} width={width} />
			</div>
		</div>
	);
}

export default App;
