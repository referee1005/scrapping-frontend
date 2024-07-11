import React from 'react'
import { Box } from '@mui/material'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import TranslationMatch from './TranslationMatch'
import TMSearch from './TMSearch'
import Glossary from './Glossary'
import {
  Input,
  FormControl,
  Select,
  MenuItem,
  FormGroup,
  StyledEngineProvider
} from '@mui/material'
import { makeStyles, withStyles } from '@mui/styles'

const useStyles = makeStyles({
  customInput: {
    height: '20px !important', // Adjust the height as needed
    padding: 3
  }
})

const CustomSelect = withStyles({
  root: {
    '& .MuiSelect-select': {
      height: '20px !important', // Set the desired height here
      minHeight: 20
    }
  }
})(Select)

const CustomTab = withStyles({
  root: {
    '& .MuiButtonBase-root': {
      minHeight: '20px !important' // Set the desired height here
    }
  }
})(Tab)

const Footer = () => {
  const [value, setValue] = React.useState('1')
  const [isterm, setIsterm] = React.useState(false)
  const [isMore, setMore] = React.useState(false)

  const classes = useStyles()
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const addTerm = () => {
    setIsterm(true)
  }
  const cancelTerm = () => {
    setIsterm(false)
  }
  const clickMore = () => {
    setMore(!isMore)
  }
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }))
  const transitionmatches = [
    {
      source: 'version'
    }
  ]
  return (
    <StyledEngineProvider injectFirst>
      <Box
        sx={{
          width: '100%',
          typography: 'body1',
          width: 'calc(100% + 1rem)',
          height: 'calc(100% + 1rem)'
        }}
      >
        <TabContext value={value}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: 'divider'
            }}
          >
            <TabList
              sx={{
                bgcolor: 'white',

                borderBottom: 1
              }}
              onChange={handleChange}
              aria-label='lab API tabs example'
            >
              <CustomTab
                label='Translation Matches'
                value='1'
                sx={{
                  bgcolor: value == '1' ? 'white' : '#d9e0e8',
                  border: '1px solid rgb(174,189,205) !important',
                  borderColor: '#d9e0e8',
                  textTransform: 'none'
                }}
              />
              <CustomTab
                label='TM Search'
                value='2'
                sx={{
                  bgcolor: value == '2' ? 'white' : '#d9e0e8',
                  border: '1px solid rgb(174,189,205) !important',
                  borderColor: '#d9e0e8',
                  textTransform: 'none'
                }}
              />
              <CustomTab
                label='Glossary'
                value='3'
                sx={{
                  bgcolor: value == '3' ? 'white' : '#d9e0e8',
                  border: '1px solid rgb(174,189,205) !important',
                  borderColor: '#d9e0e8',
                  textTransform: 'none'
                }}
              />
            </TabList>
          </Box>
          <TabPanel value='1' sx={{ padding: 0 }}>
            <TranslationMatch />
          </TabPanel>
          <TabPanel value='2'>
            <TMSearch />
          </TabPanel>
          <TabPanel value='3'>
            <Glossary />
          </TabPanel>
        </TabContext>
      </Box>
    </StyledEngineProvider>
  )
}

export default Footer
