import AccountDetails from "@/sections/pages/admin/accountDetails";
import { vendor } from "@/sections/pages/admin/vendor";
import { useRouter } from "next/router";
import Modal from "@/sections/pages/admin/modal";
import { useState } from "react";

function AccountDetailsPage() {
    const router = useRouter();


    return (  
        <section className='p-5 sm:p-10'>
            <div className='mb-6 flex items-center'>
                <button className="mr-3 px-1" onClick={() => router.back()}>
                    <picture>
                        <img src="/assets/svgs/arrow-left.svg" className="h-[20px]" alt="" />
                    </picture>
                </button>
                <p className='text-lg font-semibold'>
                    <span className='text-gray-500 font-normal'>Pending Accounts / </span>
                    Vendor Details
                </p>
            </div>
            <AccountDetails vendor={vendor} />

            
        </section>
    );
}

export default AccountDetailsPage;