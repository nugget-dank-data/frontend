import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='bg-[#1f1a1aec] h-full flex flex-col justify-center items-center'>
       <p className='text-[#666464]'> &copy;2022 NUGGET. ALL RIGHTS RESERVED. </p>
       <div className='justify-between align-middle text-white font-serif'>
       <a href="privacy_policy" className='mr-3'>Privacy Policy</a>
       <a href="terms_of_use" className='ml-3'>Terms Of Use</a>
       </div>
    </div>
    </>
  )
}

export default Footer;