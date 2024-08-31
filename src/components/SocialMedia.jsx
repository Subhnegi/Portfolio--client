import React from 'react';
import { BsGithub, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
    <a href='https://github.com/Subhnegi' target='_blank'><BsGithub /></a>
    </div>
    <div>
    <a href='https://www.facebook.com/subh.negi.3/' target='_blank'><FaFacebookF /></a>
    </div>
    <div>
    <a href='https://www.instagram.com/subh_negi/' target='_blank'><BsInstagram /></a>
    </div>
  </div>
);

export default SocialMedia;
