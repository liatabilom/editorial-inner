import React, { Component } from 'react';

class EditorialVideo extends Component {
	videoUrl = () => {
		return <img src="https://vimeo.com/357913024" alt="Editorial Video" />;
	};
	render() {
		return <div>{this.videoUrl()}</div>;
	}
}

export default EditorialVideo;
