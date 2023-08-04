import { CreditCard } from "@/public/assets/svgs/js/CreditCard";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function AdminSidebar() {
  const [openVendorAccountsDropdown, setOpenVendorAccountsDropdown] =
    useState(true);

    const path = useRouter()
    const pathArray = path.pathname.split("/")
    const subPath = pathArray[pathArray.length - 1]

    const sidebarItems = [
        {id : 1, page : "Approved", route : "approved"},
        {id : 2, page : "Pending", route : "pending"},
        {id : 3, page : "Declined", route : "declined"},
        {id : 4, page : "Suspended", route : "suspended"},
    ]

  return (
    <div className="px-10 flex flex-col py-10 gap-8 ">
      <div className="flex gap-4 items-center">
        <picture>
          <img src="/assets/svgs/CreditCard.svg" alt="" />
        </picture>
        <span>Vendor Accounts</span>  
        <svg
          onClick={() =>
            setOpenVendorAccountsDropdown(!openVendorAccountsDropdown)
          }
          width="12"
          height="7"
          viewBox="0 0 12 7"
          className={`${
            openVendorAccountsDropdown ? "" : "rotate-180"
          } cursor-pointer `}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 6L6 1L11 6"
            stroke="#757575"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {openVendorAccountsDropdown && (
        <div className=" mx-3 px-6 border-l border-[#D7D7D7]">
            <div className='flex flex-col gap-2'>
                {sidebarItems.map((item) => {
                    return <Link key={item.id} href={`/admin/${item.route}`} className={`${subPath === item.page.toLocaleLowerCase() ? "font-semibold" : ""}`}>{item.page}</Link>
                })}
            </div>
        </div>
      )}
    </div>
  );
}

export default AdminSidebar;
