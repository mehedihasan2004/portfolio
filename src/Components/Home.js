import React from "react";
import { FiGithub } from "react-icons/fi";
import { AiOutlineLinkedin, AiOutlineFacebook } from "react-icons/ai";
import Img from "../assets/me-black-white.png";
import Resume from "../assets/Mehedi Hasan Resume.pdf";

const Home = () => {
  return (
    <header
      className="flex md:flex-row-reverse flex-col gap-6 justify-between items-center min-h-screen"
      id="section_home"
    >
      <div>
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row-reverse pt-0">
            <div className="avatar flex justify-center">
              <div className="md:w-2/3 mask mask-hexagon">
                <img src={Img} alt="" />
              </div>
            </div>
            <div className="">
              <div className="md:w-2/3 mx-auto">
                <h1 className="text-5xl font-bold text-[#333333]">
                  Mehedi Hasan
                </h1>
                <h2 className="text-xl font-semibold pt-2">
                  Junior Web Developer
                </h2>
                <p className="py-4">
                  I'm a junior web developer from in Bangladesh, and I'm very
                  passionate and dedicated to coding.
                </p>
                <a download="" href={Resume} className="btn btn-primary">
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full md:w-fit justify-evenly md:flex-col md:gap-5">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/mehedihasan2004"
        >
          <FiGithub className="w-5 h-5" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/me-mehedi-hasan/"
        >
          <AiOutlineLinkedin className="w-5 h-5" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/profile.php?id=100028404980361"
        >
          <AiOutlineFacebook className="w-5 h-5" />
        </a>
      </div>
    </header>
  );
};

export default Home;
