import AccountDetails from "@/sections/pages/admin/accountDetails";
import { vendor } from "@/sections/pages/admin/vendor";
import { useRouter } from "next/router";

function AccountDetailsPage() {
    const router = useRouter();

    return (  
        <div className="p-4 sm:p-6 md:p-8">
            <div className='flex items-center'>
                <button className="mr-3 px-1" onClick={() => router.back()}>
                        <picture>
                            <img src="/assets/svgs/arrow-left.svg" className="h-[20px]" alt="" />
                        </picture>
                    </button>
                <p className='text-lg font-semibold'>
                        <span className='text-gray-500 font-normal'>Declined Accounts / </span>
                        Vendor Details
                </p>
            </div>
            <div className='my-8'>
                <div className='flex items-center'>
                    <div className='rounded-full  bg-[#FFEEDB] p-3 mr-2'>
                        <div className='bg-[#FF8000] p-1 w-5 h-5 flex items-center justify-center rounded-full'>!</div>
                    </div>

                    <h3 className='text-2xl font-semibold'>This vendor account has been declined</h3>
                </div>
                <div className='text-gray-500 text-lg ml-[54px]'>
                    <p>Mismatched information</p>
                    <p>Lack of relevant documents</p>
                </div>
            </div>
            <AccountDetails vendor={vendor} />
        </div>
    );
}

export default AccountDetailsPage;