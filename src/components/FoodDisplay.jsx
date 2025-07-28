import { useContext } from "react"
import { StoreContext } from "../context/Context"
import FoodItem from "./FoodItem";

const FoodDisplay = ({category}) => {

  const {food_list} = useContext(StoreContext);

  return (
    <div className="mt-[30px]">
      <h2 className="font-medium text-3xl text-[#262626]">Top Dishes near You </h2>
      <div className="grid grid-cols-3 mt-[30px] gap-x-[60px] gap-y-[60px] ">
        {food_list.map((item , idx)=>{
                return <FoodItem key={idx} id={item.id} name={item.name} description={item.description} price={item.price}  image={item.image}  />
        })}
      </div>
    </div>
  )
}

export default FoodDisplay
