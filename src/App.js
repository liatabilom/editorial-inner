import React from 'react';
import EditorialMain from './EditorialMain';
import AllCards from './AllCards';
import './App.css';

function App() {
	return (
		<div>
			<EditorialMain />
			<div style={{ background: '#F5F4EF' }}>
				<AllCards />
			</div>
		</div>
	);
}

export default App;
