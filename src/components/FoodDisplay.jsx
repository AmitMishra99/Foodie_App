import { useContext, useState } from "react"
import { StoreContext } from "../context/Context"
import FoodItem from "./FoodItem";

const FoodDisplay = () => {


  // useEffect(()=>{
  //   console.log("useEffect get rendered")
  // }, [])
  // console.log("Body Rendered First then")
 
  const {food_list} = useContext(StoreContext);
  const [list , setList] = useState(food_list);
  const [search , setSearch] = useState("");

  return (
    <div className="mt-[30px] p-2 ">
      <div className="flex items-center justify-between mb-[50px]">
        <div>
          <input placeholder="Enter your favourite dish 😋" className=" border-1 p-3 w-[400px] rounded-[50px] mr-[10px]" type="text" name="" id="" value={search} onChange={(e)=> setSearch(e.target.value)}/>
          <button onClick={()=>{
            setList(food_list.filter((dish)=> dish.name.toLowerCase().includes(search.toLowerCase())));
            console.log(setList)
          }}
         className=" border-1 bg-amber-200 p-3 rounded-[50px]">Search</button>
        </div>
        <button onClick={()=>{
          food_list.map(()=>{
          })

        }}
        className="p-3 bg-[#e7dcdc] text-[20px] text-[#262626] rounded-[50px] border-1">High to Low</button>
      <button onClick={()=>{
          setList(list.filter((dish)=>  dish.price < 15))
      }} 
      className="p-3 bg-[#e7dcdc] text-[20px] text-[#262626] rounded-[50px] border-1">Top rated dishes  </button>
      </div>
      <div className="grid grid-cols-3 mt-[30px] gap-x-[60px] gap-y-[60px] ">
        {list.map((item , idx)=>{
                return <FoodItem 
                key={idx} 
                id={item.id} 
                name={item.name} 
                description={item.description} 
                price={item.price}  
                image={item.image}  />
        })}
      </div>
    </div>
  )
}

export default FoodDisplay
