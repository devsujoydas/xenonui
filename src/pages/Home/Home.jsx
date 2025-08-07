import React from 'react'
import Hero from './Hero'
import ExploreWorlds from './ExploreWorlds'
import TakeTailwind from './TakeTailwind'
import DesignSystem from './DesignSystem'
import LovedByCommunity from './LovedByCommunity'

const Home = () => {
  return (
    <div className=' min-h-screen  '>
      <Hero />
      <ExploreWorlds />
      <LovedByCommunity />
    </div>
  )
}

export default Home   