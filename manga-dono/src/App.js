import { useState, useEffect } from 'react'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import MainContent from './Components/MainContent'

function App() {
  const [mangaList, SetMangaList] = useState([])
  const [topManga, SetTopManga] = useState([])
  const [search, SetSearch] = useState('')

  const GetTopManga = async () => {
    const temp = await fetch(
      `https://api.jikan.moe/v4/top/manga`
    ).then((res) => res.json())
      SetTopManga(temp.data.slice(0, 5))

  }

  const HandleSearch = (e) => {
    e.preventDefault()
    FetchManga(search)
  }

  const FetchManga = async (search) => {
    const temp = await fetch(
      `https://api.jikan.moe/v4/manga?q=${search}&order_by=${search.value}&sort=asc&limit=10`
      // `https://api.jikan.moe/v4/manga?q=${search}&order_by=title&sort=asc&limit=50`
    )
    const tempData = await temp.json() 
    SetMangaList(tempData.data)
    }

  useEffect(() => {
    GetTopManga()
  }, [search])

  return (
    <div className="App">
      <Header />
      <div className="content-wrap">
        <Sidebar topManga={topManga} />
        <MainContent
          HandleSearch={HandleSearch}
          search={search}
          SetSearch={SetSearch}
          mangaList={mangaList}
        />
      </div>
    </div>
  )
}

export default App
