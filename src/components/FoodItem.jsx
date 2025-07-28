import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const FoodItem = ({id,name,price,description,image}) => {
  return (
    <div className='box-shadow rounded-[15px] transition-[0.3s] animation2'>
        <div>
                <img className='overflow-hidden object-cover w-full rounded-[15px] rounded-top-custom' src={image} alt="" />
        </div>
        <div className='p-[20px]'>
                <div className='flex items-center justify-between mb-[10px]'>
                        <p className='text-[22px] font-medium'>{name}</p>
                        <img className='w-[80px]' src={assets.rating_starts} alt="" />
                </div>
                <p className='text-[#676767] text-[15px] leading-5'>{description}</p>
                <p className='text-[tomato] text-[22px] mt-4'>${price}</p>
        </div>
    </div>
  )
}

export default FoodItem
