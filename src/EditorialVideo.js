import React, { Component } from 'react';

class EditorialVideo extends Component {
	videoUrl = () => {
		return (
			<div>
				<iframe
					title="Main Editorial Video"
					src="https://fast.wistia.com/embed/medias/nkb9qy45ba"
					allowtransparency="true"
					frameBorder="0"
					scrolling="no"
					className="main-editorial-video"
					name="wistia_embed"
					width="190"
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

export default EditorialVideo;
