import React from 'react'


function TableRow({currentItems}) {  

  return (
    <>
      <tbody>
      {currentItems && currentItems.map((cell, i) => (
        <tr className='text-sm font-normal hover:bg-[#F6F6F6]' key={i}>
          <td className='py-8 px-8  '>{cell.id}</td>
          <td className='py-8 px-8 '>{cell.date}</td>
          <td className='py-8 px-8 '>{cell.name}</td>
          <td className='py-8 px-8 font-semibold text-[#0D0D0D]'><span className='bg-[#F6F6F6] py-1 px-3 hover:bg-white'>{cell.shipping}</span></td>
          <td className='py-8 px-8 font-semibold text-[#0D0D0D]'><span className='bg-[#F6F6F6] py-1 px-3 hover:bg-white'>{cell.payment}</span></td>
          <td className='py-8 px-8 '>{cell.total}</td>
        </tr>
      ))}
      </tbody>
    </>
  )
}


export default TableRow