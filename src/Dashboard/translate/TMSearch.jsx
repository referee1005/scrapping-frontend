import React from 'react'
import Grid from '@mui/material/Grid'
import { TextField } from '@mui/material'
import { makeStyles, withStyles } from '@mui/styles'

const useStyles = makeStyles({
  customInput: {
    height: '20px !important', // Adjust the height as needed
    padding: 3
  }
})

const TMSearch = () => {
  const classes = useStyles()
  return (
    <Grid container xs={12} spacing={2}>
      <Grid item xs={6}>
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
      </Grid>
      <Grid item xs={6}>
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
      </Grid>
    </Grid>
  )
}

export default TMSearch
