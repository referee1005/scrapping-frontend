import React, { useState } from 'react'
import { IconButton, Paper, Box, Typography } from '@mui/material'
import ChatIcon from '@mui/icons-material/Chat'
import CloseIcon from '@mui/icons-material/Close'
import { ChatWindow } from './ChatWindow'
import { ChatInput } from './ChatInput'

const ChatBot = () => {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([])

  const handleToggle = () => {
    setOpen(!open)
  }

  const handleSend = message => {
    setMessages([...messages, { text: message, sender: 'user' }])
    // Simulate bot response
    setTimeout(() => {
      setMessages(prevMessages => [
        ...prevMessages,
        { text: `Bot response to: ${message}`, sender: 'bot' }
      ])
    }, 1000)
  }

  return (
    <Box position='fixed' bottom={16} right={16} zIndex={1000}>
      {open && (
        <Paper
          elevation={3}
          style={{
            width: '300px',
            height: '400px',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Box
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            padding={2}
            bgcolor='primary.main'
            color='white'
          >
            <Typography variant='h6'>Chatbot</Typography>
            <IconButton color='inherit' onClick={handleToggle}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box flex={1} padding={2} overflow='auto'>
            <ChatWindow messages={messages} />
          </Box>
          <Box padding={2}>
            <ChatInput onSend={handleSend} />
          </Box>
        </Paper>
      )}
      {!open && (
        <IconButton
          color='primary'
          onClick={handleToggle}
          style={{ backgroundColor: 'white' }}
        >
          <ChatIcon />
        </IconButton>
      )}
    </Box>
  )
}

export default ChatBot
