import React from 'react'
import Records from './component/records/Records'
import Search from './component/search/Search'
import Filter from './component/filter/Filter'
import './App.scss'

const App = () => {
  return (
    <div  className="app">
      <Search />
      <Filter />
      <Records />
    </div>
  )
}

export default App


