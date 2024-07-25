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

const Analyze = () => {
  const [rows, setRows] = useState([])
  useEffect(() => {
    setRows(JSON.parse(localStorage.getItem('result')))
  })
  return (
    <>
      {' '}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='center' sx={{ maxWidth: 100 }}>
                No
              </TableCell>
              <TableCell align='center' sx={{ maxWidth: 100 }}>
                Title
              </TableCell>
              <TableCell align='center' sx={{ maxWidth: 200 }}>
                Url
              </TableCell>
              <TableCell align='center' sx={{ maxWidth: 200 }}>
                Email
              </TableCell>
              <TableCell align='center' sx={{ maxWidth: 100 }}>
                PhoneNumber
              </TableCell>
              <TableCell align='center' sx={{ maxWidth: 600 }}>
                Detail
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell
                  component='th'
                  scope='row'
                  align='center'
                  sx={{ maxWidth: 100 }}
                >
                  {index + 1}
                </TableCell>
                <TableCell
                  component='th'
                  scope='row'
                  align='center'
                  sx={{ maxWidth: 100 }}
                >
                  {row.title}
                </TableCell>
                <TableCell
                  align='center'
                  sx={{ maxWidth: 200, overflowWrap: 'break-word' }}
                >
                  {row.url}
                </TableCell>
                <TableCell
                  align='center'
                  sx={{ maxWidth: 200, overflowWrap: 'break-word' }}
                >
                  {row.email}
                </TableCell>
                <TableCell
                  align='center'
                  sx={{ maxWidth: 100, overflowWrap: 'break-word' }}
                >
                  {row.phone}
                </TableCell>
                <TableCell align='left' sx={{ maxWidth: 600 }}>
                  {row.detail}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default Analyze
