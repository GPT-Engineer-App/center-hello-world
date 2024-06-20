import { TableHead, TableRow } from "./table";
import { FiTrash } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import { FaRegFilePdf } from "react-icons/fa";
import EmActionDrawer from "./emActionDrawer";
import { Invoice } from "../../interfaces/invoice";
import EmEyeDrawer from "./emEyeDrawer";

interface EmpfangenProps {
  data: Invoice;
  index: number;
}

const Empfangen: React.FC<EmpfangenProps> = ({ data, index }) => {
  console.log("Data in Empfangen: ", data);

  return (
    <>
      <TableRow>
        <TableHead className="text-black lg:text-lg">{index + 1}</TableHead>
        <TableHead className="text-black lg:text-lg text-left">
          {data.sender.map((sender, index) => (
            <div key={index}>{sender + " "}</div>
          ))}
        </TableHead>
        <TableHead className="text-black lg:text-lg text-left">
          {data.amount} €
        </TableHead>
        <TableHead className="text-black">
          <div className="flex flex-wrap justify-start">
            <span className="mr-1 bg-gray-300 p-1 rounded-sm text-xs lg:text-base">
              EMPFANGEN
            </span>
            <span className="whitespace-nowrap mx-1 bg-red-500 p-1 rounded-sm text-xs lg:text-base text-white">
              ACTION REQUIRED
            </span>
          </div>
        </TableHead>
        {/* <TableHead className="text-black flex flex-row items-center gap-x-2">
          <FiTrash
            onClick={() => {
              console.log("delete");
            }}
            className="hover:cursor-pointer text-xl lg:text-3xl"
          />
          <EmEyeDrawer data={data} />
          <FaRegFilePdf
            className="hover:cursor-pointer text-xl lg:text-3xl"
            onClick={() => window.open(data.public_url, "_blank")}
          /> */}
        <TableHead className="pl-[0.8rem] text-black flex flex-row justify-start items-center gap-x-2">
          <FiTrash
            onClick={() => {
              console.log("delete");
            }}
            className="hover:cursor-pointer text-xl lg:text-3xl"
          />
          <EmEyeDrawer data={data} />
          <FaRegFilePdf
            className="hover:cursor-pointer text-xl lg:text-3xl"
            onClick={() => window.open(data.public_url, "_blank")}
          />
          <EmActionDrawer id={data.id} />
        </TableHead>
      </TableRow>
    </>
  );
};
export default Empfangen;
