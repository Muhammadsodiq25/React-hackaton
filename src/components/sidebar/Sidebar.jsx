import { Link } from "react-router-dom";
import { side_logo, links } from "../../data/Muhammadsodiq";
import { useState } from "react";

const Sidebar = () => {
  const [hide, setHide] = useState(false);
  return (
    <div className="w-[15%] items-start flex flex-col">
      <div className="flex flex-col h-full justify-between items-start py-8 px-8 gap-10 border-r-2 border-r-[#D7DBEC] transition-all transition-[0.3s ]">
        <button
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => setHide(!hide)}
        >
          <img src={side_logo} alt="img" className="w-9" />
          <span
            style={{ display: `${hide ? "none" : ""}` }}
            className="font-sans font-extrabold text-2xl"
          >
            Modernize
          </span>
        </button>
        <nav className="w-full">
          <ul className="flex items-start flex-col gap-3 w-full">
            {links.map((link, index) => {
              return (
                <li className="w-full flex items-start  " key={index}>
                  <Link
                    to={link.to}
                    className="flex items-center gap-2.5 py-2.5 px-2.5 rounded-[4px] hover:bg-[#1E5EFF] hover:text-white"
                  >
                    <img src={link.icon} alt="" className="w-6" />
                    <span
                      style={{ display: `${hide ? "none" : ""}` }}
                      className="font-sans text-lg text-[#5A607F]"
                    >
                      {link.text}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
