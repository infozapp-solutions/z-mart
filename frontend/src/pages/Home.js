import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>

      <HorizontalCardProduct category={"rice"} heading={"Rice"}/>
      <HorizontalCardProduct category={"lentils_grains"} heading={"Lentils & Grains"}/>

      <VerticalCardProduct category={"millets"} heading={"Millets"}/>
      <VerticalCardProduct category={"spices_masala"} heading={"Spices & Masala"}/>
      <VerticalCardProduct category={"flours"} heading={"Flours"}/>
      <VerticalCardProduct category={"oil_ghee"} heading={"Oil & Ghee"}/>
      <VerticalCardProduct category={"fryums"} heading={"Fryums"}/>
      <VerticalCardProduct category={"ready_to_eat"} heading={"Ready to eat"}/>
      <VerticalCardProduct category={"sweets_savoury"} heading={"Sweets & Savoury"}/>
      <VerticalCardProduct category={"home_fragrance"} heading={"Home fragrance"}/>
    </div>
  )
}

export default Home