import React, { useState } from 'react'
import { assets } from '../assets/frontend_assets/assets'

const FoodItem = ({id,name,price,description,image}) => {

        const [itemCount , setItemCount] = useState(0);

  return (
    <div key={id} className='box-shadow rounded-[15px] transition-[0.3s] animation2'>
        <div className='relative'>
                <img className='overflow-hidden object-cover w-full rounded-[15px] rounded-top-custom' src={image} alt="" />
                {!itemCount? 
                <img className='absolute bottom-[15px] right-[15px] cursor-pointer' onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_white} />:
                <div className='absolute bottom-[15px] right-[15px] cursor-pointer flex justify-center items-center gap-[10px] p-[6px] bg-white rounded-[50px]'>
                        <img className='w-[32px]' src={assets.remove_icon_red}  onClick={()=>setItemCount(prev=>prev-1)} />
                        <p >{itemCount}</p>
                        <img className='w-[32px]' src={assets.add_icon_green} onClick={()=>setItemCount(prev=>prev+1)} />
                </div>
                }
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
