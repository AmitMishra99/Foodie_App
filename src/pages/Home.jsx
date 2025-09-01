import AppDownlaod from "../components/AppDownlaod";
import ExploreMenu from "../components/ExploreMenu";
import FoodDisplay from "../components/FoodDisplay";
import Header from "../components/Header"
import { useState } from "react"

const Home = () => {

  const [category , setCategory ] = useState("All");

  return (
    <div className="home" >
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownlaod/>
    </div>
  )
}

export default Home
