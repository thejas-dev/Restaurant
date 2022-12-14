import React from 'react';
import {images} from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about" >
 	<div className="app__absoutus- flex__center app__aboutus-overlay" >
 		<img src={images.G} alt="" />
 	</div>   
 	<div className="app__aboutus-content flex__center">
 		<div className="app__aboutus-content_about">
 			<h1 className="headtext__cormorant">About Us</h1>
 			<img src={images.spoon} alt="" className="spoon__img" />
 			<p className="p__opensans">
 				Since 1990 , 80 branches all around the world. Our restaurant recieved fast food delivery award of 2012.
 			</p>
 			<button className="custom__button" type="button">Know More</button>
 		</div>


 		<div className="app__aboutus-content_knife flex__center">
 			<img src={images.knife} alt="" />
 		</div>
 		<div className="app__aboutus-content_history">
 			<h1 className="headtext__cormorant">Our History</h1>
 			<img src={images.spoon} alt="" className="spoon__img" />
 			<p className="p__opensans">
 				Since 1990 , 80 branches all around the world. Our restaurant recieved fast food delivery award of 2012.
 			</p>
 			<button className="custom__button" type="button">Know More</button>
 		</div>
 	</div>
  </div>
);

export default AboutUs;
