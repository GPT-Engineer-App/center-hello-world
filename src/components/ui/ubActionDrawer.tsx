import { useState } from "react";
import "./actionDrawer.css";
import { FiAlertCircle } from "react-icons/fi";
import MySelecter from "./selecter";

const UbActionDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <FiAlertCircle
        onClick={toggleDrawer}
        className="hover:cursor-pointer text-xl lg:text-3xl"
      />
      <div
        className={`md:w-[600px] Xlg:w-[800px] border-2 px-5 drawer ${
          isOpen ? "open" : ""
        }`}
      >
        <button onClick={toggleDrawer} className="rounded-sm drawer-close-button">
          Close
        </button>
        <form>
          <li className="flex flex-col items-center">
            <div className="flex flex-col">
              <label className="w-72 mt-4 font-bold text-xl">wer bezahlt</label>
              <MySelecter option={1} />
            </div>
            <div className="flex flex-col">
              <label className="w-72 mt-4 font-bold text-xl">wer geprüft</label>
              <MySelecter option={2} />
            </div>
          </li>
        </form>
      </div>
    </div>
  );
};

export default UbActionDrawer;
