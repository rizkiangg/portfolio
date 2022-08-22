import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import {Link} from 'react-scroll'

function Home() {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-4xl sm:text-7xl font-bold text-white px-7">
            Hi !
          </h1>
          <h2 className="text-4xl sm:text-7xl font-bold text-white px-7 ">
            I'm a FE Developer
          </h2>
          <p className="text-gray-500 py-4 px-7 max-w-md ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo
            placeat dolorem ab autem cumque, minus distinctio accusamus, dicta
            molestias eligendi nulla ipsum animi, asperiores delectus cupiditate
            tempora odio quasi dolor!
          </p>

          <div className="px-7">
            <Link to="portfolio" smooth duration={500}
              className="group text-white w-fit px-6 py-3 my-2
            flex items-center rounded-md bg-gradient-to-r from-pink-300 to-cyan-300 cursor-pointer"
            >
              Portfolio
              
              <span className="ml-2 group-hover:rotate-90 duration-200">
                <MdKeyboardArrowRight size={25} />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt=""
            className="rounded-2xl w-2/3 mx-auto md:w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
