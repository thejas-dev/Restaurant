import React from 'react';
import {images} from '../../constants';
import {SubHeading} from '../../components';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding" >
  <div className="app__wrapper_img app__wrapper_img-reverse">
  	<img src={images.chef} alt="" />
  </div>	
  <div className="app__wrapper_info">
  	<SubHeading title="Chef's Word" />
  	<h1 className="headtext__cormorant">What We Believe In</h1>

  	<div className="app__chef-content">
  		<div className="app__chef-content_quote">
  			<img src={images.quote} alt="" />
  			<p className="p__opensans">Lorem Ipsum is simply dummy text of the printing</p>
  		</div>
  		<p className="p__opensans">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
  	</div>
  	<div className="app__chef-sign">
  		<p>Kebin Leo</p>
  		<p className="p__opensans">Chef & Founder</p>
  		<img src={images.sign} alt=""/>
  	</div>
  </div>
  </div>
);

export default Chef;
