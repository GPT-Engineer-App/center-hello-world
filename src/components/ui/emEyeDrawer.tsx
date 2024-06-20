import { useState } from "react";
import "./actionDrawer.css";
import { FiEye } from "react-icons/fi";
import FormOrganism from "@/components/organisms/ActionDrawerForm";
import { Invoice } from "@/interfaces/invoice";

interface EmEyeDrawerProps {
  data: Invoice;
}

const EmEyeDrawer = ({ data }: EmEyeDrawerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [slider, setSlider] = useState(0);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <FiEye
        className="hover:cursor-pointer text-xl lg:text-3xl"
        onClick={toggleDrawer}
      />
      <div
        className={`md:w-[600px] lg:w-[800px] border-2 px-5 drawer ${
          isOpen ? "open" : ""
        }`}
      >
        <button
          onClick={toggleDrawer}
          className="rounded-sm mx-auto w-[90%] drawer-close-button"
        >
          Close
        </button>
        <div className="w-[90%] h-full mx-auto flex sm:flex-row flex-col sm:justify-around">
          <div className="w-1/2">
            <div className="mt-4">
              <p className="font-bold text-xl">Eingegangen_am:</p>
              <p>{data.eingegangen_am || "Leer"}</p>
            </div>
            <div className="mt-4">
              <p className="font-bold text-xl">Konto:</p>
              <p>{data.konto || "Leer"}</p>
            </div>
            <div className="mt-4">
              <p className="font-bold text-xl">Ev/Vp:</p>
              <p>{data.ev_vp || "Leer"}</p>
            </div>
            <div className="mt-4">
              <p className="font-bold text-xl">Belegtext:</p>
              <p>{data.belegtext || "Leer"}</p>
            </div>
            <div className="mt-4">
              <p className="font-bold text-xl">Kommentar:</p>
              <p>{data.kommentar || "Leer"}</p>
            </div>
            <div className="mt-4">
              <p className="font-bold text-xl">Fällig_am:</p>
              <p>{data.faellig_am || "Leer"}</p>
            </div>
            <div className="mt-4">
              <p className="font-bold text-xl">Gebucht:</p>
              <p>{data.gebucht || "Leer"}</p>
            </div>
            <div className="mt-4">
              <p className="font-bold text-xl">Skonto:</p>
              <p>{data.skonto ? "Yes" : "No"}</p>
            </div>
          </div>
          <div className="w-1/2">
            <div className="mt-4">
              <p className="font-bold text-xl">Kostenstelle:</p>
              <p>{data.kostenstelle || "Leer"}</p>
            </div>
            <div className="mt-4">
              <p className="font-bold text-xl">VB:</p>
              <p>{data.VB || "Leer"}</p>
            </div>
            <div className="mt-4">
              <p className="font-bold text-xl">wer_geprüft:</p>
              <p>{data.wer_gepruft || "Leer"}</p>
            </div>
            <div className="mt-4">
              <p className="font-bold text-xl">wer_bezahlt:</p>
              <p>{data.wer_bezahlt || "Leer"}</p>
            </div>
            <div className="mt-4">
              <p className="font-bold text-xl">Status:</p>
              <p>{data.status || "Leer"}</p>
            </div>
            <div className="mt-4">
              <p className="font-bold text-xl">Amount:</p>
              <p>{data.amount || "Leer"}</p>
            </div>
            <div className="mt-4">
              <p className="font-bold text-xl">Sender:</p>
              <p>{data.sender.length > 0 ? data.sender.join(", ") : "Leer"}</p>
            </div>
            <div className="mt-4">
              <p className="font-bold text-xl">Email_body:</p>
              <p>{data.email_body || "Leer"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmEyeDrawer;
