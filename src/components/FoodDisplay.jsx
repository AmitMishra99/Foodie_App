import { useEffect, useState } from "react";
import FoodItem from "./FoodItem";

const FoodDisplay = () => {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(()=>{
      async function fetchData() {
        const response = await fetch("https://dummyjson.com/recipes?limit=100");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setList(data.recipes)
    }
    fetchData()
   
  },[])
  

  return (
    <div className="mt-[30px] p-2 ">
      <div className="flex items-center justify-between mb-[50px]">

        <div>
          <input
            placeholder="Enter your favourite dish 😋"
            className=" border-1 p-3 w-[400px] rounded-[50px] mr-[10px]"
            type="text"
            name=""
            id=""
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={() => {
              setList(
                list.filter((item) =>
                  item.name.toLowerCase().includes(search.toLowerCase())
                )
              );
            }}
            className=" border-1 bg-amber-200 p-3 rounded-[50px]"
          >
            Search
          </button>
        </div> 

        <button
          onClick={() => {
            setList(list.filter((item) => item.cookTimeMinutes < 15));
          }}
          className="p-3 bg-[#e7dcdc] text-[20px] text-[#262626] rounded-[50px] border-1"
        >
          Top rated dishes{" "}
        </button>

      </div>
      <div className="grid grid-cols-3 mt-[30px] gap-x-[60px] gap-y-[60px] ">
        {list.map((item) => {
            return (
            <FoodItem
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.instructions[4]}
              price={item.cookTimeMinutes}
              image={item.image}
            />
          );          
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
