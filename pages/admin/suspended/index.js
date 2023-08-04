import { useState } from "react";
import Table from "@/sections/pages/admin/table";
import SuspendedTablehead from "@/sections/pages/admin/suspendedAccounts/suspenededTablehead";
import SuspendedTableRow from "@/sections/pages/admin/suspendedAccounts/suspendedTablerow";

function Suspened() {
  const [currentItems, setCurrentItems] = useState(null);

  return (
    <div>
      <div className="p-5 sm:p-8">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center">
          <span className="text-2xl font-bold p-0 m-0">
            Suspended Accounts
            <span className="text-gray-600 ml-2">
              ({suspendedAccountsList.length})
            </span>
          </span>
        </div>

        <div className="w-full">
          <Table
            tableHead={<SuspendedTablehead />}
            tableRows={<SuspendedTableRow currentItems={currentItems} />}
            data={suspendedAccountsList}
            currentItems={currentItems}
            setCurrentItems={setCurrentItems}
          />
        </div>
      </div>
    </div>
  );
}

export default Suspened;

const suspendedAccountsList = [
  {
    id: 1,
    fullName: "John Doe",
    email: "johndoe@gmail.com",
    businessName: "JD Enterprises Ltd",
    date: "10 Jan, 2023",
  },
  {
    id: 2,
    fullName: "John Doe",
    email: "johndoe@gmail.com",
    businessName: "JD Enterprises Ltd",
    date: "10 Jan, 2023",
  },
  {
    id: 3,
    fullName: "John Doe",
    email: "johndoe@gmail.com",
    businessName: "JD Enterprises Ltd",
    date: "10 Jan, 2023",
  },
  {
    id: 4,
    fullName: "John Doe",
    email: "johndoe@gmail.com",
    businessName: "JD Enterprises Ltd",
    date: "10 Jan, 2023",
  },
  {
    id: 5,
    fullName: "John Doe",
    email: "johndoe@gmail.com",
    businessName: "JD Enterprises Ltd",
    date: "10 Jan, 2023",
  },
  {
    id: 6,
    fullName: "John Doe",
    email: "johndoe@gmail.com",
    businessName: "JD Enterprises Ltd",
    date: "10 Jan, 2023",
  },
];
