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

const ItemCheck = ({
  labelId,
  hover,
  value,
  editvalue,
  checked,
  index,
  handleToggle,
  setSplitSegment
}) => {
  const [isterm, setIsterm] = React.useState(false)
  const [isMore, setMore] = React.useState(false)

  return (
    <div
      style={{
        width: 70,
        display: 'flex',
        flexDirection: 'column',
        transform: 'translate(-10px, 0px)'
      }}
    >
      <span style={{ fontSize: 9, textAlign: 'center' }}>5343435555</span>
      <ListItemIcon>
        {hover === index && (
          <Checkbox
            edge='end'
            size='small'
            style={{ left: '25%' }}
            sx={{ '& .MuiSvgIcon-root': { fontSize: 15 } }}
            checked={checked.indexOf(value) !== -1}
            tabIndex={-1}
            onChange={handleToggle(value)}
            inputProps={{ 'aria-labelledby': labelId }}
          />
        )}
      </ListItemIcon>
      {editvalue === value && hover === index && (
        <>
          <IconButton
            color='secondary'
            aria-label='add an alarm'
            onClick={setSplitSegment}
          >
            <BorderVerticalIcon fontSize='20' />
          </IconButton>
          <Typography fontSize={8} style={{ textAlign: 'center' }}>
            CTRL+S
          </Typography>
        </>
      )}
    </div>
  )
}

export default ItemCheck
