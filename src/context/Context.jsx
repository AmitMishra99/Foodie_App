import { createContext, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [ cartIteams , setCartIteams ] = useState({});

    const addToCart = (itemID) =>{
      if(!cartIteams[itemID]){
        setCartIteams((prev) => ({...prev , [itemID]:1}));
      }
      else {
        setCartIteams((prev) => ({...prev , [itemID]:prev[itemID]+1}));
      }
    }

    const removeFromCart = (itemID) => {
        setCartIteams((prev) => ({...prev , [itemID]:prev[itemID]-1}));
    }

        const contextValue = {
                food_list,
                cartIteams,
                setCartIteams,
                addToCart,
                removeFromCart
        }

  return (
    <StoreContext.Provider value={contextValue}>
        {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider;
