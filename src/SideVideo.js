import React, { Component } from 'react';

class SideVideo extends Component {
	videoUrl = () => {
		return (
			<div>
				<iframe
					title="Side Video"
					src="https://fast.wistia.com/embed/medias/sucnf4kgm7"
					allowtransparency="true"
					frameBorder="0"
					scrolling="no"
					className="side-video"
					name="wistia_embed"
					width="340"
					height="600"
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
	render() {
		return <div>{this.videoUrl()}</div>;
	}
}

export default SideVideo;
