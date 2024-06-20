import { TableHead, TableRow } from "./table";
import { FiTrash } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import { FaRegFilePdf } from "react-icons/fa";
import { Invoice } from "../../interfaces/invoice";

interface KontiertProps {
  key: number;
  data: Invoice;
  index: number;
}

const Kontiert: React.FC<KontiertProps> = ({ key, data, index }) => {
  return (
    <>
      <TableRow>
        <TableHead className="text-black lg:text-lg">{index + 1}</TableHead>
        <TableHead className="text-black lg:text-lg">
          {data.sender[0]?.name}
        </TableHead>
        <TableHead className="text-black lg:text-lg">€350.00</TableHead>
        <TableHead className="text-black">
          <div className="flex justify-center">
            <span className="mx-1 bg-gray-300 p-1 rounded-sm text-xs lg:text-base">
              KONTIERT
            </span>
          </div>
        </TableHead>
        <TableHead className="text-black flex flex-row items-center gap-x-2">
          <FiTrash className="text-xl lg:text-3xl" />
          <FiEye className="text-xl lg:text-3xl" />
          <FaRegFilePdf className="hover:cursor-pointer text-xl lg:text-3xl" />
        </TableHead>
      </TableRow>
    </>
  );
};
export default Kontiert;
