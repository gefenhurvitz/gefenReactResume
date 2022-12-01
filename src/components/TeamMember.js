import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook , FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';




const TeamMember = (props) => {
    console.log(props)
    let imgSource = `https://bootstrapious.com/i/snippets/sn-team/teacher-${props.teacher}.jpg`
  return (
      <div className="col-xl-3 col-sm-6 mb-5">
        <div className="bg-white rounded shadow-sm py-5 px-4">
          <img
            src={imgSource} 
            alt=""
            width="100"
            className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
          />
          <h5 className="mb-0">Manuella Nevoresky</h5>
          <span className="small text-uppercase text-muted">CEO - Founder</span>
          <h3>{props.teacher}</h3>
          <ul className="social mb-0 list-inline mt-3">
            <Link to={'facebook.com'} className="list-inline-item">
                <FaFacebook/>
            </Link>
            <Link to={'facebook.com'} className="list-inline-item">
                <FaInstagram/>
            </Link>
            <Link to={'facebook.com'} className="list-inline-item">
                <FaLinkedin/>
            </Link>
          </ul>
        </div>
      </div>
  );
};

export default TeamMember;
