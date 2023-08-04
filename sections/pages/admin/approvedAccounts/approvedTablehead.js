import Image from 'next/image'
import React from 'react'
import arrowdownup from '../../../../public/assets/svgs/ArrowsDownUp.svg'



const ApprovedTablehead = ({tableData, setTableData}) => {

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
      <thead>
        <tr className='text-xs sm:text-sm font-bold text-[#757575] border-b '>
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
              <p>EMAIL ADDRESS</p>
            </div>
          </th>
          <th className='text-left py-5 px-4'>
            <div>
              <p>GLAMOUR AND LUXURY</p>
            </div>
          </th>
          <th className='text-left py-5 px-4'>
            <div className='flex gap-2'>
              <p>DATE CREATED</p>
              <Image src={arrowdownup} width={15} onClick={e => sortPrice(tableData)} alt='sort by date' />
            </div>
          </th>
          <th className='text-left py-5 px-4'>
            <div className='flex gap-2'>
              <p>NUMBER OF FULFILLED ORDERS</p>
              <Image src={arrowdownup} width={15} onClick={e => sortPrice(tableData)} alt='sort by orders' />
            </div>
          </th>
          <th className='text-left py-5 px-4'>
            <div className='flex gap-2'>
              <p>NUMBER OF FAILED ORDERS</p>
              <Image src={arrowdownup} width={15} onClick={e => sortPrice(tableData)} />
            </div>
          </th>
        </tr>
      </thead>
    </>
  )
}

export default ApprovedTablehead