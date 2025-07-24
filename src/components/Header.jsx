
const Header = () => {
  return (
  <div className="h-[34vw] my-[30px] bg-contain bg-[url('/header_img.png')] bg-no-repeat relative">
        <div className="absolute flex flex-col items-start max-w-[50%] gap-[1.5vw] bottom-[10%] left-[6vw] animation">
                <h2 className="font-medium text-white text-[4.4vw]">Order your favourite food here</h2>
                <p className="text-white font-[1vw] ">Choose from a diverce menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertises . our delicious meal at a time </p>
                <button className="border-none font-medium text-[1.1vw] text-[#747474]  bg-white rounded-[50px] px-4.5 py-2.5">View Menu</button>
        </div>
    </div>
  )
}

export default Header
