import React from 'react'
import Grid from '@mui/material/Grid'
import { TextField } from '@mui/material'
import { makeStyles, withStyles } from '@mui/styles'
import { styled } from '@mui/material/styles'
import Badge from '@mui/material/Badge'

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    height: 13,
    transform: 'translate(35px, 5px)'
  }
}))
const Comment = ({ visibleModal }) => {
  return (
    <>
      <div
        style={{
          cursor: 'pointer'
        }}
        onClick={() => visibleModal(true)}
      >
        <StyledBadge badgeContent='+' color='primary'></StyledBadge>
        <div
          style={{
            transform: 'translate(-256px, -256px)',
            zIndex: 3,
            scale: '30%'
          }}
        >
          <svg
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            width='512'
            height='512'
            viewBox='0 0 512 512'
            style={{
              position: 'absolute',
              transform: 'translate(40%, 32px)',
              scale: '20%'
            }}
          >
            <g id='icomoon-ignore'></g>
            <path d='M256 96c-27.466 0-53.994 4.331-78.847 12.871-23.356 8.027-44.153 19.372-61.814 33.722-33.107 26.899-51.339 61.492-51.339 97.407 0 20.149 5.594 39.689 16.626 58.076 11.376 18.96 28.491 36.293 49.494 50.126 15.178 9.996 25.39 25.974 28.088 43.947 0.9 5.992 1.464 12.044 1.685 18.062 3.735-3.097 7.375-6.423 10.94-9.988 12.077-12.076 28.39-18.745 45.251-18.745 2.684 0 5.381 0.168 8.078 0.512 10.487 1.333 21.199 2.010 31.838 2.010 27.467 0 53.994-4.33 78.847-12.871 23.356-8.027 44.153-19.372 61.814-33.722 33.107-26.898 51.339-61.492 51.339-97.407s-18.232-70.508-51.339-97.407c-17.661-14.349-38.458-25.695-61.814-33.722-24.853-8.54-51.38-12.871-78.847-12.871zM256 32v0c141.385 0 256 93.125 256 208s-114.615 208-256 208c-13.578 0-26.905-0.867-39.912-2.522-54.989 54.989-120.625 64.85-184.088 66.298v-13.458c34.268-16.789 64-47.37 64-82.318 0-4.877-0.379-9.665-1.082-14.348-57.898-38.132-94.918-96.377-94.918-161.652 0-114.875 114.615-208 256-208z'></path>
          </svg>
        </div>
      </div>
    </>
  )
}

export default Comment
