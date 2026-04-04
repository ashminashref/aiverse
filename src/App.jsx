import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import { ExpandableCardDemo } from './UI/Card'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* This slug will be 'art', 'code', 'automation', etc. */}
      <Route path="/categories/:slug" element={<ExpandableCardDemo />} />
    </Routes>
  )
}

export default App