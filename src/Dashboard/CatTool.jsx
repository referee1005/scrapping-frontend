import React, { useState, useEffect, useRef } from 'react'
import { TextField, ToggleButton, Grid } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
import GoogleOSINTScraper from './google'
import SearchIcon from '@mui/icons-material/Search'
import IconButton from '@mui/material/IconButton'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormHelperText from '@mui/material/FormHelperText'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { Height } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import querystring from 'querystring'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import { faSlash } from '@fortawesome/free-solid-svg-icons'

export default function CatTool () {
  const [query, setQuery] = useState({ query1: null, query2: null })
  const [count, setCount] = useState(100)
  const [site, setSite] = useState('google_search')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const search = async () => {
    if (
      (site === 'google_search' && !query['query1']) ||
      (site === 'yellow_pages' && (!query['query1'] || !query['query2']))
    )
      alert('Type any search text')
    else {
      if (site === 'google_search') {
        setLoading(true)
        const scraper = new GoogleOSINTScraper(query['query1'], count)
        scraper.scrape().then(res => {
          setLoading(false)
          localStorage.setItem('result', JSON.stringify(res))
          navigate('/search_google')
        })
      } else {
        setLoading(true)
        await axios
          .get(
            'https://83721cb9-83c9-481d-b592-49fb56674fe2-00-1rbmerutcr37g.sisko.replit.dev/scrape?' +
              querystring.stringify({ ...query, count: count }),
            {
              headers: {
                'Content-Type': 'application/json'
              }
            }
          )
          .then(res => {
            setLoading(false)
            console.log(res.data)
            localStorage.setItem(
              'yellow_page',
              JSON.stringify(res.data, null, 2)
            )
            navigate('/yellow_page')
          })
      }
    }
  }

  const handleChange = event => {
    setCount(event.target.value)
  }
  const changeSite = event => {
    setSite(event.target.value)
    setQuery({ query1: null, query2: null })
  }
  return (
    <>
      {loading && (
        <Box
          sx={{
            display: 'flex',
            position: 'absolute',
            width: '100vw',
            height: '100vh',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <CircularProgress />
        </Box>
      )}
      <Grid
        direction={'column'}
        container
        style={{ width: '100vw', height: '100vh', opacity: loading ? 0.4 : 1 }}
      >
        <Grid items>
          <h1>You will scrape any data</h1>
        </Grid>
        <Grid items>
          <FormControl sx={{ m: 1, minWidth: 300 }}>
            <InputLabel id='demo-simple-select-disabled-label'>Site</InputLabel>
            <Select
              labelId='demo-simple-select-disabled-label'
              id='demo-simple-select'
              value={site}
              label='count'
              onChange={changeSite}
            >
              <MenuItem value='google_search'>
                <em>Google Search</em>
              </MenuItem>
              <MenuItem value={'yellow_pages'}>Yellow pages</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid items className='input'>
          <TextField
            label='Type your search text'
            id='outlined-start-adornment fullwidth'
            sx={{ m: 1, width: '20ch' }}
            value={query.query1}
            onChange={e =>
              setQuery({ query2: query.query2, query1: e.target.value })
            }
            InputProps={{
              startAdornment: (
                <IconButton position='start'>
                  <SearchIcon />
                </IconButton>
              )
            }}
            style={{
              width: '50%'
            }}
          />
          {site === 'yellow_pages' && (
            <TextField
              label='Type your search text'
              id='outlined-start-adornment fullwidth'
              sx={{ m: 1, width: '20ch' }}
              value={query.query2}
              onChange={e =>
                setQuery({ query1: query.query1, query2: e.target.value })
              }
              InputProps={{
                startAdornment: (
                  <IconButton position='start'>
                    <SearchIcon />
                  </IconButton>
                )
              }}
              style={{
                width: '50%'
              }}
            />
          )}

          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id='demo-simple-select-disabled-label'>
              Count
            </InputLabel>
            <Select
              labelId='demo-simple-select-disabled-label'
              id='demo-simple-select'
              value={count}
              label='count'
              onChange={handleChange}
            >
              <MenuItem value='No Limit'>
                <em>No Limit</em>
              </MenuItem>
              <MenuItem value={1}>100</MenuItem>
              <MenuItem value={5}>500</MenuItem>
              <MenuItem value={10}>1000</MenuItem>
            </Select>
          </FormControl>
          <ToggleButton value='check' onClick={search}>
            <CheckIcon />
          </ToggleButton>
        </Grid>
      </Grid>
    </>
  )
}
