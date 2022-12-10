import React from "react";
import Img1 from "../assets/doctors-portal.png";
import Img2 from "../assets/ice-fire-academy.png";
import Img3 from "../assets/touristics.png";
import { BiLinkExternal } from "react-icons/bi";

const Projects = () => {
  return (
    <section className="mt-10 md:mb-40" id="section_projects">
      <h1 className="text-center font-bold text-2xl my-4">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="card w-full mx-2 md:w-80 bg-base-100 shadow-xl">
          <figure>
            <img src={Img1} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Doctors Portal</h2>
            <p>The MERN stack project made for a dentist.</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://doctor-f3367.web.app/"
                  className="flex items-center justify-center"
                >
                  Visit <BiLinkExternal className="ml-1" />
                </a>
              </div>
              <div className="badge badge-outline">More</div>
            </div>
          </div>
        </div>
        <div className="card w-full mx-2 md:w-80 bg-base-100 shadow-xl">
          <figure>
            <img src={Img2} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Ice Fire Academy</h2>
            <p>An online based learning platform.</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://ice-fire-academy.web.app/"
                  className="flex items-center justify-center"
                >
                  Visit <BiLinkExternal className="ml-1" />
                </a>
              </div>
              <div className="badge badge-outline">More</div>
            </div>
          </div>
        </div>
        <div className="card w-full mx-2 md:w-80 bg-base-100 shadow-xl">
          <figure>
            <img src={Img3} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Touristics</h2>
            <p>The site made for a tour and travels company</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://touristics-872a8.web.app/"
                  className="flex items-center justify-center"
                >
                  Visit <BiLinkExternal className="ml-1" />
                </a>
              </div>
              <div className="badge badge-outline">More</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
