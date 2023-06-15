import React from 'react'
import close from '../../images/close.svg'
import Image from 'next/image'

const Newcompset = ({handleAddCompset, setCompsetName}) => {
  return (
    <div className='rounded-xl bg-white'>
        <div className="top">
            <Image src={close} alt='cc' />

        </div>

        <div className="heading">
            <h1>Create New Comp Set</h1>
        </div>

        <div className="form">
            <form action="" method="post">
                <label htmlFor="text" className='text-bold'>Compset Name (Optional)</label>
                <input type="text" placeholder='Name your compset' />
                <label htmlFor="text" className='text-bold'>Your shop</label>
                <input type="text" placeholder='search main stores' />
                <div className="stores">
                <label htmlFor="text" className='text-bold'>Competitive Stores</label>
                <input type="text" placeholder='Name your compset' />
                </div>
            </form>
        </div>

    </div>
  )
}

export default Newcompset