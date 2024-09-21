import { useState } from "react";
import { Link as Links } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { BiAdjust } from "react-icons/bi";
import { Link } from "react-router-dom";

const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const content = (
    <>
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0 transition">
        <ul className="text-center text-xl p-20">
          <Links spy={true} smooth={true} to="Home">
            <Link to="/">
              <li className="my-4 py-4 border-b border-slate-900 hover:bg-zinc-800 hover:rounded">
                Home
              </li>
            </Link>
          </Links>
          <Links spy={true} smooth={true} to="Acout">
            <Link to="/accout">
              <li className="my-4 py-4 border-b border-slate-900 hover:bg-zinc-800 hover:rounded">
                Account
              </li>
            </Link>
          </Links>
          <Links spy={true} smooth={true} to="/about">
            <Link to="/about">
              <li className="my-4 py-4 border-b border-slate-900 hover:bg-zinc-800 hover:rounded">
                About
              </li>
            </Link>
          </Links>
          <Links spy={true} smooth={true} to="Service">
            <Link to="/service">
              <li className="my-4 py-4 border-b border-slate-900 hover:bg-zinc-800 hover:rounded">
                Service
              </li>
            </Link>
          </Links>
          <button className="TemaClaro&Oscuro">{<BiAdjust />}</button>
        </ul>
      </div>
    </>
  );
  return (
    <nav className="Color">
      <div className="h-10vh flex justify-between z-50 lg:py-5 px-20 py-4 items-center TextNavColor">
        <div className="flex items-center flex-1">
          <img
            className="w-[70px]"
            src="./src/Verso-img/V-removebg-preview.png"
          ></img>
        </div>
        <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <Links spy={true} smooth={true} to="Home">
                <Link to="/">
                  <li className="hover:text-zinc-800 transition border-b-2 border-grey-200 hover:border-gray-900  cursor-pointer">
                    Home
                  </li>
                </Link>
              </Links>
              <Links spy={true} smooth={true} to="Acout">
                <Link to="/account">
                  <li className="hover:text-  transition border-b-2 border-grey-200 hover:border-gray-900  cursor-pointer">
                    Account
                  </li>
                </Link>
              </Links>
              <Links spy={true} smooth={true} to="About">
                <Link to="about">
                  <li className="hover:text-  transition border-b-2 border-grey-200 hover:border-gray-900  cursor-pointer">
                    About
                  </li>
                </Link>
              </Links>
              <Links spy={true} smooth={true} to="Service">
                <Link to="/service">
                  <li className="hover:text-  transition border-b-2 border-grey-200 hover:border-gray-900 cursor-pointer">
                    Service
                  </li>
                </Link>
              </Links>
              <button className="TemaClaro&Oscuro">{<BiAdjust />}</button>
            </ul>
          </div>
        </div>
        <div>{click && content}</div>
        <button className="block sm:hidden transition" onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
