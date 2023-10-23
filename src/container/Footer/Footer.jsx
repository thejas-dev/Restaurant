import {images} from '../../constants'
import React from 'react';
import {FooterOverlay,Newsletter} from '../../components'
import {FiFacebook,FiTwitter,FiInstagram} from 'react-icons/fi'
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" >
  	<FooterOverlay />
  	<Newsletter />

  	<div className="app__footer-links">
  		<div className="app__footer-links_contact">
  			<h1 className="app__footer-headtext">Contact Us</h1>
  			<p className="p__opensans">123 Main Street, Dubai, UAE.</p>
  			<p className="p__opensans">+1 132-312-3113</p>
  			<p className="p__opensans">+1 183-767-8675</p>
  		</div>
  		<div className="app__footer-links_logo">
  			<img src={images.gericht} alt="footer" />
  			<p className="p__opensans">The Best way to find yourself is to lose yourself in the service of others</p>
  			<img src={images.spoon} alt="spoon" className="spoon__img" style={{margiinTop:'15px'}}/>
  			<div className="app__footer-links_icons">
  				<FiFacebook />
  				<FiTwitter />
  				<FiInstagram />
  			</div>
  		</div>
  		<div className="app__footer-links_work">
			<h1 className="app__footer-headtext">Working Hours</h1>
  			<p className="p__opensans">Monday - Friday</p>
  			<p className="p__opensans">08:00 am - 12:00 am</p>
  			<p className="p__opensans">Saturday - Sunday</p>
  			<p className="p__opensans">07:00 am -11:00 am</p>  			
  		</div>
  	</div>
  	<div className="footer__copyright">
  		<p className="p__opensans">2021 Royal restaurant. All Rights reserved</p>
  	</div>
  </div>
);

export default Footer;
