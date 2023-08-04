import Image from 'next/image'
import React, { useState } from 'react'
import closeicon from '../../../public/assets/svgs/close icon.svg'

import searchicon from '../../../public/assets/svgs/search.svg'


const SearchBarMobile = ({setOpenSearch,openSearch}) => {
  const [searchMobile, setSearchMobile] = useState('')
  
  const submitSearch = (search) => console.log(search);

  const close = () => {
    setOpenSearch(false)
    setSearchMobile('')
  }


   
  




  return (
    <div className={`${openSearch ? 'block' : 'hidden'} lg:hidden px-4 flex gap-4`}>
      <div className='h-10 w-full  flex px-5 py-2 bg-[#F2F2F2] rounded-sm'>
        <input className='w-full bg-inherit h-full outline-none' value={searchMobile} onChange={e => setSearchMobile(e.target.value)} placeholder='search . . .'/>
        <Image src={searchicon} width={15} alt='search' onClick={submitSearch(searchMobile)} />     
      </div>
      <Image src={closeicon} width={15} onClick={close} alt="search" />
     </div>
  )
}

export default SearchBarMobile