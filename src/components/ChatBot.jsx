import React, { useState } from 'react'
import { IconButton, Paper, Box, Typography } from '@mui/material'
import {
  TextField,
  InputAdornment,
  Toolbar,
  Autocomplete,
  List,
  ListItem,
  ListItemText,
  Divider
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import PersonIcon from '@mui/icons-material/Person'
import RobotIcon from '@mui/icons-material/Android'

const ChatWidget = () => {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [activeChatSection, setActiveChatSection] = useState(false)
  const [input, setInput] = useState('')
  const options = ['Article 1', 'Article 2', 'Article 3']

  const handleToggle = () => {
    setOpen(!open)
  }

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }])
      setInput('')
      setTimeout(() => {
        setMessages(prevMessages => [
          ...prevMessages,
          { text: 'This is a response from the chatbot.', sender: 'bot' }
        ])
      }, 1000)
    }
  }
  const handleChatSection = () => {
    setActiveChatSection(true)
  }

  const handleBack = () => {
    setActiveChatSection(false)
  }
  return (
    <Box
      position='fixed'
      bottom={16}
      right={16}
      zIndex={1000}
      display='flex'
      flexDirection='column'
      alignItems='end'
      className='chatbotModal'
    >
      {open && (
        <Paper
          elevation={3}
          style={{
            width: '350px',
            height: '550px',
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '16px',
            backgroundColor: '#f5f8fa'
          }}
        >
          <Box
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            padding={2}
            bgcolor='#002b5c'
            color='white'
          >
            {activeChatSection && (
              <IconButton onClick={handleBack} style={{ color: 'white' }}>
                {/* <ArrowBackIcon /> */}
                <img src='./img/back.svg' alt='' className='back_arrow' />
              </IconButton>
            )}

            {activeChatSection ? (
              <Toolbar className='header_toolbar'>
                <div className='avatars_head'>
                  <ul>
                    <li>
                      <img src='./img/1.webp' alt='Avatar of Ilaria' />
                    </li>
                    <li>
                      <img src='./img/2.webp' alt='Avatar of Ilaria' />
                    </li>
                    <li>
                      <img src='./img/3.webp' alt='Avatar of Ilaria' />
                    </li>
                  </ul>
                  <div>
                    <h5>
                      Ilaria, Ambra, Valentina{' '}
                      <span>We typically reply in a few minutes</span>
                    </h5>
                  </div>
                </div>
              </Toolbar>
            ) : (
              <Typography variant='h6'>Help</Typography>
            )}
          </Box>

          {/* Chat input section starts */}

          {!activeChatSection && (
            <Toolbar style={{ display: 'inline-block' }} className='bot_prim'>
              <div className='bot-card'>
                <div style={{ display: 'flex', justifyContent: 'start' }}>
                  <p style={{ marginTop: '4px' }}>Find Answers Quickly</p>
                </div>
                <Autocomplete
                  freeSolo
                  options={options}
                  renderInput={params => (
                    <TextField
                      {...params}
                      placeholder='Search Articles'
                      variant='outlined'
                      fullWidth
                      value={input}
                      onChange={e => setInput(e.target.value)}
                      onKeyPress={e => {
                        if (e.key === 'Enter') handleSend()
                      }}
                      InputProps={{
                        ...params.InputProps,
                        startAdornment: (
                          <InputAdornment position='start'>
                            <SearchIcon />
                          </InputAdornment>
                        )
                      }}
                    />
                  )}
                />
              </div>

              <div className='bot-card p-0'>
                <Toolbar className='Chat-section '>
                  <p>Your Chats</p>
                  <img
                    onClick={handleChatSection}
                    style={{ cursor: 'pointer' }}
                    src='./img/edit.svg'
                    alt=''
                  />
                </Toolbar>
                <Toolbar className='chats'>
                  {/* <div className='in-chat' onClick={handleChatSection}>
                                <PersonIcon style={{ marginRight: '8px', alignSelf: 'flex-start', color: '#2196f3' }} />
                                <p className='user'>Ilaria, Ambra, Valentina</p>
                                <p className='time'>21 hr ago</p>
                                </div>
                                <div className='in-chat-bottom'>
                                    <p>Got any questions? Check out...</p>
                                </div> */}
                  <div
                    onClick={handleChatSection}
                    class='ThreadListItemWrapper'
                  >
                    <div class='avatars'>
                      <div class='chat-head'>
                        <div class='chat-head-avatar'>
                          <img src='./img/1.webp' alt='Avatar of Ilaria' />
                        </div>
                      </div>
                      <div class='chat-head'>
                        <div class='chat-head-avatar'>
                          <img src='./img/2.webp' alt='Avatar of Ambra' />
                        </div>
                      </div>
                      <div class='chat-head'>
                        <div class='chat-head-avatar'>
                          <img src='./img/3.webp' alt='Avatar of Valentina' />
                        </div>
                      </div>
                    </div>
                    <div class='TextWrapper'>
                      <small class='VizExSmall'>
                        <span className='names'>Ilaria, Ambra, Valentina</span>
                        <span class='hours'>23 hr. ago</span>
                      </small>
                      <div class='bottom_text'>
                        Got any questions? Check out the user guide at
                        https://guides.matecat.com/ or ask us anything!
                      </div>
                    </div>
                  </div>
                </Toolbar>
              </div>
            </Toolbar>
          )}

          {/* Chat input section ends  */}

          {/* Chat section starts */}
          {activeChatSection && (
            <Box
              display='flex'
              flexDirection='column'
              flexGrow={1}
              justifyContent='space-between'
            >
              <List style={{ overflowY: 'auto', flexGrow: 1 }}>
                {messages.map((message, index) => (
                  <ListItem key={index} alignItems='flex-start'>
                    {message.sender === 'user' ? (
                      <>
                        <PersonIcon
                          style={{
                            marginRight: '8px',
                            alignSelf: 'flex-start',
                            color: '#2196f3'
                          }}
                        />

                        <Box
                          style={{
                            backgroundColor: '#ccc',
                            padding: '8px',
                            borderRadius: '8px',
                            maxWidth: '75%'
                          }}
                        >
                          <ListItemText
                            primary={message.text}
                            style={{ textAlign: 'left' }}
                          />
                        </Box>
                      </>
                    ) : (
                      <>
                        <RobotIcon
                          style={{
                            marginLeft: '8px',
                            alignSelf: 'flex-start',
                            color: '#f44336'
                          }}
                        />
                        <ListItemText
                          primary={message.text}
                          style={{ textAlign: 'left' }}
                        />
                      </>
                    )}
                  </ListItem>
                ))}
              </List>
              <Divider />
              <Box display='flex' padding={2} className='text_field'>
                <TextField
                  variant='outlined'
                  fullWidth
                  placeholder='Write a message'
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyPress={e => {
                    if (e.key === 'Enter') handleSend()
                  }}
                />
                <IconButton color='primary' onClick={handleSend}>
                  <img src='./img/send.svg' alt='' />
                </IconButton>
              </Box>
            </Box>
          )}
          {/* Chat section ends */}
        </Paper>
      )}
      <IconButton
        color='primary'
        onClick={handleToggle}
        style={{ backgroundColor: 'rgb(0, 43, 92)', marginBottom: '30px' }}
        className='chatbot_btn'
      >
        {open ? (
          <img src='./img/chatClose.svg' />
        ) : (
          <img src='./img/message.svg' />
        )}
      </IconButton>
    </Box>
  )
}

export default ChatWidget
