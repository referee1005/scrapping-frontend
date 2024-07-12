import React from 'react'
import Grid from '@mui/material/Grid'
import { Box, TextField, Typography, Button } from '@mui/material'
import { makeStyles, withStyles } from '@mui/styles'
import { styled } from '@mui/material/styles'
import Badge from '@mui/material/Badge'
import IconButton from '@mui/material/IconButton'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    height: 13,
    transform: 'translate(35px, 5px)'
  }
}))
const Comment = ({ visibleModal }) => {
  return (
    <div>
      <Box
        height={150}
        width={350}
        marginLeft={'20px'}
        my={4}
        gap={4}
        position={'relative'}
        boxShadow={1}
        style={{
          marginLeft: 30,
          border: '1px dotted grey',
          paddingBottom: -10
        }}
      >
        <IconButton
          aria-label='delete'
          size='large'
          style={{
            position: 'absolute',
            padding: 0,
            top: -10,
            right: -10,
            background: 'white'
          }}
          onClick={visibleModal}
        >
          <CancelOutlinedIcon />
        </IconButton>
        <div
          style={{
            // width: 10,
            // height: 10,

            bottom: 0,
            borderTop: 'unset',
            borderLeft: 'unset',
            borderBottom: '16px solid #fff',
            borderRight: '1px dotted grey',
            borderLeft: '14px solid rgba(0, 0, 0, 0)',
            filter: ' drop-shadow(-1px 2px 1px rgba(0, 0, 0, 0.3))',
            transform: 'translate(-12px, 145px)',
            width: 'calc(100% - 2px)'
          }}
        ></div>
        <Typography
          style={{
            fontSize: 15,
            fontWeight: 600,
            textAlign: 'start',
            marginLeft: 10
          }}
        >
          Anonymous
        </Typography>
        <Typography
          style={{
            fontSize: 14,
            textAlign: 'start',
            marginLeft: 10,
            marginBottom: 10
          }}
        >
          <u>Login to receive comments</u>
        </Typography>
        <div style={{ textAlign: 'center', borderRadius: 30 }}>
          <textarea
            placeholder='Write a comment...'
            class='mbc-comment-input__input'
            style={{
              width: '90%',
              borderRadius: 20,
              boxSizing: 'border-box',
              backgroundColor: 'transparent',
              fontFamily: 'inherit',
              height: 41,
              bottom: 0,
              overflow: 'hidden',
              resize: 'none',
              padding: 10
            }}
          ></textarea>
        </div>
        <Button
          variant='contained'
          style={{
            width: 100,
            marginRight: '5%',
            float: 'right',
            background: '#09c',
            color: 'black',
            textTransform: 'none',
            color: 'white',
            marginBottom: 10
          }}
          // onClick={invisibleSplitSegment}
        >
          Comment
        </Button>
      </Box>
    </div>
  )
}

export default Comment
