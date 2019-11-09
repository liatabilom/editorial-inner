import React, { Component } from 'react';
import Draggable from 'react-draggable';

class EditorialVideo extends Component {
	state = {
		loaded: true,
	};

	draggable = () => {
		if (this.state.loaded === true) {
			return (
				<div
					className="draggableContainer"
					style={{
						height: '600px',
						width: '275px',
						overflow: 'scroll',
					}}
				>
					<div style={{ height: '450px', width: '275px', margin: '0' }}>
						<Draggable
							axis="y"
							bounds={(0, 10, 0, 10)}
							handle=".handle"
							grid={(25, 25)}
							allowAnyClick={true}
							disabled={true}
						>
							<img
								src="https://i.imgur.com/19rIDZn.jpg"
								alt="Carousel"
								className="carouselAuto"
								style={{ height: 5000, width: 250 }}
							/>
						</Draggable>
					</div>
				</div>
			);
		}
	};

	render() {
		return <div>{this.draggable()}</div>;
	}
}

export default EditorialVideo;
