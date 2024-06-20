import { TableHead, TableRow } from "./table";
import { FiTrash } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import { FaRegFilePdf } from "react-icons/fa";
import UbActionDrawer from "./ubActionDrawer";
import { Invoice } from "../../interfaces/invoice";

interface UbertragenProps {
  key: number;
  data: Invoice;
  index: number;
}

const Ubertragen: React.FC<UbertragenProps> = ({ key, data, index }) => {
  return (
    <>
      <TableRow className="bg-slate-200">
        <TableHead className="text-black lg:text-lg">{index + 1}</TableHead>
        <TableHead className="text-black lg:text-lg">{data.sender[0]?.name}</TableHead>
        <TableHead className="text-black lg:text-lg">€150.00</TableHead>
        <TableHead className="text-black lg:text-lg">
          <div className="flex flex-wrap justify-center">
            <span className="mx-1 bg-gray-300 p-1 rounded-sm text-xs lg:text-base">
              ÜBERTRAGEN
            </span>
            <span className="whitespace-nowrap mx-1 bg-red-500 p-1 rounded-sm text-xs lg:text-base text-white">
              ACTION REQUIRED
            </span>
          </div>
        </TableHead>
        <TableHead className="text-black flex flex-row items-center gap-x-2">
          <FiTrash className="text-xl lg:text-3xl" />
          <FiEye className="text-xl lg:text-3xl" />
          <FaRegFilePdf className="hover:cursor-pointer text-xl lg:text-3xl"/>
          <UbActionDrawer />
        </TableHead>
      </TableRow>
    </>
  );
};
export default Ubertragen;
