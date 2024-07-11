import React from 'react'
import { Box, Typography } from '@mui/material'
import ListItemIcon from '@mui/material/ListItemIcon'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { TextField } from '@mui/material'
import Button from '@mui/material/Button'
import SearchIcon from '@mui/icons-material/Search'
import { InputBase, IconButton } from '@mui/material'
import BorderVerticalIcon from '@mui/icons-material/BorderVertical'
import Checkbox from '@mui/material/Checkbox'
import Divider from '@mui/material/Divider'
import InputAdornment from '@mui/material/InputAdornment'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import { FormControl, MenuItem, FormGroup, Select } from '@mui/material'
import { withStyles, makeStyles } from '@mui/styles'

const PrivateResource = ({ visibleSettings }) => {
  const [isterm, setIsterm] = React.useState(false)
  const [isMore, setMore] = React.useState(false)

  return (
    <>
      <div
        onClick={() => visibleSettings(true)}
        style={{
          transform: 'translate(2px, 17px)'
        }}
      >
        <Box
          style={{
            width: 150,
            float: 'right',
            marginTop: 2,
            border: '1px solid',
            background: 'white',
            display: 'flex',
            zIndex: 3,
            cursor: 'pointer'
          }}
        >
          <div
            style={{
              transform: 'translate(-32px, -32px)'
            }}
          >
            <svg
              width='64px'
              height='64px'
              style={{
                shapeRendering: 'geometricPrecision',
                textRendering: 'geometricPrecision',
                imageRendering: 'optimizeQuality',
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                position: 'absolute',
                transform: 'translate(64px, 32px)',
                scale: '20%'
              }}
            >
              <g>
                <path
                  style={{
                    opacity: 0.958,
                    fill: '#000000'
                  }}
                  d='M 30.5,3.5 C 36.5755,8.06898 42.2422,13.2356 47.5,19 C 43.5138,19.4988 39.5138,19.6655 35.5,19.5 C 35.5,24.8333 35.5,30.1667 35.5,35.5 C 32.8333,35.5 30.1667,35.5 27.5,35.5 C 27.5,30.1667 27.5,24.8333 27.5,19.5 C 23.4862,19.6655 19.4862,19.4988 15.5,19 C 20.7031,13.9646 25.7031,8.79798 30.5,3.5 Z'
                />
              </g>
              <g>
                <path
                  style={{
                    opacity: 0.921,
                    fill: '#000000'
                  }}
                  d='M 63.5,34.5 C 63.5,40.5 63.5,46.5 63.5,52.5 C 53.5362,55.5958 43.8695,59.2625 34.5,63.5 C 32.5,63.5 30.5,63.5 28.5,63.5 C 19.1305,59.2625 9.46384,55.5958 -0.5,52.5 C -0.5,46.5 -0.5,40.5 -0.5,34.5 C 7.5,31.8333 15.5,29.1667 23.5,26.5 C 23.8076,28.924 23.4742,31.2573 22.5,33.5 C 17.4904,35.5026 12.4904,37.5026 7.5,39.5 C 15.3409,42.8919 23.3409,45.8919 31.5,48.5 C 39.6591,45.8919 47.6591,42.8919 55.5,39.5 C 50.6213,37.2284 45.6213,35.2284 40.5,33.5 C 39.5258,31.2573 39.1924,28.924 39.5,26.5 C 47.5,29.1667 55.5,31.8333 63.5,34.5 Z'
                />
              </g>
            </svg>
          </div>
          <Typography
            style={{
              fontSize: 10,
              width: 150,
              paddingLeft: 30
            }}
          >
            Add private resources
          </Typography>
        </Box>
      </div>
    </>
  )
}

export default PrivateResource
