import "../index.css";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FiFilter } from "react-icons/fi";
import { BsSortUpAlt } from "react-icons/bs";
import { fetchAllRowsFromTable } from "@/lib/supabaseOperations";

import Ubertragen from "@/components/ui/ubertragen";
import Empfangen from "@/components/ui/empfangen";
import Kontiert from "@/components/ui/kontiert.tsx";




const Index = () => {
  const [invoice, setInvoices] = useState([]);

  useEffect(() => {
    const fetchAllRows = async () => {
      const data = await fetchAllRowsFromTable("invoices_dev");
      data ? setInvoices(data) : console.log("No data found");
    };

    fetchAllRows();
  }, []);

  return (
    <>
      <div className="h-16 flex items-center justify-end gap-x-2">
        <button className="w-24 h-12 border rounded-md text-xl flex justify-center items-center gap-x-1">
          <FiFilter className="text-2xl" /> Filter
        </button>
        <button className="w-24 h-12 border rounded-md text-xl flex justify-center items-center gap-x-1">
          <BsSortUpAlt className="text-2xl" /> Sort
        </button>
      </div>
      <Table className="table-auto">
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold text-lg text-left">ID</TableHead>
            <TableHead className="font-bold text-lg text-left">
              Sender
            </TableHead>
            <TableHead className="font-bold text-lg text-left">
              Amount
            </TableHead>
            <TableHead className="font-bold text-lg text-left">
              Status
            </TableHead>
            <TableHead className="font-bold text-lg text-left">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoice.map((row, index) => {
            switch (row.status) {
              case "Empfangen":
                return <Empfangen key={row.id} data={row} index={index} />;
              case "Ubertragen":
                return <Ubertragen key={row.id} data={row} index={index} />;
              case "Kontiert":
                return <Kontiert key={row.id} data={row} index={index} />;
              default:
                return null;
            }
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default Index;
