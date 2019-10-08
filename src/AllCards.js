import React, { Component } from 'react';
import EditorialVideo from './EditorialVideo';

class AllCards extends Component {
	render() {
		return (
			<div className="editorial-container" style={{ background: '#F5F4EF' }}>
				<div className="row">
					<div className="card-body col-md-4 border border-dark">nada</div>
					<div className="card-body col-md-4 border border-dark">
						<EditorialVideo />
					</div>
					<div className="card-body col-md-4 border border-dark">nada</div>
				</div>
			</div>
		);
	}
}

export default AllCards;
