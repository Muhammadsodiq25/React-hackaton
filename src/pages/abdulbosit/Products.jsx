import { Link } from "react-router-dom";
import Abdulbsoit from "../../data/Abdulbosit";

const Products = () => {
  return (
    <div className=" w-[1110px]">
      <div className="flex justify-between">
        <div className="text-2xl font-bold color-gray-950">
          <h2>{Abdulbsoit.name}</h2>
        </div>

        <div className="w-[163px] h-[40px] bg-blue-700 rounded-sm text-white font-normal text-base flex justify-center cursor-pointer">
            <Link>
            </Link>
          <button>{Abdulbsoit.buttonText}</button>
        </div>
      </div>

      <div className="bg-sky-50 mt-[30px] pt-[30px] rounded-lg">
        <table className="w-full ">
          <thead className="flex justify-between px-15 border-b-[#D7DBEC] border-b-1 py-2">
            {Abdulbsoit.listTop.map((n) => {
              return (
                <tr>
                  <th className="text-sm font-medium text-[gray]">{n}</th>
                </tr>
              );
            })}
          </thead>

          <tbody className="flex flex-col gap-7">
            {Abdulbsoit.listLists.map((n) => {
              return (
                <tr className="flex items-center w-full justify-between px-15  border-b-[#D7DBEC] border-b-1 py-2">
                  <td className="flex items-center gap-4">
                    <img className="rounded" src={n.img} alt="" />
                    <h3>{n.title}</h3>
                  </td>

                  <td>
                    <h3>{n.inventory}</h3>
                  </td>

                  <td>
                    <h3>{n.color}</h3>
                  </td>

                  <td>
                    <h3>{n.price}</h3>
                  </td>

                  <td>
                    <h3>{n.rating}</h3>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="mt-10 text-right px-10  ">
          <h3>146 Results</h3>
        </div>
      </div>
    </div>
  );
};

export default Products;
