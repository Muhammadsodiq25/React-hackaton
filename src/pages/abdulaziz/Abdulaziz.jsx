import { useState } from "react";
import { Abdulazizbee_701 } from "../../data/Abdulaziz";
import { IoMdClose } from "react-icons/io";
const Abdulaziz = () => {
  const [click, setClick] = useState(false);
  return (
    <div>
      <div className="flex mt-28 justify-between px-10">
        <h1 className="text-3xl font-bold size-6 ">Categories</h1>
        <button
          onClick={() => {
            setClick(!click);
          }}
          className="text-wrap rounded-2xl border-0 py-3 px-3 bg-[#1E5EFF] items-center text-center"
        >
          + Add Category
        </button>
      </div>
      {/* <div className="ml-180 mt-50 fixed items-center justify-between">
        <div className="p-10 flex flex-col gap-5 bg-white">
          <div className="flex justify-between gap-80">
            <h2>Add Category</h2>
            <p>
              <IoMdClose />
            </p>
          </div>
          <div className="ml-30 mt-10">
            <p>Category Name</p>
            <input
              className="border-1"
              type="text"
              placeholder="Women Clothes"
              required
            />
            <p>Category Image url</p>
            <input
              className="border-1"
              type="text"
              placeholder="Image url"
              required
            />
            <div className="mt-10">
              <button className="text-wrap border-0 py-3 px-3 text-[#1E5EFF] items-center text-center">
                Cancel
              </button>
              <button className="text-wrap border-0 py-3 px-3 bg-[#1E5EFF] items-center text-center">
                Create Category
              </button>
            </div>
          </div>
        </div>
      </div> */}
      <div className="grid grid-cols-3 mt-5 py-10 px-10 w-full items-center gap-5 ml-28">
        {Abdulazizbee_701.map((link) => {
          return (
            <section>
              <img className="w-96" src={link.img} />
              <h4>{link.text}</h4>
              <p className="text-[#5A607F]">{link.items}</p>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default Abdulaziz;
