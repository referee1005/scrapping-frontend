import React from 'react'
import { Box, Typography } from '@mui/material'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { TextField } from '@mui/material'
import Button from '@mui/material/Button'
import SearchIcon from '@mui/icons-material/Search'
import { InputBase, IconButton } from '@mui/material'
import Divider from '@mui/material/Divider'
import InputAdornment from '@mui/material/InputAdornment'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import { FormControl, MenuItem, FormGroup, Select } from '@mui/material'
import { withStyles, makeStyles } from '@mui/styles'

const CustomSelect = withStyles({
  root: {
    '& .MuiSelect-select': {
      height: '20px !important', // Set the desired height here
      minHeight: 20
    }
  }
})(Select)
const useStyles = makeStyles({
  customInput: {
    height: '20px !important', // Adjust the height as needed
    padding: 3
  }
})
const Glossary = () => {
  const [isterm, setIsterm] = React.useState(false)
  const [isMore, setMore] = React.useState(false)
  const classes = useStyles()

  const addTerm = () => {
    setIsterm(true)
  }
  const cancelTerm = () => {
    setIsterm(false)
  }
  const clickMore = () => {
    setMore(!isMore)
  }

  return (
    <>
      <Grid container xs={24} sx={{ padding: '4px ', marginBottom: '10px' }}>
        <Grid item xs={8}>
          <Paper
            component='form'
            sx={{
              p: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              width: 400
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder='Search term'
              inputProps={{ 'aria-label': 'search term' }}
              startAdornment={
                <InputAdornment position='start'>
                  <SearchIcon />
                </InputAdornment>
              }
            />
            <IconButton type='button' sx={{ p: '10px' }} aria-label='search'>
              <SearchIcon />
            </IconButton>
          </Paper>
        </Grid>
        <Grid item xs={4} justifyContent={''}>
          <Button
            variant='contained'
            style={{
              background: '#09c',
              textTransform: 'none',
              float: 'right'
            }}
          >
            + Add Term
          </Button>
        </Grid>
      </Grid>
      <Divider style={{ marginTop: '1rem', marginBottom: '1rem' }} />

      {!isterm && (
        <div style={{ textAlign: 'center' }}>
          <div>No glossary available</div>
          <div>
            <Button
              variant='contained'
              style={{ background: '#09c', textTransform: 'none' }}
              onClick={addTerm}
            >
              + Click here to create one
            </Button>
          </div>
        </div>
      )}

      {isterm && (
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <FormGroup className='form_group'>
                <Typography variant='body1' gutterBottom>
                  Definition
                </Typography>
                <TextField
                  id='project-name'
                  InputProps={{
                    classes: {
                      input: `${classes.customInput} !important`
                    }
                  }}
                  fullWidth
                  required
                />
              </FormGroup>
            </Grid>
            <Grid item xs={2}>
              <FormGroup className='form_group'>
                <Typography variant='body1' gutterBottom>
                  Glossary*
                </Typography>
                <FormControl fullWidth variant='outlined'>
                  <CustomSelect
                    id='tm-glossary'
                    value=''
                    required
                    input={<InputBase />}
                  >
                    <MenuItem value=''>Select TM & Glossary</MenuItem>
                    <MenuItem value='tm1'>TM 1</MenuItem>
                    <MenuItem value='tm2'>TM 2</MenuItem>
                  </CustomSelect>
                </FormControl>
              </FormGroup>
            </Grid>
            <Grid item xs={2}>
              <FormGroup className='form_group'>
                <Typography variant='body1' gutterBottom>
                  Domain*
                </Typography>
                <FormControl fullWidth variant='outlined'>
                  <CustomSelect id='tm-glossary' value='' required>
                    <MenuItem value=''>Select TM & Glossary</MenuItem>
                    <MenuItem value='tm1'>TM 1</MenuItem>
                    <MenuItem value='tm2'>TM 2</MenuItem>
                  </CustomSelect>
                </FormControl>
              </FormGroup>
            </Grid>
            <Grid item xs={2}>
              <FormGroup className='form_group'>
                <Typography variant='body1' gutterBottom>
                  Subdomain*
                </Typography>
                <FormControl fullWidth variant='outlined'>
                  <CustomSelect id='tm-glossary' value='' required>
                    <MenuItem value=''>Select TM & Glossary</MenuItem>
                    <MenuItem value='tm1'>TM 1</MenuItem>
                    <MenuItem value='tm2'>TM 2</MenuItem>
                    {/* Add more MenuItem components as needed */}
                  </CustomSelect>
                </FormControl>
              </FormGroup>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <FormGroup className='form_group'>
                <Typography variant='body1' gutterBottom>
                  Original term*
                </Typography>
                <TextField
                  id='project-name'
                  variant='outlined'
                  fullWidth
                  required
                  InputProps={{
                    classes: {
                      input: `${classes.customInput} !important`
                    }
                  }}
                />
              </FormGroup>
            </Grid>
            <Grid item xs={6}>
              <FormGroup className='form_group'>
                <Typography variant='body1' gutterBottom>
                  Translated term*
                </Typography>
                <TextField
                  id='project-name'
                  variant='outlined'
                  fullWidth
                  required
                  InputProps={{
                    classes: {
                      input: `${classes.customInput} !important`
                    }
                  }}
                />
              </FormGroup>
            </Grid>
          </Grid>
          {isMore && (
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <FormGroup className='form_group'>
                  <Typography variant='body1' gutterBottom>
                    Notes
                  </Typography>
                  <TextField
                    id='project-name'
                    variant='outlined'
                    fullWidth
                    multiline
                    rows={3}
                    required
                  />
                </FormGroup>
              </Grid>
              <Grid item xs={3}>
                <FormGroup className='form_group'>
                  <Typography variant='body1' gutterBottom>
                    Example of use
                  </Typography>
                  <TextField
                    id='project-name'
                    variant='outlined'
                    fullWidth
                    required
                    multiline
                    rows={3}
                  />
                </FormGroup>
              </Grid>
              <Grid item xs={3}>
                <FormGroup className='form_group'>
                  <Typography variant='body1' gutterBottom>
                    Notes
                  </Typography>
                  <TextField
                    id='project-name'
                    variant='outlined'
                    fullWidth
                    required
                    multiline
                    rows={3}
                  />
                </FormGroup>
              </Grid>
              <Grid item xs={3}>
                <FormGroup className='form_group'>
                  <Typography variant='body1' gutterBottom>
                    Example of use
                  </Typography>
                  <TextField
                    id='project-name'
                    variant='outlined'
                    fullWidth
                    required
                    multiline
                    rows={3}
                  />
                </FormGroup>
              </Grid>
            </Grid>
          )}

          <Grid container sx={{ margin: '10px' }} spacing={2}>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
              <div
                style={{
                  flexFlow: 'flex',
                  textAlign: 'center',
                  color: '#aebdcd',
                  cursor: 'pointer'
                }}
                onClick={clickMore}
              >
                {!isMore ? (
                  <ArrowDropDownIcon style={{ verticalAlign: 'middle' }} />
                ) : (
                  <ArrowDropUpIcon style={{ verticalAlign: 'middle' }} />
                )}
                <span style={{ textAlign: 'center' }}>
                  {isMore ? 'hide' : 'more'} options
                </span>
              </div>
            </Grid>
            <Grid item xs={2}>
              <Button
                variant='text'
                onClick={cancelTerm}
                style={{ textTransform: 'none' }}
              >
                Cancel
              </Button>
              <Button
                variant='contained'
                style={{ background: '#09c', textTransform: 'none' }}
              >
                + Add
              </Button>
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  )
}

export default Glossary
