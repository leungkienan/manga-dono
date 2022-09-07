import { useState, useEffect } from 'react'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import MainContent from './Components/MainContent'

function App() {
  const [mangaList, SetMangaList] = useState([])
  const [topManga, SetTopManga] = useState([])
  const [search, SetSearch] = useState('')

  const GetTopManga = async () => {
    const temp = await fetch(`https://api.jikan.moe/v4/top/manga`).then((res) =>
      res.json()
    )

    SetTopManga(temp.top.slice(0, 5))
  }

  const HandleSearch = (e) => {
    e.preventDefault()

    FetchManga(search)
  }

  const FetchManga = async (query) => {
    const temp = await fetch(
      // `https://api.jikan.moe/v4/search/manga?q=${query}&order_by=title&sort=asc&limit=10`
      `https://api.jikan.moe/v4/manga?q=${query}&order_by=title&sort=asc&limit=10`
    ).then((res) => res.json())

    SetMangaList(temp.results)
  }

  useEffect(() => {
    GetTopManga()
  }, [])

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
