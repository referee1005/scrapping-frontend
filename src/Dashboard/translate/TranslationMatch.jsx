import React from 'react'
import { Box, Typography } from '@mui/material'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import Grid from '@mui/material/Grid'
import { StyledEngineProvider } from '@mui/material'

const TranslationMatch = () => {
  return (
    <StyledEngineProvider injectFirst>
      <List sx={{ padding: 0 }}>
        <ListItem sx={{ padding: 0 }}>
          <ListItemButton>
            <Grid container>
              <Grid
                container
                direction='column'
                justifyContent='center'
                alignItems='center'
              >
                <Grid container direction='column'>
                  <Grid item xs={12}>
                    <Typography sx={{ fontSize: '12px' }}>
                      Welcome to Longoworld
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid item xs={8}></Grid>
                    <Grid item xs={3}>
                      <Typography sx={{ fontSize: '12px' }}>
                        Welcome to Longoworld
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container direction={'column'}>
                  <Grid container justifyContent={'flex-end'}>
                    <Typography
                      sx={{
                        fontSize: '12px'
                      }}
                    >
                      source:
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '13px',
                        fontWeight: 'bold'
                      }}
                    >
                      Public TM English
                    </Typography>
                    <Box
                      sx={{
                        bgcolor: 'red',
                        width: '40px',
                        height: '20px'
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: '12px',
                          color: 'white'
                        }}
                      >
                        100%
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </ListItemButton>
        </ListItem>
      </List>
    </StyledEngineProvider>
  )
}

export default TranslationMatch
