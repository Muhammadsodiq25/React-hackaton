import { CiSearch } from "react-icons/ci";
import { header_user } from "../../data/Muhammadsodiq";

const Header = () => {
  return (
    <div className="flex w-full items-center py-6 px-7 justify-between">
      <div className="flex items-center gap-5">
        <CiSearch className="text-2xl font-extrabold text-[#7E84A3]" />
        <input
          type="text"
          placeholder="Search..."
          className="cursor-pointer font-bold text-wrap outline-0"
        />
      </div>
      <div className="flex items-center gap-5">
        <img
          className="w-10 rounded-[100px] bg-[#D8D8D8]"
          src={header_user.img}
          alt=""
        />
        <h1 className="font-semibold text-lg text-[#5A607F]">
          {header_user.text}
        </h1>
      </div>
    </div>
  );
};

export default Header;
