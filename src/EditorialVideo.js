import React, { Component } from 'react';

class EditorialVideo extends Component {
	state = {
		loaded: true,
	};

	videoUrl = () => {
		return (
			<div>
				<iframe
					title="Main Editorial Video"
					src="//fast.wistia.com/embed/medias/tic0bqjt3c"
					frameBorder="0"
					scrolling="no"
					className="main-editorial-video"
					name="wistia_embed"
					width="175"
					height="3350"
					allowFullScreen
					mozallowfullscreen="true"
					webkitallowfullscreen="true"
					oallowfullscreen="true"
					msallowfullscreen="true"
				></iframe>
				<script src="//fast.wistia.net/assets/external/E-v1.js" async></script>
			</div>
		);
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
					<div style={{ height: '450px', width: '275px', margin: '0' }}>{this.videoUrl()}</div>
				</div>
			);
		}
	};

	render() {
		return <div>{this.draggable()}</div>;
	}
}

export default EditorialVideo;
