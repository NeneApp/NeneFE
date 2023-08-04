import Image from 'next/image'
import React from 'react'
import arrowdownup from '../../../public/assets/svgs/ArrowsDownUp.svg'


const Tablehead = ({tableData, setTableData}) => {

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
        <tr className='text-xs font-bold text-[#757575] border-b '>
          <th className='text-left py-5 px-8'>
            <div>
              <input type="checkbox" className='outline-none' />
            </div>
          </th>
          <th className='text-left py-5 px-8'>
            <div className='flex gap-2 min-w-[70px]' >
              <p>DATE</p>
              <Image src={arrowdownup} width={15} onClick={e => sortDate(tableData)} alt="sort icon" />
            </div>
          </th>
          <th className='text-left py-5 px-8'>
            <div className='flex gap-2'>
              <p>CUSTOMER NAME</p>
              <Image src={arrowdownup} width={15} onClick={e => sortName(tableData)} alt="sort icon" />
            </div>
          </th>
          <th className='text-left py-5 px-8'>
            <div>
              <p>SHIPPING STATUS</p>
            </div>
          </th>
          <th className='text-left py-5 px-8'>
            <div>
              <p>PAYMENT STATUS</p>
            </div>
          </th>
          <th className='text-left py-5 px-8'>
            <div className='flex gap-2'>
              <p>ORDER TOTAL<span>($)</span></p>
              <Image src={arrowdownup} width={15} onClick={e => sortPrice(tableData)} alt="sort icon" />
            </div>
          </th>
        </tr>
      </thead>
    </>
  )
}

export default Tablehead