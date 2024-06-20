import { useState } from "react";
import "./actionDrawer.css";
import { FiAlertCircle } from "react-icons/fi";
import FormOrganism from "@/components/organisms/ActionDrawerForm";

interface EmActionDrawerProps {
  id: string;
}

const EmActionDrawer: React.FC<EmActionDrawerProps> = ({ id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [slider, setSlider] = useState(0);

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
        className={`md:w-[600px] lg:w-[800px] border-2 px-5 drawer ${
          isOpen ? "open" : ""
        }`}
      >
        <div className="w-[90%] mx-auto flex">
          <div className="w-1/2 justify-start">
            <p className="my-5 text-2xl font-bold">Kontierungstempel</p>
          </div>
          <div className="w-1/2 justify-end flex">
            <button
              onClick={toggleDrawer}
              className="mr-0 rounded-sm lg:w-[20%] drawer-close-button"
            >
              Close
            </button>
          </div>
        </div>
        <FormOrganism slider={slider} setSlider={setSlider} id={id} />
      </div>
    </div>
  );
};

export default EmActionDrawer;
