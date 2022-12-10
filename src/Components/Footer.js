import React from "react";
import { RiCopyrightFill } from "react-icons/ri";
import { GrFacebook, GrLinkedin, GrYoutube, GrTwitter } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="bg-[#ffffff] p-20 flex flex-col gap-y-6 pb-4">
      <div className="flex justify-center items-center">
        <div className="flex gap-8">
          <a className="font-semibold" href="#section_home">
            Home
          </a>
          <a className="font-semibold" href="#section_projects">
            Projects
          </a>
          <a className="font-semibold" href="/">
            Skill
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex gap-6">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/profile.php?id=100028404980361"
          >
            <GrFacebook className="w-6 h-6" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/me-mehedi-hasan/"
          >
            <GrLinkedin className="w-6 h-6" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.youtube.com/">
            <GrYoutube className="w-6 h-6" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://twitter.com/">
            <GrTwitter className="w-6 h-6" />
          </a>
        </div>
      </div>
      <div>
        <small className="flex justify-center items-center">
          <RiCopyrightFill className="mr-1" /> <p>All right are reserved.</p>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
