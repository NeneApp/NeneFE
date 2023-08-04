import React, { useEffect, useState } from 'react'
// import Mobiletable from './mobiletable'
import PaginateTable, { list } from './pagination'
// import PaginateTable from './pagination'
// import Tablehead from './tablehead'
// import Tablerow from './tablerow'

const Table = ({tableHead, tableRows, data, currentItems, setCurrentItems
}) => {
  const [tableData, setTableData] = useState(data)
//   const [currentItems, setCurrentItems] = useState(null);
  


  return (
    <div className='w-full'>
      <div className='overflow-x-auto w-full'>
        <table className='w-full'>
        {/* <Tablehead setTableData={setTableData} tableData={tableData} />
        <Tablerow currentItems={currentItems} /> */}
        {tableHead}
        {tableRows}
        </table>
      </div>
      {/* <div className='px-6 grid grid-cols-1 gap-4 lg:hidden mb-6'>
        <Mobiletable currentItems={currentItems} />
      </div> */}
      <PaginateTable setCurrentItems={setCurrentItems} tableData={tableData} />
    </div>
  )
}

export default Table