import Table from "@/sections/pages/admin/table";
import ApprovedTableRow from "@/sections/pages/admin/approvedAccounts/approvedTablerow";
import ApprovedTablehead from "@/sections/pages/admin/approvedAccounts/approvedTablehead";
import { list } from "@/sections/pages/admin/pagination";
import Button from "@/components/button/button";
import { useState } from "react";

function Approved() {
    const [currentItems, setCurrentItems] = useState(null);

    return (  
        <div className="p-5 sm:p-8">
            <div className='flex flex-col sm:flex-row justify-between items-center'>
                <p className='text-2xl font-bold p-0 m-0'>
                    Approved Accounts 
                    <span className='text-gray-600 ml-2'>({accountsList.length})</span>
                </p>

                <Button text="Suspend Account" variant="white" customClassName="border border-gray-300 py-1 max-sm:py-2 max-sm:px-4" />
            </div>

            <div>
                <Table 
                    tableHead={<ApprovedTablehead />} 
                    tableRows={<ApprovedTableRow currentItems={currentItems} />}
                    data={accountsList}
                    currentItems={currentItems}
                    setCurrentItems={setCurrentItems} 
                />
            </div>
        </div>
    );
}

const accountsList = [
    {
        name : "John Snow",
        email : "johnsnow@gmail.com",
        date : "Jan 1, 2023",
        fulfilledOrders : 14,
        failedOrders : 3
    },
    {
        name : "John Snow",
        email : "johnsnow@gmail.com",
        date : "Jan 1, 2023",
        fulfilledOrders : 14,
        failedOrders : 3
    },
    {
        name : "John Snow",
        email : "johnsnow@gmail.com",
        date : "Jan 1, 2023",
        fulfilledOrders : 14,
        failedOrders : 3
    },
    {
        name : "John Snow",
        email : "johnsnow@gmail.com",
        date : "Jan 1, 2023",
        fulfilledOrders : 14,
        failedOrders : 3
    },
    {
        name : "John Snow",
        email : "johnsnow@gmail.com",
        date : "Jan 1, 2023",
        fulfilledOrders : 14,
        failedOrders : 3
    },
    {
        name : "John Snow",
        email : "johnsnow@gmail.com",
        date : "Jan 1, 2023",
        fulfilledOrders : 14,
        failedOrders : 3
    },
    {
        name : "John Snow",
        email : "johnsnow@gmail.com",
        date : "Jan 1, 2023",
        fulfilledOrders : 14,
        failedOrders : 3
    },
    {
        name : "John Snow",
        email : "johnsnow@gmail.com",
        date : "Jan 1, 2023",
        fulfilledOrders : 14,
        failedOrders : 3
    },
    {
        name : "John Snow",
        email : "johnsnow@gmail.com",
        date : "Jan 1, 2023",
        fulfilledOrders : 14,
        failedOrders : 3
    },
    {
        name : "John Snow",
        email : "johnsnow@gmail.com",
        date : "Jan 1, 2023",
        fulfilledOrders : 14,
        failedOrders : 3
    },
    {
        name : "John Snow",
        email : "johnsnow@gmail.com",
        date : "Jan 1, 2023",
        fulfilledOrders : 14,
        failedOrders : 3
    },
    {
        name : "John Snow",
        email : "johnsnow@gmail.com",
        date : "Jan 1, 2023",
        fulfilledOrders : 14,
        failedOrders : 3
    },
    {
        name : "John Snow",
        email : "johnsnow@gmail.com",
        date : "Jan 1, 2023",
        fulfilledOrders : 14,
        failedOrders : 3
    },
]

export default Approved;