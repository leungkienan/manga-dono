import { useState, useEffect } from 'react'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import MainContent from './Components/MainContent'

function App() {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    if(theme==="light"){
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const [mangaList, SetMangaList] = useState([])
  const [topManga, SetTopManga] = useState([])
  const [search, SetSearch] = useState('')

  const GetTopManga = async () => {
    const temp = await fetch(`https://api.jikan.moe/v4/top/manga?limit=10`)
    const mangaData = await temp.json()
    SetTopManga(mangaData.data.slice(0, 10))
  }

  const HandleSearch = (e) => {
    e.preventDefault()
    FetchManga(search)
  }

  const FetchManga = async (search) => {
    const temp = await fetch(
      `https://api.jikan.moe/v4/manga?q=${search}&sfw&limit=99`)
    const tempData = await temp.json()
    SetMangaList(tempData.data)
    console.log(tempData)
  }

  useEffect(() => {
    GetTopManga()
  }, [])

  return (
    <div className="App">
      <div className={`App${theme}`}>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
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
