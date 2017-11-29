import React from 'react';
import { Image, Video, Transformation, CloudinaryContext } from 'cloudinary-react';
import CloudinaryVideoPlayer from 'cloudinary-video-player';


class VideoContainer extends React.Component {

	constructor (props) {
		super(props);
		this.state ={
			publicId : this.props.publicId // !!!!!!!!!!!!!!!!!!!!!!!!!
		}
	this.onClose = this.onClose.bind(this)
	}

	onClose () {
		console.log('on close called @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  ')
		this.props.turnOff('video')
	}

	render () {
		console.log('props in video.jsx = ',this.props)
		return (
			<div>
				<p onClick={this.onClose}> <a href="#" > close </a> </p>
				<Video cloudName="nicko" publicId={this.props.publicId} width="400" controls />
			</div>
		)
	}
}


export default VideoContainer;

	/*

	*/