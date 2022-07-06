import React from "react";
import "./footer.scss";

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import EmailIcon from '@mui/icons-material/Email';

const Footer=()=>{
    return (
       <div className="Footer">
          <div className="socialMediaSection">
              <FacebookIcon className="icons"/>
              <InstagramIcon className="icons"/>
              <EmailIcon className="icons" />
              <WhatsAppIcon className="icons"/>
              <TwitterIcon className="icons"/>
              <YouTubeIcon className="icons"/>
              <PinterestIcon className="icons"/>
          </div>
          <div className="otherKeys">
              <div className="key">About Us</div>
              <div className="key">Careers</div>
              <div className="key">Accessability</div>
              <div className="key">Feedback</div>
              <div className="key">Advertise</div>
              <div className="key">Agent Support</div>
              <div className="key">Tech Blog</div>
              <div className="key">Privacy Policy</div>
              <div className="key">Complain</div>
          </div>

          <div className="copyRight">
              @Copyright 2010-2022<br/>
              All Rights Reserved. 
          </div>
       </div>
    );
}

export default Footer;