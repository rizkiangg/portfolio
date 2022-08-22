import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsInstagram } from "react-icons/bs";

function SocialLinks() {
  const links = [
    {
      id: 1,
      child: (
        <>
          Linkedin <FaLinkedin size={30} />
        </>
      ),
      href: "https://linkedin.com",
      style:
        "flex hover:ml-[-10px] duration-200 justify-between items-center w-40 h-14 px-4 bg-gray-500/30 rounded-tr-md backdrop-blur-sm ml-[-100px] hover:rounded-r-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com",
      style:
        "flex hover:ml-[-10px] duration-200 justify-between items-center w-40 h-14 px-4 bg-gray-500/30 backdrop-blur-sm ml-[-100px] hover:rounded-r-md",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:rikiagung629@gmail.com",
      style:
        "flex hover:ml-[-10px] duration-200 justify-between items-center w-40 h-14 px-4 bg-gray-500/30  backdrop-blur-sm ml-[-100px] hover:rounded-r-md",
    },
    {
      id: 4,
      child: (
        <>
          Instagram <BsInstagram size={30} />
        </>
      ),
      href: "https://www.instagram.com/agung_rizki.800/",
      style:
        "flex hover:ml-[-10px] duration-200 justify-between items-center w-40 h-14 px-4 bg-gray-500/30 rounded-br-md backdrop-blur-sm ml-[-100px] hover:rounded-r-md",
    },
  ];

  return (
    <div className=" flex-col top-[35%] left-0 fixed hidden lg:flex">
      <ul>
        {links.map((item, index) => {
          console.log(item);
          return (
            <li key={item.id} className={item.style}>
              <a
                href={item.href}
                className="flex justify-between items-center w-full text-white"
                target="_blank"
                rel="noreferrer"
              >
                {item.child.props.children[0]}
                {item.child.props.children[1]}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SocialLinks;
