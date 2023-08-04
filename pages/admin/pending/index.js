import Button from "@/components/button/button";
import PendingTableRow from "@/sections/pages/admin/pendingAccounts/pendingTablerow";
import PendingTablehead from "@/sections/pages/admin/pendingAccounts/pendingTablehead";
import Table from "@/sections/pages/admin/table";
import { useState } from "react";
import Modal from "@/sections/pages/admin/modal";

function Pending() {
    const [currentItems, setCurrentItems] = useState(null);
    const [isApproveModalOpen, setIsApproveModalOpen] = useState(false);
    const [isDeclineModalOpen, setIsDeclineModalOpen] = useState(false);

    return (  
        <div className='p-5 sm:p-8'>
            <div className='flex flex-col sm:flex-row justify-between sm:items-center'>
                <span className='text-2xl font-bold p-0 m-0'>
                    Pending Accounts 
                    <span className='text-gray-600 ml-2'>({pendingAccountsList.length})</span>
                </span>

                <div className='flex flex-col sm:flex-row gap-2'>
                    <Button text="View Details" variant="white" customClassName="border border-gray-300" />
                    <Button text="Approve Account" variant="white" customClassName="border border-gray-300" onClick={() => setIsApproveModalOpen(true)} />
                    <Button text="Decline Account" variant="white" customClassName="border border-gray-300" onClick={() => setIsDeclineModalOpen(true)} />
                </div>
            </div>

            <div className='w-full'>
                <Table 
                    tableHead={<PendingTablehead />}
                    tableRows={<PendingTableRow currentItems={currentItems} />}
                    data={pendingAccountsList}
                    currentItems={currentItems}
                    setCurrentItems={setCurrentItems}
                />

               
            </div>

            <Modal 
                isModalOpen={isApproveModalOpen} 
                setIsModalOpen={setIsApproveModalOpen} 
                title="Approve Account" 
                confirmBtnText="Approve Account"
                cancelBtnText="Changed my mind"
                body={
                    <div className='mb-3'>
                        <p className='mb-5'>By approving this account, the vendor will be notified via email and will gain access the vendor dashboard.</p>
                        <p className='text-gray-500 text-sm'>Reminder to verify the vendor’s information and ensure they meet all requirements.</p>
                    </div>
                }
            />

            <Modal 
                isModalOpen={isDeclineModalOpen} 
                setIsModalOpen={setIsDeclineModalOpen} 
                title="Decline Account" 
                confirmBtnText="Decline Account"
                cancelBtnText="Changed my mind"
                body={
                    <div>
                        <p>Are you sure you want to decine this vendor account?</p>
                        <div className='my-4'>
                            <label htmlFor="reason">Reason for decline</label>
                            <textarea name="reason" id="reason" rows="4" className='block w-full border border-gray-400 p-3 mt-1' placeholder="Let the vendor know the reason for the decline"></textarea>
                        </div>

                        <p className='text-gray-500 text-sm mb-3'>By declining this account, the vendor will be notified via email and will not be able to access the vendor dashboard.</p>
                    </div>
                }
            />
        </div>
    );
}

export default Pending;


const pendingAccountsList = [
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