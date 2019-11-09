import React, { Component } from 'react';
import EditorialVideo from './EditorialVideo';
import SideVideo from './SideVideo';
import './EditorialVideo.css';
import SideLettering from './SideLettering';

class AllCards extends Component {
	render() {
		return (
			<div>
				<br />
				<div>
					<headear>
						<SideLettering />
					</headear>
				</div>
				<h2 className="container mt-4 mainCards">
					<div className="row videoRow">
						<div className="card-body p-0 col-md-4 ">
							<SideVideo />
						</div>
						<div className="card-body p-0 col-md-3 ">
							<EditorialVideo />
						</div>
						<div className="card-body p-0 col-md-4 ">
							<SideVideo />
						</div>
					</div>
				</h2>
				<br />
			</div>
		);
	}
}

export default AllCards;
