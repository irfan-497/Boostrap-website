import React from 'react'
import Navbar from './components/Navbar'
import BootstrapCarousel from './components/BootstrapCarousel'
import Cards from './components/Cards'
import Progress from './components/Progress'
import Table from './components/Table'

function App() {
  return (
    <div>
      <Navbar />
      <BootstrapCarousel />
      <Cards />
      <Progress />
      <Table />
    </div>
  )
}

export default App
