import React, { useContext, useEffect, useState } from 'react'
import { SearchContext } from '../Context/search'
import { FormControl, Input, IconButton, Grid } from '@mui/material'

const Home = () => {
  //   const search = useContext(SearchContext)
  //   useEffect(() => {
  //     search.search('naruto').then((data) => {
  //       console.log(data)
  //     })
  //   }, [search])

  const [searchInput, setSearchInput] = useState('')
  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
    console.log(searchValue)
  }

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignContent="center"
      alignItems="center"
    >
      <Grid item>
        <Input
          icon="search"
          placeholder="Search..."
          onChange={(e) => searchItems(e.target.value)}
        />
        <Grid item>Image</Grid>
        <Grid item>SearchBar</Grid>
      </Grid>
    </Grid>
  )
}

export default Home
