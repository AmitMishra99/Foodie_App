import { assets } from "../assets/frontend_assets/assets"


const Footer = () => {
  return (
    <div className=' mt-[20px] text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-[20px] py-[20px] px-[8vw] pt-[80px]'>
      <div className="w-[100%] grid grid-cols-[2fr_1fr_1fr] gap-[80px]">
        <div className="footer">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi culpa temporibus impedit magni alias deleniti! Velit facere id dolorum sit placeat repellendus odio.</p>
                <div className="flex gap-[20px] cursor-pointer">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
                </div>
        </div>
        <div className="footer">
                <h2 className="text-[25px]">COMPANY</h2>
                <div>
                        <h2>Home</h2>
                        <h2>About us</h2>
                        <h2>Delivary</h2>
                        <h2>Privacy policy</h2>
                </div>
        </div>
        <div className="footer">
                <h2 className="text-[25px]" >GET IN TOUCH</h2>
                <ul>
                        <li>+1-212-456-7890</li>
                        <li>contact@foodie.com</li>
                </ul>
        </div>
      </div>
      <hr className="w-full h-[2px] my-[20px]"/>
      <p className="mb-2.5">Copyright 2024 @ Tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
