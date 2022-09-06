import React from 'react'
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

function App() {
  return (
    <Router>
      <MainNav>
        <main>
          <Routes>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/results" exact>
              <Results />
            </Route>
            <Route path="/view" exact>
              <View />
            </Route>
            <Navigate to="/" />
          </Routes>
        </main>
      </MainNav>
    </Router>
  )
}

export default App
