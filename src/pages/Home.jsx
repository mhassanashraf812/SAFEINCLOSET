import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import CategoryCollection from '../components/CategoryCollection'

const Home = () => {
  return (
    <div className='w-full'>
      <CategoryCollection
        title="Summer"
        filter="Summer"
        filterField="collection"
        bannerDesktop="/banners/summer-desktop.jpg"
        bannerMobile="/banners/summer-mobile.jpg"
        noTopMargin
      />
      <CategoryCollection
        title="Cord Set"
        filter="Cord Set"
        filterField="collection"
        bannerDesktop="/banners/cordset-desktop.jpg"
        bannerMobile="/banners/cordset-mobile.jpg"
      />
     
        <CategoryCollection
        title="casual"
        filter="casual"
        filterField="collection"
        bannerDesktop="/banners/casual-desktop.jpg"
        bannerMobile="/banners/casual-mobile.jpg"
        noTopMargin
      />
       <CategoryCollection
        title="ThreePiece"
        filter="ThreePiece"
        filterField="collection"
        bannerDesktop="/banners/3piece-desktop.jpg"
        bannerMobile="/banners/3piece-mobile.jpg"
      />
      {/* <Hero /> */}
       {/* <LatestCollection/> */}
      {/* <BestSeller/> */}
      <OurPolicy/>
      {/* <CategoryCollection title="2 Piece" filter="2 Piece" filterField="category" /> */}
      {/* <NewsletterBox/> */}
    </div>
  )
}

export default Home
