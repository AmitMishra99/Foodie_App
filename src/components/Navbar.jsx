import { useState } from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Navbar = () => {

    const [menu , setMenu] = useState("Menu")

  return (
    <div className=' py-4 flex items-center justify-between '>
      <img className='w-37.5' src={assets.logo} alt="logo" />
      <ul className='flex list-none gap-12 text-[#49557e] text-[18px]'>
        <li onClick={()=>setMenu("Home")} className={menu=="Home"?"active":""}>Home </li>
        <li onClick={()=>setMenu("Menu")} className={menu=="Menu"?"active":""}>Menu </li>
        <li onClick={()=>setMenu("Mobile-App")} className={menu=="Mobile-App"?"active":""}>Mobile-App </li>
        <li onClick={()=>setMenu("Contact Us")} className={menu=="Contact Us"?"active":""}>Contact Us</li>
      </ul>
      <div className="flex items-center gap-10">
        <img src={assets.search_icon} alt="search_icon" />
        <div className="relative">
                <img src={assets.basket_icon} alt="" />
                <div className=" absolute min-h-[10px] min-w-[10px] bg-[tomato] rounded-[5px] -top-[8px] -right-[8px]"></div>
        </div>
        <button className='cursor-pointer bg-transparent text-[18px] text-[#49557e] border py-2.5 px-[30px] rounded-[50px] transition-[0.3s]  hover:bg-[#fff4f2] '>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar
