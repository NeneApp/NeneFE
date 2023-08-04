import Button from "@/components/button/button";
import { useState } from "react";
import closeIcon from "../../../public/assets/svgs/close icon.svg";
import insta from "../../../public/assets/svgs/lke.png";
import Image from "next/image";


function Modal({ body, title, isModalOpen, setIsModalOpen, confirmBtnText, cancelBtnText }) {
    return (  
        <div className={`${isModalOpen ? "block" : "hidden"}`}>
            <div className='w-[90%] sm:w-4/5 md:3/5 lg:w-2/5 opacity-100 bg-white z-[100] fixed top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] px-8 py-6 flex flex-col justify-between mx-auto'>
                <div className='flex items-center justify-between mb-5'>
                    <span className='text-2xl font-medium'>{title}</span>

                    <button className='p-1 cursor-pointer' onClick={() => setIsModalOpen(!isModalOpen)}>
                        <Image src={closeIcon} alt="close button" height={25} width={25} />
                    </button>
                </div>

                <div>
                    { body }
                </div>

                <div className='flex flex-col sm:flex-row justify-between mb-0'>
                    <button className='px-8 py-[10px] border border-black rounded font-medium max-sm:w-full max-sm:mb-3'>{confirmBtnText}</button>

                    <button className='px-8 py-[10px] border border-black bg-black rounded text-white max-sm:w-full' onClick={() => setIsModalOpen(false)}>{cancelBtnText}</button>
                </div>
            </div>
            <div className='fixed top-0 left-0 w-screen h-screen bg-black opacity-50 z-50'></div>
        </div>
    );
}

export default Modal;