import { useState } from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Navbar = () => {

    const [menu , setMenu] = useState("Menu")

  return (
    <div className=' py-6 flex items-center justify-between '>
      <img className='w-37.5' src={assets.logo} alt="logo" />
      <ul className='flex list-none gap-12 text-[#49557e] text-[18px]'>
        <li onClick={()=>setMenu("Home")} className={menu=="Home"?"pb-0.5 border-b-2 border-b-[#49557e]":""}>Home </li>
        <li onClick={()=>setMenu("Menu")} className={menu=="Menu"?"pb-0.5 border-b-2 border-b-[#49557e]":""}>Menu </li>
        <li onClick={()=>setMenu("Mobile-App")} className={menu=="Mobile-App"?"pb-0.5 border-b-2 border-b-[#49557e]":""}>Mobile-App </li>
        <li onClick={()=>setMenu("Contact Us")} className={menu=="Contact Us"?"pb-0.5 border-b-2 border-b-[#49557e]":""}>Contact Us</li>
      </ul>
      <div className="flex items-center gap-10">
        <img src={assets.search_icon} alt="search_icon" />
        <div className="navbar-search-icon">
                <img src={assets.basket_icon} alt="" />
                <div className="dot"></div>
        </div>
        <button className='cursor-pointer bg-transparent text-[18px] text-[#49557e] border py-2.5 px-[30px] rounded-[50px] transition-[0.3s] hover:bg-[#fff4f2] '>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar
