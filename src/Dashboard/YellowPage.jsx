import React, { useEffect, useState } from 'react'
import { Typography, Box, Grid, Container } from '@mui/material'
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import CustomCollapse from '../components/CustomCollopse'
const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.white
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'black' // Set the color of the tooltip text to black
  }
}))
const Analyze = () => {
  const [rows, setRows] = useState([])
  useEffect(() => {
    setRows(JSON.parse(localStorage.getItem('yellow_page')))
  })
  return (
    <>
      {' '}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='center'>No</TableCell>
              <TableCell align='center'>Name</TableCell>
              <TableCell align='center'>Phone</TableCell>
              <TableCell align='center'>Address</TableCell>
              <TableCell align='center'>History</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row' align='center'>
                  {index + 1}
                </TableCell>
                <TableCell component='th' scope='row' align='center'>
                  {row.name}
                </TableCell>
                <TableCell align='center'>{row.phone}</TableCell>
                <TableCell align='center'>{row.address}</TableCell>
                <TableCell align='center'>{row.history}</TableCell>
                {/* <TableCell align='left' sx={{ maxWidth: 600 }}>
                  {row.detail}
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default Analyze
