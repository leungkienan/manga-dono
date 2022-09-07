import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import Home from './Pages/Home'
import Results from './Pages/Results'
import View from './Pages/View'
import MainNav from './Components/MainNav'
import { SearchContext } from './Context/search'
import Search from '@mui/icons-material/Search'

function App() {
  const [mangaData, setMangaData] = useState([])
  const [singleData, setSingleData] = useState({})

  const setData = (data) => {
    setMangaData(data)
  }

  const setSingle = (data) => {
    setSingleData(data)
  }

  const search = (searchTerm) => {
    return fetch(
      `https://api.jikan.moe/v4/manga?q=${searchTerm}&limit=20`
    ).then((res) => res.json())
  }

  return (
    <SearchContext.Provider
      value={(search, mangaData, setData, singleData, setSingle)}
    >
      <Router>
        <MainNav />
        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/results" element={<Results />}></Route>
            <Route path="/view" element={<View />}></Route>
            {/* <Navigate to="/" replace={true} /> */}
          </Routes>
        </main>
      </Router>
    </SearchContext.Provider>
  )
}

export default App
