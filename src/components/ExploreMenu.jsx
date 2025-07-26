import { menu_list } from "../assets/frontend_assets/assets"

const ExploreMenu = ({category , setCategory }) => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-[#262626] font-medium text-4xl">Explore our menu</h1>
      <p className="max-w-[60%] text-[#808080] ">Choose from a diverce menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dinning experencie, one delicious meal at a a time</p>
      <div className="flex gap-[30px] text-center my-[20px]  overflow-x-scroll scrollbar-hide"> 
        {menu_list.map((item , idx)=>{
                return (
                        <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}  key={idx} className="shrink-0">
                                <img className={`cursor-pointer rounded-[50%] object-cover h-[8.4vw] ${category === item.menu_name ? "border-4 border-[tomato] p-[2px]" : ""}`} src={item.menu_image} alt="" />
                                <p className="mt-2.5  text-[#747474] text-[1.4vw]  ">{item.menu_name}</p>
                        </div>
                 )
        })}
      </div>
      <hr className="bg-[#e2e2e2] border-none my-[10px] h-0.5 " />

    </div>
  )
}

export default ExploreMenu
