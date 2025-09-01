import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const AppDownlaod = () => {
  return (
    <div className='flex flex-col font-[500]  m-[80px]'>
      <p className='text-[60px] text-center mb-[10px] m-2'>For Better Experience Download <br /> Foodie App</p>
      <div className='flex justify-center mb-[30px] gap-2.5 '>
        <img className='cursor-pointer' src={assets.play_store} alt="" />
        <img className='cursor-pointer' src={assets.app_store} alt="" />
      </div>
    </div>
  )
}

export default AppDownlaod
