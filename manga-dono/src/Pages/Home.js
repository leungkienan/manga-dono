import React, { useContext, useEffect, useState } from 'react'
import { SearchContext } from '../Context/search'
import { FormControl, Input, IconButton, Grid } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const Home = () => {
  const search = useContext(SearchContext)
  const [input, setInput] = useState('')
  const handleSearch = (event) => {
    event.preventDefault()
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
        <Grid item>
          <img
            alt="x-wing"
            src={`${process.env.PUBLIC.URL}/${/xwing.png}`} 
            height={500}
            width={auto}
          />
        </Grid>
        <Grid item>
          <form>
            <FormControl type="submit">
              {/* <Input
                placeholder="Search for Manga"
                value={input}
                onChange={event.target.value}
              /> */}
              <IconButton
                variant="contained"
                color="primary"
                type="submit"
                disabled={!input}
                onClick={handleSearch}
              >
                <SearchIcon />
              </IconButton>
            </FormControl>
          </form>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Home
