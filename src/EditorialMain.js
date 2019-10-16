import React, { Component } from 'react';
import './EditorialMain.css';

class EditorialMain extends Component {
	render() {
		return (
			<div style={{ background: '#FFFFFF' }}>
				<div className="header" style={{ padding: 10 }}>
					<header>
						<a href="https://www.correiagoncalves.com" style={{ textDecoration: 'none', color: 'black' }}>
							Na'dia
							<br />
							Correia Gonc,alves
						</a>
					</header>
				</div>
				<div className="container">
					<div className="row">
						<img src="https://i.imgur.com/TRN8ytK.jpg" alt="Spring Model" className="photoPack" />
					</div>
				</div>
			</div>
		);
	}
}

export default EditorialMain;
