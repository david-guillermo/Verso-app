import { useState, useEffect } from "react";
import { Link as Links } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Nav = () => {
  const [click, setClick] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleClick = () => setClick(!click);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log('Datos de usuario en localStorage:', user);
    if (user && user.email === 'juanitoAlimaña@maña.com') {
      console.log('El usuario es JuanitoAlimaña (admin)');
      setIsAdmin(true);
    } else {
      console.log('El usuario NO es admin');
      setIsAdmin(false);
    }
  }, []);

  const content = (
    <>
      <div className="lg:hidden block top-16 w-full left-0 right-0 transition z-50">
        <ul className="text-center p-20">
          <Links spy={true} smooth={true} to="Home">
            <Link to="/">
              <li className="my-4 py-4 text-[#a4d43b] dark:border-[#cbee00] dark:hover:bg-zinc-800 dark:hover:rounded">
                Home
              </li>
            </Link>
          </Links>
          <Links spy={true} smooth={true} to="Acout">
            <Link to="/account">
              <li className="my-4 py-4 text-[#a4d43b] dark:border-[#cbee00] dark:hover:bg-zinc-800 dark:hover:rounded">
                Account
              </li>
            </Link>
          </Links>
          <Links spy={true} smooth={true} to="/about">
            <Link to="/about">
              <li className="my-4 py-4 text-[#a4d43b] dark:border-[#cbee00] dark:hover:bg-zinc-800 dark:hover:rounded">
                About
              </li>
            </Link>
          </Links>
          {isAdmin && (
            <Links spy={true} smooth={true} to="CRUD">
              <Link to="/Crud">
                <li className="my-4 py-4 text-[#a4d43b] dark:border-[#cbee00] dark:hover:bg-zinc-800 dark:hover:rounded">
                  CRUD
                </li>
              </Link>
            </Links>
          )}
          <div className="TemaClaroOscuro">
            <button className=""><ThemeToggle/></button>
          </div>
        </ul>
      </div>
    </>
  );

  return (
    <nav className="bg-[#0000]">
      <div className="h-10vh flex justify-between lg:py-5 px-20 py-4 items-center relative TextNavColor">
        <div className={`flex items-center flex-1 ${click && "absolute top-4 left-20"}`}>
          <img className="w-[70px] ImgNav" src="./src/Verso-img/V-removebg-preview.png" alt="Logo"></img>
        </div>
        <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16">
              <Links spy={true} smooth={true} to="Home">
                <Link to="/">
                  <li className="text-[#95a72b] border-[#b1b1b1] dark:text-[#93b746] dark:border-[#cbee00] dark:hover:text-[#252525] transition duration-500 border-b-2 border-grey-200 dark:hover:border-neutral-800  TextNav hover:text-[#252525]  border-grey-200 hover:border-neutral-800">
                    Home
                  </li>
                </Link>
              </Links>
              <Links spy={true} smooth={true} to="Acout">
                <Link to="/account">
                  <li className="text-[#95a72b] border-[#b1b1b1] dark:text-[#93b746] dark:border-[#cbee00] dark:hover:text-[#252525] transition duration-500 border-b-2 border-grey-200 dark:hover:border-neutral-800  TextNav hover:text-[#252525]  border-grey-200 hover:border-neutral-800">
                    Account
                  </li>
                </Link>
              </Links>
              <Links spy={true} smooth={true} to="About">
                <Link to="/about">
                  <li className="text-[#95a72b] border-[#b1b1b1] dark:text-[#93b746] dark:border-[#cbee00] dark:hover:text-[#252525] transition duration-500 border-b-2 border-grey-200 dark:hover:border-neutral-800  TextNav hover:text-[#252525]  border-grey-200 hover:border-neutral-800 ">
                    About
                  </li>
                </Link>
              </Links>
              {isAdmin && (
                <Links spy={true} smooth={true} to="CRUD">
                  <Link to="/Crud">
                    <li className="text-[#95a72b] border-[#b1b1b1] dark:text-[#93b746] dark:border-[#cbee00] dark:hover:text-[#252525] transition duration-500 border-b-2 border-grey-200 dark:hover:border-neutral-800  TextNav hover:text-[#252525]  border-grey-200 hover:border-neutral-800 ">
                      CRUD
                    </li>
                  </Link>
                </Links>
              )}
              <div className="TemaClaroOscuro">
                <button className="text-[#474e21] dark:text-[#cbee00]"><ThemeToggle/></button>
              </div>
            </ul>
          </div>
        </div>
        <div>{click && content}</div>
        <button className={`block sm:hidden transition  ${click && "absolute top-10 right-20"}`} onClick={handleClick}>
          {click ? <FaTimes size={35} /> : <CiMenuFries size={30} />}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
