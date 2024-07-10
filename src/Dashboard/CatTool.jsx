import React, { useState, useEffect, useRef } from 'react'
import {
  Container,
  Toolbar,
  Typography,
  Select,
  MenuItem,
  FormControl,
  Button,
  Paper,
  IconButton,
  FormGroup,
  Drawer,
  OutlinedInput,
  Autocomplete,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  InputLabel,
  List,
  ListItem,
  Popper,
  ListItemText,
  Checkbox,
  Tooltip,
  Link
} from '@mui/material'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import UploadIcon from '@mui/icons-material/Upload'
import Chip from '@mui/material/Chip'
import MenuIcon from '@mui/icons-material/Menu'
import SideBarTabs from '../SideBarTabs'
import { styled } from '@mui/system'
import InfoTooltip from '../components/infoTooltip'
// import SwitchButton from "../components/SwitchButton"

const CustomPopper = styled(Popper)({
  zIndex: 9999,
  width: '100vw',
  height: '100vh'
})

const StyledAutocomplete = styled(Autocomplete)(({ theme }) => ({
  '& .MuiAutocomplete-paper': {
    width: '100vw',
    height: '100vh',
    margin: 0,
    position: 'fixed',
    top: 0,
    left: 0
  },
  '& .MuiAutocomplete-listbox': {
    width: '100%',
    height: 'calc(100% - 56px)'
  }
}))

const languages = [
  { prelim: 'en-US', title: 'English (USA)' },
  { prelim: 'en-GB', title: 'English (UK)' },
  { prelim: 'fr-FR', title: 'French (France)' },
  { prelim: 'fr-CA', title: 'French (Canada)' },
  { prelim: 'es-ES', title: 'Spanish (Spain)' },
  { prelim: 'es-MX', title: 'Spanish (Mexico)' },
  { prelim: 'de-DE', title: 'German (Germany)' },
  { prelim: 'it-IT', title: 'Italian (Italy)' },
  { prelim: 'pt-PT', title: 'Portuguese (Portugal)' },
  { prelim: 'pt-BR', title: 'Portuguese (Brazil)' },
  { prelim: 'ru-RU', title: 'Russian (Russia)' },
  { prelim: 'zh-CN', title: 'Chinese (Simplified, China)' },
  { prelim: 'zh-TW', title: 'Chinese (Traditional, Taiwan)' },
  { prelim: 'ja-JP', title: 'Japanese (Japan)' },
  { prelim: 'ko-KR', title: 'Korean (South Korea)' },
  { prelim: 'ar-SA', title: 'Arabic (Saudi Arabia)' },
  { prelim: 'hi-IN', title: 'Hindi (India)' },
  { prelim: 'bn-BD', title: 'Bengali (Bangladesh)' },
  { prelim: 'pa-IN', title: 'Punjabi (India)' },
  { prelim: 'fa-IR', title: 'Persian (Iran)' },
  { prelim: 'ur-PK', title: 'Urdu (Pakistan)' },
  { prelim: 'id-ID', title: 'Indonesian (Indonesia)' },
  { prelim: 'ms-MY', title: 'Malay (Malaysia)' },
  { prelim: 'vi-VN', title: 'Vietnamese (Vietnam)' },
  { prelim: 'th-TH', title: 'Thai (Thailand)' },
  { prelim: 'tr-TR', title: 'Turkish (Turkey)' },
  { prelim: 'pl-PL', title: 'Polish (Poland)' },
  { prelim: 'nl-NL', title: 'Dutch (Netherlands)' },
  { prelim: 'sv-SE', title: 'Swedish (Sweden)' },
  { prelim: 'da-DK', title: 'Danish (Denmark)' },
  { prelim: 'fi-FI', title: 'Finnish (Finland)' },
  { prelim: 'no-NO', title: 'Norwegian (Norway)' },
  { prelim: 'hu-HU', title: 'Hungarian (Hungary)' },
  { prelim: 'cs-CZ', title: 'Czech (Czech Republic)' },
  { prelim: 'sk-SK', title: 'Slovak (Slovakia)' },
  { prelim: 'bg-BG', title: 'Bulgarian (Bulgaria)' },
  { prelim: 'el-GR', title: 'Greek (Greece)' },
  { prelim: 'he-IL', title: 'Hebrew (Israel)' },
  { prelim: 'ro-RO', title: 'Romanian (Romania)' },
  { prelim: 'sr-RS', title: 'Serbian (Serbia)' },
  { prelim: 'hr-HR', title: 'Croatian (Croatia)' },
  { prelim: 'sl-SI', title: 'Slovenian (Slovenia)' },
  { prelim: 'lt-LT', title: 'Lithuanian (Lithuania)' },
  { prelim: 'lv-LV', title: 'Latvian (Latvia)' },
  { prelim: 'et-EE', title: 'Estonian (Estonia)' },
  { prelim: 'is-IS', title: 'Icelandic (Iceland)' },
  { prelim: 'ga-IE', title: 'Irish (Ireland)' },
  { prelim: 'mt-MT', title: 'Maltese (Malta)' },
  { prelim: 'cy-GB', title: 'Welsh (United Kingdom)' },
  { prelim: 'uk-UA', title: 'Ukrainian (Ukraine)' },
  { prelim: 'be-BY', title: 'Belarusian (Belarus)' },
  { prelim: 'kk-KZ', title: 'Kazakh (Kazakhstan)' },
  { prelim: 'uz-UZ', title: 'Uzbek (Uzbekistan)' },
  { prelim: 'ky-KG', title: 'Kyrgyz (Kyrgyzstan)' },
  { prelim: 'mn-MN', title: 'Mongolian (Mongolia)' },
  { prelim: 'hy-AM', title: 'Armenian (Armenia)' },
  { prelim: 'ka-GE', title: 'Georgian (Georgia)' },
  { prelim: 'am-ET', title: 'Amharic (Ethiopia)' },
  { prelim: 'so-SO', title: 'Somali (Somalia)' },
  { prelim: 'sw-KE', title: 'Swahili (Kenya)' },
  { prelim: 'yo-NG', title: 'Yoruba (Nigeria)' },
  { prelim: 'ig-NG', title: 'Igbo (Nigeria)' },
  { prelim: 'ha-NE', title: 'Hausa (Niger)' },
  { prelim: 'zu-ZA', title: 'Zulu (South Africa)' },
  { prelim: 'xh-ZA', title: 'Xhosa (South Africa)' },
  { prelim: 'af-ZA', title: 'Afrikaans (South Africa)' },
  { prelim: 'st-LS', title: 'Sesotho (Lesotho)' },
  { prelim: 'tn-BW', title: 'Tswana (Botswana)' },
  { prelim: 'ny-MW', title: 'Chichewa (Malawi)' },
  { prelim: 'sn-ZW', title: 'Shona (Zimbabwe)' },
  { prelim: 'rw-RW', title: 'Kinyarwanda (Rwanda)' },
  { prelim: 'km-KH', title: 'Khmer (Cambodia)' },
  { prelim: 'lo-LA', title: 'Lao (Laos)' },
  { prelim: 'my-MM', title: 'Burmese (Myanmar)' },
  { prelim: 'si-LK', title: 'Sinhala (Sri Lanka)' },
  { prelim: 'ta-IN', title: 'Tamil (India)' },
  { prelim: 'te-IN', title: 'Telugu (India)' },
  { prelim: 'kn-IN', title: 'Kannada (India)' },
  { prelim: 'ml-IN', title: 'Malayalam (India)' },
  { prelim: 'mr-IN', title: 'Marathi (India)' },
  { prelim: 'gu-IN', title: 'Gujarati (India)' },
  { prelim: 'or-IN', title: 'Odia (India)' },
  { prelim: 'as-IN', title: 'Assamese (India)' },
  { prelim: 'ne-NP', title: 'Nepali (Nepal)' },
  { prelim: 'bo-CN', title: 'Tibetan (China)' },
  { prelim: 'dz-BT', title: 'Dzongkha (Bhutan)' },
  { prelim: 'ti-ET', title: 'Tigrinya (Ethiopia)' },
  { prelim: 'tg-TJ', title: 'Tajik (Tajikistan)' },
  { prelim: 'tk-TM', title: 'Turkmen (Turkmenistan)' },
  { prelim: 'az-AZ', title: 'Azerbaijani (Azerbaijan)' },
  { prelim: 'ku-TR', title: 'Kurdish (Turkey)' },
  { prelim: 'kmr-TR', title: 'Kurdish (Kurmanji, Turkey)' },
  { prelim: 'lb-LU', title: 'Luxembourgish (Luxembourg)' },
  { prelim: 'sm-WS', title: 'Samoan (Samoa)' },
  { prelim: 'to-TO', title: 'Tongan (Tonga)' },
  { prelim: 'fj-FJ', title: 'Fijian (Fiji)' },
  { prelim: 'mi-NZ', title: 'Maori (New Zealand)' },
  { prelim: 'gn-PY', title: 'Guarani (Paraguay)' },
  { prelim: 'ay-BO', title: 'Aymara (Bolivia)' },
  { prelim: 'qu-PE', title: 'Quechua (Peru)' },
  { prelim: 'na-NR', title: 'Nauruan (Nauru)' },
  { prelim: 'pap-AW', title: 'Papiamento (Aruba)' }
]

export default function CatTool () {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [selectedValues, setSelectedValues] = useState([])
  const [dialogOpen, setDialogOpen] = useState(false)
  const [formatDialogOpen, setFormatDialogOpen] = useState(false)
  const [selectedLanguages, setSelectedLanguages] = useState([])
  const [inputValue, setInputValue] = useState('')
  const autocompleteRef = useRef(null)
  const [autocompleteOpen, setAutocompleteOpen] = useState(false)
  const [selectedFromLanguage, setSelectedFromLanguage] = useState(null)
  const [singleLanguageDialogOpen, setSingleLanguageDialogOpen] =
    useState(false)

  useEffect(() => {
    if (dialogOpen) {
      setAutocompleteOpen(true)
    }
  }, [dialogOpen])
  const handleFromLanguageChange = (event, newValue) => {
    setSelectedFromLanguage(newValue)
  }

  const handleChange = (event, newValue) => {
    setSelectedLanguages(newValue)
    setInputValue(
      newValue.length > 1
        ? `${newValue.length} languages selected`
        : newValue[0]
        ? ` ${newValue[0].title}`
        : ''
    )
  }

  const [from, setFrom] = useState('')

  const handleFileDrop = e => {
    e.preventDefault()
    const files = e.dataTransfer.files
    console.log(files)
  }

  const handleDragOver = e => {
    e.preventDefault()
  }

  const toggleDrawer = open => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }
    setDrawerOpen(open)
  }

  const handleAutocompleteClick = () => {
    setDialogOpen(true)
  }

  const handleDialogClose = () => {
    setDialogOpen(false)
  }
  const closeDialog = () => {
    setDialogOpen(false)
  }
  const handleTextFieldClick = () => {
    setDialogOpen(true)
  }
  const openFormatDialog = () => {
    setFormatDialogOpen(true)
  }
  const handleFormatDialogClose = () => {
    setFormatDialogOpen(false)
  }
  const getOptionLabel = option => ` ${option.title}`

  const handleSwitchLanguage = () => {
    if (selectedFromLanguage && selectedLanguages.length > 1) {
      setSingleLanguageDialogOpen(true)
    } else if (selectedFromLanguage && selectedLanguages.length === 1) {
      const tempFromLanguage = { ...selectedFromLanguage }
      const tempToLanguage = { ...selectedLanguages[0] }

      setSelectedFromLanguage(tempToLanguage) // Update 'From' with 'To' language
      setSelectedLanguages([tempFromLanguage]) // Update 'To' with 'From' language

      // Update inputValue with swapped language
      setInputValue(`${tempFromLanguage.title}`)
    }
  }
  const errorDialogClose = () => {
    setSingleLanguageDialogOpen(false)
  }
  return (
    <Container>
      <Toolbar className='cat_tool_desc'>
        <Typography variant='h3'>The CAT tool that works for you</Typography>
        <form>
          <Toolbar container spacing={3} className='form_grid'>
            <FormGroup className='form_group'>
              <Typography variant='body1' gutterBottom>
                Project Name
              </Typography>
              <TextField
                id='project-name'
                variant='outlined'
                fullWidth
                required
                placeholder='Enter project name'
              />
            </FormGroup>

            <FormGroup className='form_group'>
              <Typography variant='body1' gutterBottom>
                From
              </Typography>
              <Autocomplete
                className='search_lang'
                value={selectedFromLanguage}
                disablePortal
                id='combo-box-demo'
                options={languages}
                onChange={handleFromLanguageChange}
                getOptionLabel={getOptionLabel}
                renderInput={params => (
                  <TextField {...params} variant='outlined' />
                )}
                PopperComponent={props => (
                  <Popper
                    {...props}
                    placement='bottom-start'
                    style={{ width: 'auto', minWidth: '300px' }}
                  />
                )}
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    <ListItemText
                      primary={
                        <span>
                          <span
                            className='code_lang'
                            style={{ fontWeight: 'bold' }}
                          >
                            {option.prelim}
                          </span>{' '}
                          {option.title}
                        </span>
                      }
                    />
                  </li>
                )}
              />
            </FormGroup>
            <span onClick={handleSwitchLanguage}>
              <img
                src='./img/switch_button.svg'
                alt=''
                className='switch_btn'
              />
            </span>

            {/* <p style={{cursor:"pointer"}} onClick={handleSwitchLanguage}>Switch Language</p> */}

            <FormGroup className='form_group'>
              <Typography variant='body1' gutterBottom>
                To
              </Typography>
              <Stack spacing={2}>
                <TextField
                  value={inputValue}
                  onClick={handleTextFieldClick}
                  placeholder='Select Languages'
                  fullWidth
                  variant='outlined'
                  InputProps={{
                    readOnly: true
                  }}
                />
              </Stack>
            </FormGroup>

            <FormGroup className='form_group'>
              <Typography variant='body1' gutterBottom>
                Select Subject
              </Typography>
              <Autocomplete
                disablePortal
                className='search_lang'
                id='combo-box-demo'
                options={[]}
                renderInput={params => <TextField {...params} />}
              />
            </FormGroup>

            <FormGroup className='form_group'>
              <Typography variant='body1' gutterBottom>
                TM & Glossary
                <InfoTooltip />
              </Typography>
              <Autocomplete
                disablePortal
                className='search_lang'
                id='combo-box-demo'
                options={[]}
                renderInput={params => <TextField {...params} />}
              />
            </FormGroup>

            <FormGroup>
              <Typography variant='body1' gutterBottom>
                &nbsp;
              </Typography>
              <FormControl
                fullWidth
                variant='outlined'
                className='sidebar_opening'
              >
                <Button onClick={toggleDrawer(true)}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                    width={'15px'}
                  >
                    <path d='M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z' />
                  </svg>{' '}
                  More Settings
                </Button>
              </FormControl>
            </FormGroup>
          </Toolbar>

          {/* dialog start */}

          <Toolbar>
            <Dialog
              open={dialogOpen}
              onClose={handleDialogClose}
              className='multilang_dialog'
            >
              <div
                style={{ display: 'flex', justifyContent: 'space-between' }}
                className='header_top'
              >
                <DialogTitle>Select Languages</DialogTitle>
                <button onClick={closeDialog}>
                  <svg width='18' height='18' fill='none' viewBox='0 0 24 24'>
                    <g clip-path='url(#a)'>
                      <path
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2.5'
                        d='M7 7l10 10M7 17L17 7'
                      ></path>
                    </g>
                    <defs>
                      <clipPath id='a'>
                        <path fill='#fff' d='M0 0h24v24H0z'></path>
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>

              <DialogContent className='dialog_content'>
                <div ref={autocompleteRef}>
                  <Toolbar className='w-100'>
                    <b>From</b>{' '}
                    <span>
                      {selectedFromLanguage
                        ? selectedFromLanguage.label
                        : 'Select a language'}
                    </span>
                  </Toolbar>
                  <Toolbar className='w-100'>
                    <b>To</b>
                    <Autocomplete
                      multiple
                      open={autocompleteOpen}
                      value={selectedLanguages}
                      onChange={handleChange}
                      options={languages}
                      disableCloseOnSelect
                      getOptionLabel={option =>
                        `${option.prelim} - ${option.title}`
                      }
                      renderOption={(props, option, { selected }) => (
                        <li {...props}>
                          <Checkbox
                            checked={selectedLanguages.some(
                              lang => lang.title === option.title
                            )}
                            style={{ marginRight: 8 }}
                          />
                          <ListItemText
                            primary={
                              <span>
                                <span
                                  className='code_lang'
                                  style={{ fontWeight: 'bold' }}
                                >
                                  {option.prelim}
                                </span>{' '}
                                {option.title}
                              </span>
                            }
                          />
                        </li>
                      )}
                      PopperComponent={props => (
                        <Popper
                          {...props}
                          id='target-language'
                          placement='bottom'
                        ></Popper>
                      )}
                      renderInput={params => (
                        <TextField
                          {...params}
                          className='selected-lang'
                          label='Select Languages'
                          variant='outlined'
                          autoFocus
                        />
                      )}
                      componentsProps={{
                        paper: {
                          sx: {
                            display: 'flex',
                            flexWrap: 'wrap',
                            flexDirection: 'row',
                            gap: '10px',
                            padding: '10px'
                          }
                        },
                        popper: {
                          sx: {
                            width: 'auto'
                          }
                        }
                      }}
                    />
                  </Toolbar>
                </div>
              </DialogContent>
              <DialogActions>
                {/* <Button onClick={handleDialogClose}>Cancel</Button> */}
                <Button onClick={handleDialogClose} className='btn_confirm'>
                  Confirm
                </Button>
              </DialogActions>
            </Dialog>
          </Toolbar>

          {/* dialog end  */}

          {/* error dialog start  */}

          <Toolbar>
            <Dialog
              open={singleLanguageDialogOpen}
              onClose={errorDialogClose}
              className='multilang_dialog warning_dialog'
            >
              <div
                style={{ display: 'flex', justifyContent: 'space-between' }}
                className='header_top'
              >
                <DialogTitle>Warning</DialogTitle>
                <button onClick={errorDialogClose}>X</button>
              </div>

              <DialogContent className='dialog_content'>
                <p>
                  Cannot swap languages when multiple target languages are
                  selected!
                </p>
              </DialogContent>
              <DialogActions>
                {/* <Button onClick={handleDialogClose}>Cancel</Button> */}
                <Button onClick={errorDialogClose} className='btn_confirm'>
                  ok
                </Button>
              </DialogActions>
            </Dialog>
          </Toolbar>
          {/* error dialog end  */}

          <Toolbar>
            <Dialog
              open={formatDialogOpen}
              onClose={handleFormatDialogClose}
              className='multilang_dialog'
            >
              <div
                style={{ display: 'flex', justifyContent: 'space-between' }}
                className='header_top'
              >
                <DialogTitle>Select Languages</DialogTitle>
                <button onClick={handleFormatDialogClose}>
                  <svg width='18' height='18' fill='none' viewBox='0 0 24 24'>
                    <g clip-path='url(#a)'>
                      <path
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2.5'
                        d='M7 7l10 10M7 17L17 7'
                      ></path>
                    </g>
                    <defs>
                      <clipPath id='a'>
                        <path fill='#fff' d='M0 0h24v24H0z'></path>
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
              <DialogContent className='dialog_content'>
                <div class='fileformat'>
                  <div class='format-box'>
                    <h3>Office</h3>
                    <div class='file-list'>
                      <div>
                        <span class='extdoc'>pages</span>
                      </div>
                      <div>
                        <span class='extdoc'>doc</span>
                      </div>
                      <div>
                        <span class='extdoc'>dot</span>
                      </div>
                      <div>
                        <span class='extdoc'>docx</span>
                      </div>
                      <div>
                        <span class='extdoc'>docm</span>
                      </div>
                      <div>
                        <span class='extdoc'>dotx</span>
                      </div>
                      <div>
                        <span class='extdoc'>dotm</span>
                      </div>
                      <div>
                        <span class='extdoc'>rtf</span>
                      </div>
                      <div>
                        <span class='extdoc'>odt</span>
                      </div>
                      <div>
                        <span class='extdoc'>ott</span>
                      </div>
                      <div>
                        <span class='extpdf'>pdf</span>
                      </div>
                      <div>
                        <span class='extxls'>numbers</span>
                      </div>
                      <div>
                        <span class='exttxt'>txt</span>
                      </div>
                      <div>
                        <span class='extxls'>xls</span>
                      </div>
                      <div>
                        <span class='extxls'>xlt</span>
                      </div>
                      <div>
                        <span class='extxls'>xlsx</span>
                      </div>
                      <div>
                        <span class='extxls'>xlsm</span>
                      </div>
                      <div>
                        <span class='extxls'>xltx</span>
                      </div>
                      <div>
                        <span class='extxls'>xltm</span>
                      </div>
                      <div>
                        <span class='extxls'>ods</span>
                      </div>
                      <div>
                        <span class='extxls'>ots</span>
                      </div>
                      <div>
                        <span class='extxls'>tsv</span>
                      </div>
                      <div>
                        <span class='extppt'>key</span>
                      </div>
                      <div>
                        <span class='extppt'>ppt</span>
                      </div>
                      <div>
                        <span class='extppt'>pps</span>
                      </div>
                      <div>
                        <span class='extppt'>pot</span>
                      </div>
                      <div>
                        <span class='extppt'>pptx</span>
                      </div>
                      <div>
                        <span class='extppt'>pptm</span>
                      </div>
                      <div>
                        <span class='extppt'>ppsx</span>
                      </div>
                      <div>
                        <span class='extppt'>ppsm</span>
                      </div>
                      <div>
                        <span class='extppt'>potx</span>
                      </div>
                      <div>
                        <span class='extppt'>potm</span>
                      </div>
                      <div>
                        <span class='extppt'>odp</span>
                      </div>
                      <div>
                        <span class='extppt'>otp</span>
                      </div>
                      <div>
                        <span class='extxml'>xml</span>
                      </div>
                      <div>
                        <span class='extzip'>zip</span>
                      </div>
                    </div>
                  </div>
                  <div class='format-box'>
                    <h3>Web</h3>
                    <div class='file-list'>
                      <div>
                        <span class='exthtm'>htm</span>
                      </div>
                      <div>
                        <span class='exthtm'>html</span>
                      </div>
                      <div>
                        <span class='exthtm'>xhtml</span>
                      </div>
                      <div>
                        <span class='extxml'>xml</span>
                      </div>
                      <div>
                        <span class='extxml'>dtd</span>
                      </div>
                      <div>
                        <span class='extxml'>json</span>
                      </div>
                      <div>
                        <span class='extxml'>jsont</span>
                      </div>
                      <div>
                        <span class='extxml'>jsont2</span>
                      </div>
                      <div>
                        <span class='extxml'>yaml</span>
                      </div>
                      <div>
                        <span class='extxml'>yml</span>
                      </div>
                      <div>
                        <span class='extxml'>md</span>
                      </div>
                    </div>
                  </div>
                  <div class='format-box'>
                    <h3>Scanned Files</h3>
                    <div class='file-list'>
                      <div>
                        <span class='extpdf'>pdf</span>
                      </div>
                      <div>
                        <span class='extimg'>bmp</span>
                      </div>
                      <div>
                        <span class='extimg'>png</span>
                      </div>
                      <div>
                        <span class='extimg'>gif</span>
                      </div>
                      <div>
                        <span class='extimg'>jpeg</span>
                      </div>
                      <div>
                        <span class='extimg'>jpg</span>
                      </div>
                      <div>
                        <span class='extimg'>jfif</span>
                      </div>
                      <div>
                        <span class='extimg'>tiff</span>
                      </div>
                    </div>
                  </div>
                  <div class='format-box'>
                    <h3>Interchange Formats</h3>
                    <div class='file-list'>
                      <div>
                        <span class='extxif'>xliff</span>
                      </div>
                      <div>
                        <span class='extxif'>sdlxliff</span>
                      </div>
                      <div>
                        <span class='exttmx'>tmx</span>
                      </div>
                      <div>
                        <span class='extttx'>ttx</span>
                      </div>
                      <div>
                        <span class='extxlf'>xlf</span>
                      </div>
                    </div>
                  </div>
                  <div class='format-box'>
                    <h3>Desktop Publishing</h3>
                    <div class='file-list'>
                      <div>
                        <span class='extmif'>mif</span>
                      </div>
                      <div>
                        <span class='extidd'>idml</span>
                      </div>
                      <div>
                        <span class='exticml'>icml</span>
                      </div>
                      <div>
                        <span class='extxml'>xml</span>
                      </div>
                      <div>
                        <span class='extdit'>dita</span>
                      </div>
                    </div>
                  </div>
                  <div class='format-box'>
                    <h3>Localization</h3>
                    <div class='file-list'>
                      <div>
                        <span class='extpro'>properties</span>
                      </div>
                      <div>
                        <span class='extres'>resx</span>
                      </div>
                      <div>
                        <span class='extxml'>xml</span>
                      </div>
                      <div>
                        <span class='extxml'>sxml</span>
                      </div>
                      <div>
                        <span class='extxml'>txml</span>
                      </div>
                      <div>
                        <span class='extdit'>dita</span>
                      </div>
                      <div>
                        <span class='extxml'>Android xml</span>
                      </div>
                      <div>
                        <span class='extstr'>strings</span>
                      </div>
                      <div>
                        <span class='extsbv'>sbv</span>
                      </div>
                      <div>
                        <span class='extsrt'>srt</span>
                      </div>
                      <div>
                        <span class='extvtt'>vtt</span>
                      </div>
                      <div>
                        <span class='extwix'>wix</span>
                      </div>
                      <div>
                        <span class='extpo'>po</span>
                      </div>
                      <div>
                        <span class='extg'>g</span>
                      </div>
                      <div>
                        <span class='exts'>QT linguist ts</span>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
              <DialogActions>
                {/* <Button onClick={handleDialogClose}>Cancel</Button> */}
                {/* <Button onClick={handleDialogClose} className="btn_confirm">Confirm</Button> */}
              </DialogActions>
            </Dialog>
          </Toolbar>
          <Paper
            className='drag_upload'
            variant='outlined'
            elevation={0}
            onDrop={handleFileDrop}
            onDragOver={handleDragOver}
          >
            <input
              type='file'
              id='file-input'
              style={{ display: 'none' }}
              multiple
              onChange={e => {
                const files = e.target.files
                // Handle selected files here (e.g., store them in state or perform any other actions)
                console.log(files)
              }}
            />
            <label htmlFor='file-input'>
              <IconButton component='span'>
                <UploadIcon />
              </IconButton>
              <Typography variant='h4'>
                Drop your files to translate them with Matecat
              </Typography>
              <Typography variant='body1'>or click here to browse</Typography>
            </label>
          </Paper>
        </form>
        <Toolbar className='form_bottom_bar'>
          <Typography variant='body1'>
            Matecat supports{' '}
            <Link>
              <span onClick={openFormatDialog}>80 file formats</span>
            </Link>{' '}
            and <Link>Google drive</Link> files
          </Typography>
          <Button type='submit' variant='contained' color='primary'>
            Analyze
          </Button>
        </Toolbar>
      </Toolbar>

      <Drawer
        anchor='right'
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        className='drawer_sidebar'
      >
        {/* Sidebar */}
        <Toolbar class='settings-panel-header'>
          <Toolbar class='settings-panel-header-logo'></Toolbar>
          <span>Settings</span>
          <Toolbar class='close-matecat-modal x-popup'>
            <svg
              onClick={toggleDrawer(false)}
              width='18'
              height='18'
              fill='none'
              viewBox='0 0 24 24'
            >
              <g clip-path='url(#a)'>
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2.5'
                  d='M7 7l10 10M7 17L17 7'
                ></path>
              </g>
              <defs>
                <clipPath id='a'>
                  <path fill='#fff' d='M0 0h24v24H0z'></path>
                </clipPath>
              </defs>
            </svg>
          </Toolbar>
        </Toolbar>

        <Toolbar className='sidebar_tabs'>
          <SideBarTabs />
        </Toolbar>
      </Drawer>
    </Container>
  )
}
