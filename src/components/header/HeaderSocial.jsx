import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

function HeaderSocial() {
  return (
    <div className="header__social">
      <a href="http://linkedin.com/">
        <BsLinkedin />
      </a>
      <a href="http://gitbub.com/">
        <FaGithub />
      </a>
      <a href="http://dribbble.com/">
        <FiDribbble />
      </a>
    </div>
  );
}

export default HeaderSocial;
