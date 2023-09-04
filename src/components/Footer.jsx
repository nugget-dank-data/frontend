import React from 'react'
// import { Link } from 'react-router-dom';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
    <div className='bg-[#232529] h-full flex flex-col justify-center items-center w-full'>
       <p className='text-[#666464]'> &copy;2022 NUGGET. ALL RIGHTS RESERVED. </p>
       <div className='justify-between align-middle text-white font-serif'>
       <Link href="privacy_policy" className='mr-3'>Privacy Policy</Link>
       <Link href="terms_of_use" className='ml-3'>Terms Of Use</Link>
       </div>
    </div>
    </>
  )
}

export default Footer;