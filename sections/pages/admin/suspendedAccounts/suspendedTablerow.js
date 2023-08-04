import Link from "next/link";

function SuspendedTableRow({ currentItems }) {
    return (  
        <>
      <tbody className='w-full'>
      {currentItems && currentItems.map((cell, i) => (
        <tr className='text-sm sm:text-base font-normal hover:bg-[#F6F6F6] w-full' key={i}>
          <td className='py-8 px-4  '>
            <input type="checkbox" />
          </td>
          <td className='py-8 px-4 '>
            <Link href={`/admin/pending/${cell.id}`}>{cell.fullName}</Link>
          </td>
          <td className='py-8 px-4 '>{cell.businessName}</td>
          <td className='py-8 px-4 '>{cell.email}</td>
        </tr>
      ))}
      </tbody>
    </>
    );
}

export default SuspendedTableRow;