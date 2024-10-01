import { useState, useEffect } from "react";
import { Link as Links } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { BiAdjust } from "react-icons/bi";
import { Link } from "react-router-dom";

const Nav = () => {
  const [click, setClick] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const handleClick = () => setClick(!click);

  useEffect(() => {
    // Verifica si el usuario logueado es "JuanitoAlimaña"
    const user = JSON.parse(localStorage.getItem('user'));

    // Verificar qué se está almacenando en localStorage
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
              <li className="my-4 py-4 border-b border-slate-900 hover:bg-zinc-800 hover:rounded">
                Home
              </li>
            </Link>
          </Links>
          <Links spy={true} smooth={true} to="Acout">
            <Link to="/account">
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
          {/* <Links spy={true} smooth={true} to="Service">
            <Link to="/service">
              <li className="my-4 py-4 border-b border-slate-900 hover:bg-zinc-800 hover:rounded">
                Service
              </li>
            </Link>
          </Links> */}
          {/* Mostrar CRUD solo si es admin */}
          {isAdmin && (
            <Links spy={true} smooth={true} to="CRUD">
              <Link to="/Crud">
                <li className="my-4 py-4 border-b border-slate-900 hover:bg-zinc-800 hover:rounded">
                  CRUD
                </li>
              </Link>
            </Links>
          )}
          <div className="TemaClaroOscuro">
            <button className="">{<BiAdjust />}</button>
          </div>
        </ul>
      </div>
    </>
  );

  return (
    <nav className="Color">
      <div className="h-10vh flex justify-between lg:py-5 px-20 py-4 items-center TextNavColor">
        <div className="flex items-center flex-1">
          <img className="w-[70px] ImgNav" src="./src/Verso-img/V-removebg-preview.png" alt="Logo"></img>
        </div>
        <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16">
              <Links spy={true} smooth={true} to="Home">
                <Link to="/">
                  <li className="hover:text-neutral-800 transition duration-500 border-b-2 border-grey-200 hover:border-neutral-800 cursor-pointer TextNav">
                    Home
                  </li>
                </Link>
              </Links>
              <Links spy={true} smooth={true} to="Acout">
                <Link to="/account">
                  <li className="hover:text-neutral-800 transition duration-500 border-b-2 border-grey-200 hover:border-neutral-800 cursor-pointer TextNav">
                    Account
                  </li>
                </Link>
              </Links>
              <Links spy={true} smooth={true} to="About">
                <Link to="/about">
                  <li className="hover:text-neutral-800 transition duration-500 border-b-2 border-grey-200 hover:border-neutral-800 cursor-pointer TextNav">
                    About
                  </li>
                </Link>
              </Links>
              {/* <Links spy={true} smooth={true} to="Service">
                <Link to="/service">
                  <li className="hover:text-neutral-800 transition duration-500 border-b-2 border-grey-200 hover:border-neutral-800 cursor-pointer TextNav">
                    Service
                  </li>
                </Link>
              </Links> */}
              {/* Mostrar CRUD solo si es admin */}
              {isAdmin && (
                <Links spy={true} smooth={true} to="CRUD">
                  <Link to="/Crud">
                    <li className="hover:text-neutral-800 transition duration-500 border-b-2 border-grey-200 hover:border-neutral-800 cursor-pointer TextNav">
                      CRUD
                    </li>
                  </Link>
                </Links>
              )}
              <div className="TemaClaroOscuro">
                <button className="">{<BiAdjust />}</button>  
              </div>
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
