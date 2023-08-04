import Image from 'next/image'
import React from 'react'
import arrowdownup from '../../../../public/assets/svgs/ArrowsDownUp.svg'


const DeclinedTablehead = ({tableData, setTableData}) => {

  const sortDate = (tableData) => {
    let newData = [...tableData]
    newData?.sort((a,b) => new Date(a.date) - new Date(b.date))
    setTableData(newData)
  }
  const sortName = (tableData) => {
    let newData = [...tableData]
    newData?.sort((a,b) => a.name > b.name ? 1 : -1)
    setTableData(newData)
  }
  const sortPrice = (tableData) => {
    let newData = [...tableData]
    newData?.sort((a,b) => a.total - b.total)
    setTableData(newData)
  }

  
  return (
    <>
      <thead className='w-full'>
        <tr className='text-xs sm:text-sm font-bold text-[#757575] border-b w-full'>
          <th className='text-left py-5 px-4'>
            <div>
              <input type="checkbox" className='outline-none' />
            </div>
          </th>
          <th className='text-left py-5 px-4'>
            <div className='flex gap-2 min-w-[70px]' >
              <p>NAME</p>
            </div>
          </th>
          <th className='text-left py-5 px-4'>
            <div>
              <p>BUSINESS NAME</p>
            </div>
          </th>
          <th className='text-left py-5 px-4'>
            <div>
              <p>EMAIL ADDRESS</p>
            </div>
          </th>
          
          <th className='text-left py-5 px-4'>
            <div className='flex gap-2'>
              <p>DATE APPLIED</p>
              <Image src={arrowdownup} width={15} onClick={e => sortPrice(tableData)} alt="sort by date" />
            </div>
          </th>
        </tr>
      </thead>
    </>
  )
}

export default DeclinedTablehead