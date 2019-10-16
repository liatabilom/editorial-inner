import React, { Component } from 'react';
import './SideLettering.css';

class SideLettering extends Component {
	render() {
		return (
			<div className="letteringContainer">
				<div className="letteringGroupContainer">
					<div className="letteringBox">
						<img
							src="https://i.imgur.com/5JgNpiv.png"
							alt="Spring '19"
							className="LetteringBand"
							style={{ width: 60, height: 600, margin: 10 }}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default SideLettering;
