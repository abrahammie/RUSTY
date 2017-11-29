import React from 'react';
import $ from 'jquery';
import { Image, Video, Transformation, CloudinaryContext } from 'cloudinary-react';
import cloudinary from 'cloudinary-core';
import CloudinaryVideoPlayer from 'cloudinary-video-player';
import VideoContainer from './businessSignup/video.jsx'; 

//  set video source to be the uploaded video
//  make video visually closable

//  send video to db object on submit
//  remove video from db object on close
//  refactor video to a stateless comp  

// make an image component in the same fashion
 // quid doing an high order container

// make a gallerry component that holds images components

// make pet owner profile

// connect the object to db

// make the environment var app for any legacy

// improvements

// 	position video , image and gallery better

// check email is valid 

// make business category a select


class BusinessSignup extends React.Component {

	constructor (props) {
		super(props);
		this.state ={
			video : {
				visible : false,
				source : null
			},
			gallery : {
				visible : false,
				source : null
			},
			imageProfile : {
				visible : false,
				source : null
			}
		}
	this.turnOff= this.turnOff.bind(this);
	this.turnOn= this.turnOn.bind(this);

	}

	turnOff (media) {
		this.setState((state) => {  
			state[media].visible=false;
			state[media].source=null
			return state;
		})
	}

	turnOn (media, source) {
		console.log('trunOn called @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')
		this.setState((state)=> {
			state[media].visible=true;
			state[media].source= source;
		})

	}

	render () {

		let onChange= this.props.app.onChange;

		var that = this;

		$( document ).ready(function() {

		    const displayVideo = function  (public_id) {
		    	$(document ).ready(function() { 
		    	   that.setState({ 
		    	   		video : { 
		    	   			source : public_id,
		    	   			visible : true
		    	    	}
		    		})
		    	});
		    }

		    // comp 2
		    $('#upload_widget_multiple').click(function(e) {
		      e.preventDefault();
		      window.cloudinary.openUploadWidget({ cloud_name:'nicko', upload_preset: 'avqjuqpq', folder: 'widgetdocs', form: '.upload_multiple_images_holder', sources: ['local', 'image_search','facebook', 'instagram', 'google_photos'], thumbnails: '.upload_multiple_images_holder', multiple : true, google_api_key: 'AIzaSyDaQj7FO1IQtp9DSB5YNP5jjG6f_mItEQ4', max_files :10, show_powered_by :false, client_allowed_formats: ['jpg', 'jpeg', 'png', 'gif', 'svg'],keep_widget_open : true  }, 
		      function(error, result) { 
		        if ( error) {
		          console.log(error, result) 
		          return;
		        } 
		        console.log('result url = ',result[0].url)
		        console.log('result thumnail = ',result[0].thumbnail_url)
		        console.log('result  = ',result)
		      });
		    });


		    // comp 1
		    $('#upload_widget_singleFromMultiple').click(function(e) {
		      e.preventDefault();
		      window.cloudinary.openUploadWidget({ cloud_name:'nicko', upload_preset: 'avqjuqpq', folder: 'widgetdocs', form: '.upload_multiple_images_holder', sources: ['local', 'image_search','facebook','instagram', 'google_photos'], thumbnails: '.upload_multiple_images_holder', cropping: 'server',multiple : false, google_api_key: 'AIzaSyDaQj7FO1IQtp9DSB5YNP5jjG6f_mItEQ4', max_files :1, show_powered_by :false, client_allowed_formats: ['jpg', 'jpeg', 'png', 'gif', 'svg'],keep_widget_open : false  }, 
		      function(error, result) { 
		        if ( error) {
		          console.log(error, result) 
		          return;
		        } 
		        console.log('result url = ',result[0].url)
		        console.log('result thumnail = ',result[0].thumbnail_url)
		        console.log('result  = ',result)

		      });
		    });

		    // comp 3 video
		    $('#upload_widget_video').click(function(e) {
		      e.preventDefault();
		      window.cloudinary.openUploadWidget({ cloud_name:'nicko', upload_preset: 'zahnf2xg', folder: 'widgetdocs', form: '.upload_multiple_images_holder', sources: ['local'], thumbnails: '.upload_multiple_images_holder', multiple : false, google_api_key: 'AIzaSyDaQj7FO1IQtp9DSB5YNP5jjG6f_mItEQ4', max_files :1, show_powered_by :false, client_allowed_formats: ['mp4'],keep_widget_open : false  }, 
		      function(error, result) { 
		        if ( error) {
		          console.log(error, result) 
		          return;
		        } 
		        //console.log('result .public_id = ',result[0].public_id)
		        //console.log('result thumnail = ',result[0].thumbnail_url)
		        //console.log('result  = ',result)
		        //displayVideo(result[0].public_id)
		        that.turnOn('video',result[0].public_id);
		      });
		    });
		});

		let onSubmit= () => {
			props.app.submitData('businessSignupUserInput');
		}

		return (
			<div>

				<h4 className="test"> Do your Business a favor, fill out that form 2 </h4>

				
				Email : <input type="email" name="signup-business-email" onChange={onChange}></input><br/>
				Name : <input type="text" name="signup-business-name" onChange={onChange}></input><br/>
				<button id="upload_widget_singleFromMultiple" type="button"> upload profile picture </button><br/>
				Password : <input type="password" name="signup-business-password" onChange={onChange}></input><br/>
				Zip code : <input type="text" name="signup-business-zip" onChange={onChange} ></input><br/>
				Phone : <input type="text" name="signup-business-phone" onChange={onChange} ></input><br/>
				Pet : <input type="text" name="signup-business-pet" onChange={onChange}></input><br/>
				Street : <input type="text" name="signup-business-street" onChange={onChange}></input><br/>
				City : <input type="text" name="signup-business-city" onChange={onChange}></input><br/>
				State : <input type="text" name="signup-business-state" onChange={onChange}></input><br/>
				Business category: <input type="text" name="signup-business-businessCategory" onChange={onChange}></input><br/>
				<button id="upload_widget_multiple" type="button"> Create image gallery !</button> <br/>
				<button id="upload_widget_video" type="button"> upload profile video!</button> <br/>

				 <br/>

				 { this.state.video.visible ? <VideoContainer publicId={this.state.video.source} turnOff={this.turnOff} /> : null }

				 <br/>

				<button type="button" onClick={onSubmit}> SUBMIT </button>

				<br/>
				<br/>
				<br/>



			</div>
		)
	}

}

export default BusinessSignup;


/*

	<CloudinaryContext cloudName="nicko" effect="art:aurora" width="300" >
		<Image publicId="widgetdocs/jrlef2na1ilfknmgevig" />
		<Image publicId="widgetdocs/jrlef2na1ilfknmgevig" />
		<Image publicId="widgetdocs/jrlef2na1ilfknmgevig" />
	</CloudinaryContext>


 */
