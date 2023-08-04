import Image from "next/image";

function SuspendedTablehead() {
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
          
        </tr>
      </thead>
    </>
    );
}

export default SuspendedTablehead;