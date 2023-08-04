import DeclinedTableRow from "@/sections/pages/admin/declinedAccounts/declinedTablerow";
import DeclinedTablehead from "@/sections/pages/admin/declinedAccounts/declinedTablehead";
import Table from "@/sections/pages/admin/table";
import { useState } from "react";
import { vendor } from "@/sections/pages/admin/vendor";
import Button from "@/components/button/button";

function Declined() {
    const [currentItems, setCurrentItems] = useState(null);

    return (  
        <div className="p-5 sm:p-8">
            <div className='flex justify-between items-center'>
                <span className='text-2xl font-bold p-0 m-0'>
                    Declined Accounts 
                    <span className='text-gray-600 ml-2'>({declinedAccountsList.length})</span>
                </span>

                <div className='flex gap-2'>
                    <Button text="View Details" variant="white" customClassName="border border-gray-300" />
                    <Button text="Contact Vendor" variant="white" customClassName="border border-gray-300" />
                    <Button text="Delete Account" variant="white" customClassName="border border-gray-300" />
                </div>
            </div>

            <div className='w-full'>
                <Table 
                    tableHead={<DeclinedTablehead />}
                    tableRows={<DeclinedTableRow currentItems={currentItems} />}
                    data={declinedAccountsList}
                    currentItems={currentItems}
                    setCurrentItems={setCurrentItems}
                />
            </div>
        </div>
    );
}

export default Declined;


const declinedAccountsList = [
    {   
        id : 1,
        fullName : "John Doe",
        email : "johndoe@gmail.com",
        businessName : "JD Enterprises Ltd",
        date : "10 Jan, 2023"
    },
    {   
        id : 2,
        fullName : "John Doe",
        email : "johndoe@gmail.com",
        businessName : "JD Enterprises Ltd",
        date : "10 Jan, 2023"
    },
    {   
        id : 3,
        fullName : "John Doe",
        email : "johndoe@gmail.com",
        businessName : "JD Enterprises Ltd",
        date : "10 Jan, 2023"
    },
    {
        id : 4,
        fullName : "John Doe",
        email : "johndoe@gmail.com",
        businessName : "JD Enterprises Ltd",
        date : "10 Jan, 2023"
    },
    {
        id : 5,
        fullName : "John Doe",
        email : "johndoe@gmail.com",
        businessName : "JD Enterprises Ltd",
        date : "10 Jan, 2023"
    },
    {
        id : 6,
        fullName : "John Doe",
        email : "johndoe@gmail.com",
        businessName : "JD Enterprises Ltd",
        date : "10 Jan, 2023"
    },
    {
        id : 7,
        fullName : "John Doe",
        email : "johndoe@gmail.com",
        businessName : "JD Enterprises Ltd",
        date : "10 Jan, 2023"
    },
    {
        id : 8,
        fullName : "John Doe",
        email : "johndoe@gmail.com",
        businessName : "JD Enterprises Ltd",
        date : "10 Jan, 2023"
    },
]