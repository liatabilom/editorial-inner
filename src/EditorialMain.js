import React, { Component } from 'react';
import './EditorialMain.css';

class EditorialMain extends Component {
	render() {
		return (
			<div style={{ background: '#FFFFFF' }}>
				<div className="header" style={{ padding: 20 }}>
					<header>
						Na'dia
						<br />
						Correia Gonc,alves
					</header>
				</div>
				<div className="row">
					<div className="card-body col-12">
						<img src="https://i.imgur.com/TRN8ytK.jpg" alt="Spring Model" className="photoPack" />
					</div>
				</div>
				<br />
			</div>
		);
	}
}

export default EditorialMain;
