import React from 'react'

import Slider from '../../Components/Slider/Slider'
import BlogGrid from '../../Components/BlogGrid/BlogGrid'
import Check from '../../Components/Check/Check'
import Testmonial from '../../Components/Testmonial/Testmonial'
import LibraryPage from '../LibraryPage/LibraryPage'
import Plancomparison from '../../Components/Plancomparsion/Plancomparsion'
import JobListingsPage from '../JobListingsPage/JobListingsPage'

const Home = () => {
  return (
    <>
      <Slider />
      <Check />
      <Plancomparison />
      <BlogGrid />
      <Testmonial />
      <LibraryPage />
      <JobListingsPage />
    </>
  )
}

export default Home
