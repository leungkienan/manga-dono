import React from 'react'

const SET_MANGA = 'SET_MANGA'

export class App extends React.Component {
  state = {
    manga: [],
  }

  componentDidMount() {
    this.props.dispatch(SET_MANGA)
  }

  render() {
    ;<main>
      <div className="manga-list">
        {this.props.mangaList.map((manga) => (
          <MangaCard manga={manga} key={manga.mal_id} />
        ))}
      </div>
    </main>
  }
}

function mapStateToProps(globalState) {
  return {
    manga: globalState.manga,
  }
}

export default connect(mapStateToProps)(App)
