import React from 'react';
import Link from 'next/link';


function ApprovedTableRow({currentItems}) {

  return (
    <>
      <tbody>
      {currentItems && currentItems.map((cell, i) => (
        <tr className='text-sm sm:text-base font-normal hover:bg-[#F6F6F6]' key={i}>
          <td className='py-8 px-4  '>
            <input type="checkbox" />
          </td>
          <td className='py-8 px-4 '>
            <Link href={`/admin/approved/${cell.id}`}>{cell.name}</Link>
          </td>
          <td className='py-8 px-4 '>{cell.email}</td>
          <td className='py-8 px-4 font-semibold text-[#0D0D0D]'>
            <label class="relative inline-flex items-center mr-5 cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-9 h-5 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
            </label>
          </td>
          <td className='py-8 px-4 '>{cell.date}</td>
          <td className='py-8 px-4 '>{cell.fulfilledOrders}</td>
          <td className='py-8 px-4 '>{cell.failedOrders}</td>
        </tr>
      ))}
      </tbody>
    </>
  )
}


export default ApprovedTableRow
