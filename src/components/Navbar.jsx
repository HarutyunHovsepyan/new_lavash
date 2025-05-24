import { useState } from "react";
import logo from "../assets/logo.webp";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import { useTranslation } from "react-i18next";
import ruFlag from "../assets/ru.png";
import deFlag from "../assets/de.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="border-b-2 bg-sky-500/50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-8">
        <div className="pl-2">
          <a href="#">
            <img src={logo} width={150} height={150} alt="logo" />
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl pr-2 focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open"}
          >
            {isOpen ? <RiCloseLine /> : <RiMenu2Line />}
          </button>
        </div>
        <div className="hidden md:flex space-x-8 md:space-x-4 pr-2 items-center">
          <a href="#" className="uppercase text-sm font-medium">
            {t("navbar.home")}
          </a>
          <a href="#services" className="uppercase text-sm font-medium">
            {t("navbar.services")}
          </a>
          <a href="#portfolio" className="uppercase text-sm font-medium">
            {t("navbar.portfolio")}
          </a>
          <a href="#reviews" className="uppercase text-sm font-medium">
            {t("navbar.reviews")}
          </a>
          <a href="#contact" className="uppercase text-sm font-medium">
            {t("navbar.contact")}
          </a>
          <div className="ml-4 flex items-center space-x-2">
            <button onClick={() => changeLanguage("ru")} className="w-6 h-4">
              <img src={ruFlag} alt="RU" className="w-full h-full object-cover" />
            </button>
            <button onClick={() => changeLanguage("de")} className="w-6 h-4">
              <img src={deFlag} alt="DE" className="w-full h-full object-cover" />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${isOpen ? "block" : "hidden"} md:hidden absolute bg-neutral-50 w-full py-5 px-4 mt-2 border-b-4`}
      >
        <a href="#" className="uppercase text-lg font-medium block py-2 tracking-wide">
          {t("navbar.home")}
        </a>
        <a href="#services" className="uppercase text-lg font-medium block py-2 tracking-wide">
          {t("navbar.services")}
        </a>
        <a href="#portfolio" className="uppercase text-lg font-medium block py-2 tracking-wide">
          {t("navbar.portfolio")}
        </a>
        <a href="#reviews" className="uppercase text-lg font-medium block py-2 tracking-wide">
          {t("navbar.reviews")}
        </a>
        <a href="#contact" className="uppercase text-lg font-medium block py-2 tracking-wide">
          {t("navbar.contact")}
        </a>
        <div className="mt-4 flex space-x-4">
          <button onClick={() => changeLanguage("ru")} className="w-6 h-4">
            <img src={ruFlag} alt="RU" className="w-full h-full object-cover" />
          </button>
          <button onClick={() => changeLanguage("de")} className="w-6 h-4">
            <img src={deFlag} alt="DE" className="w-full h-full object-cover" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
