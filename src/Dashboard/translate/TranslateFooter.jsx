import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import LaunchIcon from '@mui/icons-material/Launch'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import MenuIcon from '@mui/icons-material/Menu'
import Button from '@mui/material/Button'
import { Link } from '@mui/material'
import Grid from '@mui/material/Grid'
import LinearProgress, {
  linearProgressClasses
} from '@mui/material/LinearProgress'
import { he } from 'date-fns/locale'

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: 'rgb(0, 153, 204)'
  }
}))

export default function TranslatorFooter () {
  return (
    <>
      <AppBar
        position='static'
        className='footer_bar'
        style={{
          position: 'fixed',
          bottom: '0%',
          backgroundColor: 'white',
          color: 'black',
          height: '7%',
          fontSize: 10
        }}
      >
        <Grid container style={{ height: '100%' }}>
          <Grid
            item
            xs={2}
            style={{
              display: 'flex',
              justifyContent: 'left',
              alignItems: 'center'
            }}
          >
            <Typography fontSize={12} style={{ paddingLeft: 12 }}>
              Job ID: 965026
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <Grid
              container
              style={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                margin: 0
              }}
              spacing={2}
            >
              <Grid item xs={4} style={{ paddingTop: 0 }}>
                <Grid container direction={'column'}>
                  <Grid
                    item
                    xs={6}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Typography style={{ fontSize: 12, fontWeight: 700 }}>
                      English(USA)-French...
                    </Typography>
                    <Box sx={{ minWidth: 35 }}>
                      <Typography
                        variant='body2'
                        color='text.secondary'
                        style={{ fontSize: 12, fontWeight: 700 }}
                      >{`100%`}</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={5}>
                    <BorderLinearProgress variant='determinate' value={100} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={2} style={{ paddingTop: 0 }}>
                <Box
                  style={{
                    backgroundColor: '#f5f6f7',
                    borderRadius: 4,
                    height: 50
                  }}
                >
                  <Grid container direction='column' style={{ height: '100%' }}>
                    <Grid item xs={6} style={{ height: '50%' }}>
                      <Grid
                        container
                        alignItems='center'
                        style={{
                          display: 'flex',
                          alignItems: 'center',

                          height: '50%'
                        }}
                      >
                        <Grid item xs={8}>
                          <Typography style={{ fontSize: 12, fontWeight: 700 }}>
                            Total words
                          </Typography>
                        </Grid>
                        <Grid item xs={1}>
                          <Typography style={{ fontSize: 12, fontWeight: 700 }}>
                            30
                          </Typography>
                        </Grid>
                        <Grid item xs={3}>
                          <IconButton aria-label='launch'>
                            <LaunchIcon style={{ fontSize: 15 }} />
                          </IconButton>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={6} style={{ height: '50%' }}>
                      <Grid
                        container
                        alignItems='center'
                        style={{
                          height: '50%' // Adjust the height to occupy half of the Box height
                        }}
                      >
                        <Grid item xs={8}>
                          <Typography style={{ fontSize: 12 }}>
                            Weighted
                          </Typography>
                        </Grid>
                        <Grid item xs={1}>
                          <Typography style={{ fontSize: 12 }}>20</Typography>
                        </Grid>
                        <Grid item xs={3}></Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={2} style={{ paddingTop: 0 }}>
                <Box style={{ backgroundColor: '#f5f6f7', borderRadius: 4 }}>
                  <Grid container direction='column' style={{ height: '100%' }}>
                    <Grid item xs={6} style={{ height: '50%' }}>
                      <Grid
                        container
                        alignItems='center'
                        style={{
                          display: 'flex',
                          alignItems: 'center',

                          height: '50%'
                        }}
                      >
                        <Grid item xs={8}>
                          <Typography style={{ fontSize: 12, fontWeight: 700 }}>
                            Todo
                          </Typography>
                        </Grid>
                        <Grid item xs={1}>
                          <Typography style={{ fontSize: 12, fontWeight: 700 }}>
                            -
                          </Typography>
                        </Grid>
                        <Grid item xs={3}>
                          <IconButton aria-label='launch'>
                            <ArrowForwardIcon style={{ fontSize: 15 }} />
                          </IconButton>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={6} style={{ height: '50%' }}>
                      <Grid
                        container
                        alignItems='center'
                        style={{
                          height: '50%' // Adjust the height to occupy half of the Box height
                        }}
                      >
                        <Grid item xs={8}>
                          <Typography style={{ fontSize: 12 }}>
                            Weighted
                          </Typography>
                        </Grid>
                        <Grid item xs={1}>
                          <Typography style={{ fontSize: 12 }}>-</Typography>
                        </Grid>
                        <Grid item xs={3}></Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={2} style={{ paddingTop: 0 }}>
                <Box
                  style={{
                    backgroundColor: '#f5f6f7',
                    borderRadius: 4,
                    height: 50
                  }}
                >
                  <Grid container direction='column' style={{ height: '100%' }}>
                    <Grid item xs={6} style={{ height: '50%' }}>
                      <Grid
                        container
                        alignItems='center'
                        style={{
                          display: 'flex',
                          alignItems: 'center',

                          height: '50%'
                        }}
                      >
                        <Grid item xs={6}>
                          <Typography style={{ fontSize: 12, fontWeight: 700 }}>
                            Speed
                          </Typography>
                        </Grid>
                        <Grid item xs={1}>
                          <Typography style={{ fontSize: 12, fontWeight: 700 }}>
                            N/A
                          </Typography>
                        </Grid>
                        <Grid item xs={5}>
                          <Typography style={{ fontSize: 12, fontWeight: 700 }}>
                            Words/h
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={6} style={{ height: '50%' }}>
                      <Grid
                        container
                        alignItems='center'
                        style={{
                          height: '50%' // Adjust the height to occupy half of the Box height
                        }}
                      >
                        <Grid item xs={6}>
                          <Typography style={{ fontSize: 12 }}>ETC</Typography>
                        </Grid>
                        <Grid item xs={1}>
                          <Typography style={{ fontSize: 12 }}> N/A</Typography>
                        </Grid>
                        <Grid item xs={5}></Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </AppBar>
    </>
  )
}
