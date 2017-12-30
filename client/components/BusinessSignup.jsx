import React from "react";
import $ from "jquery";
import TextField from "material-ui/TextField";
import { Image, Video, Transformation, CloudinaryContext } from "cloudinary-react";
import cloudinary from "cloudinary-core";
import RaisedButton from 'material-ui/RaisedButton';
import CloudinaryVideoPlayer from "cloudinary-video-player";
import VideoContainer from "./businessSignup/video.jsx";
import ImageProfileContainer from "./businessSignup/imageProfile.jsx";

class BusinessSignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: {
				visible: false,
				source: null
			},
			gallery: {
				visible: false,
				source: null
			},
			imageProfile: {
				visible: false,
				source: null
			}
		};
		this.turnOff = this.turnOff.bind(this);
		this.turnOn = this.turnOn.bind(this);
		this.uploadVideo = this.uploadVideo.bind(this);
		this.uploadImageProfile = this.uploadImageProfile.bind(this);
		this.category = "business";
	}

	turnOff(media) {
		this.setState(state => {
			state[media].visible = false;
			state[media].source = null;
			return state;
		});
		this.props.app.setState(state => {
			var appStateKey = "signup-" + this.category + "-" + media;
			state[appStateKey] = null;
			return state;
		});
	}

	turnOn(media, source, url) {
		this.setState(state => {
			state[media].visible = true;
			state[media].source = source;
			state[media].url = url;
			return state;
		});
		var localState = this.state;
		this.props.app.setState(state => {
			var appStateKey = "signup-" + this.category + "-" + media;
			state[appStateKey] = localState[media];
			return state;
		});
	}

	uploadVideo() {
		var that = this;
		window.cloudinary.openUploadWidget(
			{
				cloud_name: "nicko",
				upload_preset: "zahnf2xg",
				folder: "widgetdocs",
				form: ".upload_multiple_images_holder",
				sources: ["local"],
				thumbnails: ".upload_multiple_images_holder",
				multiple: false,
				google_api_key: "AIzaSyDaQj7FO1IQtp9DSB5YNP5jjG6f_mItEQ4",
				max_files: 1,
				show_powered_by: false,
				client_allowed_formats: ["mp4"],
				keep_widget_open: false
			},
			function(error, result) {
				if (error) {
					console.log(error, result);
					return;
				}
				that.turnOn("video", result[0].public_id, result[0].url);
			}
		);
	}

	uploadImageProfile() {
		var that = this;
		window.cloudinary.openUploadWidget(
			{
				cloud_name: "nicko",
				upload_preset: "avqjuqpq",
				folder: "widgetdocs",
				form: ".upload_multiple_images_holder",
				sources: [
					"local",
					"image_search",
					"facebook",
					"instagram",
					"google_photos"
				],
				thumbnails: ".upload_multiple_images_holder",
				cropping: "server",
				multiple: false,
				google_api_key: "AIzaSyDaQj7FO1IQtp9DSB5YNP5jjG6f_mItEQ4",
				max_files: 1,
				show_powered_by: false,
				client_allowed_formats: ["jpg", "jpeg", "png", "gif", "svg"],
				keep_widget_open: false
			},
			function(error, result) {
				if (error) {
					console.log(error, result);
					return;
				}
				console.log("result  = ", result);
				that.turnOn("imageProfile", result[0].public_id, result[0].url);
			}
		);
	}

	render() {
    const style = {
      button: {
        fontFamily: 'Roboto, sans-serif',
        backgroundColor: '#7CB342',
        color: 'white',
      }
    };

		let onChange = this.props.app.onChange;
		var that = this;
		$(document).ready(function() {
			// comp 2
			$("#upload_widget_multiple").click(function(e) {
				e.preventDefault();
				window.cloudinary.openUploadWidget(
					{
						cloud_name: "nicko",
						upload_preset: "avqjuqpq",
						folder: "widgetdocs",
						form: ".upload_multiple_images_holder",
						sources: [
							"local",
							"image_search",
							"facebook",
							"instagram",
							"google_photos"
						],
						thumbnails: ".upload_multiple_images_holder",
						multiple: true,
						google_api_key: "AIzaSyDaQj7FO1IQtp9DSB5YNP5jjG6f_mItEQ4",
						max_files: 10,
						show_powered_by: false,
						client_allowed_formats: ["jpg", "jpeg", "png", "gif", "svg"],
						keep_widget_open: true
					},
					function(error, result) {
						if (error) {
							console.log(error, result);
							return;
						}
					}
				);
			});
		});

		let onSubmit = () => {
			this.props.app.submitData("businessSignupUserInput");
		};

		return (
			<div>
				<TextField id="email" onChange={onChange} hintText="Email" />
				<br />
				<TextField id="businessName" onChange={onChange} hintText="Business Name" />
				<br />
				<TextField id="password" onChange={onChange} hintText="Password" />
				<br />
				<TextField id="zipCode" onChange={onChange} hintText="Zip Code" />
				<br />
				<TextField id="phone" onChange={onChange} hintText="Phone" />
				<br/>
				<TextField id="street" onChange={onChange} hintText="Street Address" />
				<br/>
				<TextField id="businessCategory" onChange={onChange} hintText="Business Category" />
				<br/>
		    <RaisedButton
					id="upload_widget_singleFromMultiple"
		      label="Choose an Image"
		      labelPosition="before"
		      containerElement="label"
		      style={{ margin: 12 }}
					onClick={this.uploadImageProfile}
		    />
				<br />
				{this.state.imageProfile.visible ? (
					<div>
						<br />
						<br />
						<ImageProfileContainer
							publicId={this.state.imageProfile.source}
							turnOff={this.turnOff}
						/>
						<br />
						<br />
					</div>
				) : null}
		    <RaisedButton
					id="upload_widget_video"
		      label="Upload A Video"
		      labelPosition="before"
		      containerElement="label"
		      style={{ margin: 12 }}
					onClick={this.uploadVideo}
		    />
				<br />
				{this.state.video.visible ? (
					<VideoContainer
						publicId={this.state.video.source}
						turnOff={this.turnOff}
					/>
				) : null}
		    <RaisedButton
		      containerElement="label"
		      style={{ margin: 12 }}
		      buttonStyle={style.button}
					onClick={onSubmit}
		    >SUBMIT</RaisedButton>

			</div>
		);
	}
}

export default BusinessSignup;
