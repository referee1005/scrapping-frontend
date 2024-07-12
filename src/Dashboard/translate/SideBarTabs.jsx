import React, { useState } from 'react'
import {
  Tabs,
  Tab,
  Toolbar,
  Checkbox,
  FormControlLabel,
  Link,
  Typography,
  Switch,
  Select,
  FormControl,
  MenuItem
} from '@mui/material'

export default function SideBarTabs () {
  const [value, setValue] = useState(0)
  const [isToolbarVisible, setIsToolbarVisible] = useState(false)
  const [isTmxVisible, setIsTmxVisible] = useState(false)
  const handleButtonClick = () => {
    setIsToolbarVisible(!isToolbarVisible)
  }
  const handleImportClick = () => {
    setIsTmxVisible(!isTmxVisible)
  }
  const closeTMX = () => {
    setIsTmxVisible(false)
  }
  const closeTool = () => {
    setIsToolbarVisible(false)
  }

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const [checked, setChecked] = useState(false)

  const checkChange = event => {
    setChecked(event.target.checked)
  }

  const [tick, setToggled] = useState(false)

  const handletoggle = () => {
    setChecked(prev => !prev)
  }

  return (
    <Toolbar className='inner_tabs'>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label='sidebar tabs'
        className='tabs_head'
      >
        <Tab label='Translation Memory and Glossary' />
        <Tab label='Machine Translation' />
        <Tab label='Advanced settings' />
      </Tabs>

      <TabPanel value={value} index={0} className='sidebar_panel'>
        {/* Heading Content */}
        <Toolbar class='settings-panel-contentwrapper-active-tab'>
          <Typography variant='h3'>Translation Memory and Glossary</Typography>
          <span>
            Manage your language resources and select which should be used on
            your new project.{' '}
            <a href='#' target='_blank'>
              More details
            </a>
          </span>
        </Toolbar>

        <Toolbar className='translation-memory-glossary-tab'>
          <Toolbar className='translation-memory-glossary-tab-pre-translate label_pre'>
            <FormControlLabel
              control={<Checkbox checked={checked} onChange={checkChange} />}
              label='Pre-translate 100% matches from TM'
              data-testid='pretranslate-checkbox'
            />
          </Toolbar>

          <Toolbar class='tab-table-title'>
            <h2>Active Resources</h2>
            <button
              onClick={handleButtonClick}
              class='ui primary button settings-panel-button-icon'
              data-testid='new-resource-tm'
            >
              <svg width='18' height='18' viewBox='0 0 32 32'>
                <path
                  fill-rule='evenodd'
                  fill='currentColor'
                  d='M31 12H20V1a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v11H1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h11v11a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V20h11a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1z'
                ></path>
              </svg>{' '}
              New resource
            </button>
          </Toolbar>

          {/* Setting Admin Panel */}

          <Toolbar class='settings-panel-table'>
            <Toolbar>
              <Toolbar class='settings-panel-table-rowHeading'>
                <Toolbar class='Heading-column'>Lookup</Toolbar>
                <Toolbar class='Heading-column'>Update</Toolbar>
                <Toolbar class='Heading-column'></Toolbar>
                <Toolbar class='Heading-column'></Toolbar>
                <Toolbar class='Heading-column'></Toolbar>
              </Toolbar>
            </Toolbar>
            <Toolbar class='settings-panel-table-rows-container'>
              <Toolbar
                class='settings-panel-row'
                draggable='false'
                data-testid='settings-panel-table-row-mmSharedKey'
              >
                <Toolbar class='settings-panel-row-content  row-content-default-memory'>
                  <Toolbar class='tm-key-lookup align-center'>
                    <input type='checkbox' />
                  </Toolbar>
                  <Toolbar class='tm-key-update align-center'>
                    <input
                      type='checkbox'
                      title='Add a private resource to disable updating'
                    />
                  </Toolbar>
                  <Toolbar>
                    <input
                      class='tm-key-row-name tm-key-row-name-disabled'
                      disabled
                      value='MyMemory: Collaborative translation memory shared with all Matecat users.'
                    />
                  </Toolbar>
                  <Toolbar class='tm-key-row-key'></Toolbar>
                  <Toolbar
                    title='Public translation memory'
                    class='align-center tm-key-row-icons'
                  >
                    <svg width='16' height='16' viewBox='0 0 32 32'>
                      <path
                        fill-rule='evenodd'
                        fill='currentColor'
                        d='M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm0 30c-1.967 0-3.84-.407-5.538-1.139l7.286-8.197a.998.998 0 0 0 .253-.664v-3a1 1 0 0 0-1-1c-3.531 0-7.256-3.671-7.293-3.707A1 1 0 0 0 9.001 12h-4a1 1 0 0 0-1 1v6c0 .379.214.725.553.894l3.447 1.724v5.871c-3.627-2.53-6-6.732-6-11.489 0-2.147.484-4.181 1.348-6h3.652c.265 0 .52-.105.707-.293l4-4A1 1 0 0 0 12.001 5V2.581a14.013 14.013 0 0 1 4-.581c2.2 0 4.281.508 6.134 1.412A5.961 5.961 0 0 0 20.002 8c0 1.603.624 3.109 1.757 4.243a5.985 5.985 0 0 0 4.536 1.751c.432 1.619 1.211 5.833-.263 11.635a.936.936 0 0 0-.026.163A13.956 13.956 0 0 1 16.002 30z'
                      ></path>
                    </svg>
                  </Toolbar>
                  <Toolbar class='tm-key-row-menu-button'>
                    <button onClick={handleImportClick}>Import TMX</button>
                  </Toolbar>
                </Toolbar>
                <Toolbar class='settings-panel-row-extra-content'></Toolbar>
              </Toolbar>
            </Toolbar>

            {isTmxVisible && (
              <Toolbar class='settings-panel-row-extra-content settings-panel-row-extra-content-expanded'>
                <Toolbar class='translation-memory-glossary-tab-import'>
                  <form class='action-form'>
                    <Toolbar>
                      <span>Select a tmx file to import</span>
                      <input type='file' />
                    </Toolbar>
                    <Toolbar class='translation-memory-glossary-tab-buttons-group align-center'>
                      <button
                        onClick={closeTMX}
                        type='reset'
                        class='ui button orange close-button'
                      >
                        <svg
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
                      </button>
                    </Toolbar>
                  </form>
                </Toolbar>
              </Toolbar>
            )}

            {isToolbarVisible && (
              <Toolbar className='settings-panel-row'>
                <Toolbar className='settings-panel-row-content row-content-create-resource'>
                  <form className='settings-panel-row-content'>
                    <Toolbar className='tm-key-lookup align-center'>
                      <input type='checkbox' checked='' />
                    </Toolbar>
                    <Toolbar className='tm-key-update align-center'>
                      <input type='checkbox' checked='' />
                    </Toolbar>
                    <Toolbar>
                      <input
                        placeholder='Please insert a name for the resource'
                        className='tm-key-create-resource-row-input'
                      />
                    </Toolbar>
                    <Toolbar></Toolbar>
                    <Toolbar></Toolbar>
                    <Toolbar className='translation-memory-glossary-tab-buttons-group'>
                      <button
                        className='ui primary button settings-panel-button-icon confirm-button'
                        type='submit'
                        disabled=''
                        data-testid='create-tmkey-confirm'
                      >
                        <svg width='12' height='12' viewBox='0 0 32 32'>
                          <path
                            fillRule='evenodd'
                            fill='currentColor'
                            d='M27 4l-15 15-7-7-5 5 12 12 20-20z'
                          />
                        </svg>
                        Confirm
                      </button>
                      <button
                        onClick={closeTool}
                        className='ui button orange close-button'
                        type='reset'
                      >
                        <svg
                          width='18'
                          height='18'
                          fill='none'
                          viewBox='0 0 24 24'
                        >
                          <g clipPath='url(#a)'>
                            <path
                              stroke='currentColor'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2.5'
                              d='M7 7l10 10M7 17L17 7'
                            />
                          </g>
                          <defs>
                            <clipPath id='a'>
                              <path fill='#fff' d='M0 0h24v24H0z' />
                            </clipPath>
                          </defs>
                        </svg>
                      </button>
                    </Toolbar>
                  </form>
                </Toolbar>
                <Toolbar className='settings-panel-row-extra-content'></Toolbar>
              </Toolbar>
            )}
          </Toolbar>

          <Toolbar class='tab-table-title inactive_Res'>
            <Typography variant='h2'>Inactive Resources</Typography>
            <input type='text' placeholder='Search Resources' />
          </Toolbar>

          <Toolbar className='login_btn'>
            <button>Login to see your TM</button>
          </Toolbar>
        </Toolbar>
      </TabPanel>

      <TabPanel value={value} index={1} className='sidebar_panel'>
        {/* Heading Content */}
        <Toolbar class='settings-panel-contentwrapper-active-tab'>
          <Typography variant='h3'>Machine Translation</Typography>
          <span>
            Manage your machine translation engines and select which should be
            used on your new project.{' '}
            <a href='#' target='_blank'>
              More details
            </a>
          </span>
        </Toolbar>

        <Toolbar className='translation-memory-glossary-tab'>
          <Toolbar class='tab-table-title'>
            <Typography variant='h2'>Active MT</Typography>
          </Toolbar>

          {/* Setting Admin Panel */}

          <Toolbar class='settings-panel-table machine_trans'>
            <Toolbar>
              <Toolbar class='settings-panel-table-rowHeading'>
                <Toolbar class='Heading-column'>Engine Name</Toolbar>
                <Toolbar class='Heading-column'>Description</Toolbar>
                <Toolbar class='Heading-column'>Use in this project</Toolbar>
                <Toolbar class='Heading-column'>Action</Toolbar>
              </Toolbar>
            </Toolbar>
            <Toolbar class='settings-panel-table-rows-container'>
              <Toolbar
                class='settings-panel-row'
                draggable='false'
                data-testid='settings-panel-table-row-mmSharedKey'
              >
                <Toolbar class='settings-panel-row-content  row-content-default-memory'>
                  <Toolbar class='tm-key-lookup align-center'>
                    ModernMT Lite
                    <Link to='/' target='_blank'>
                      <svg
                        width='16'
                        height='16'
                        viewBox='0 0 32 32'
                        fill-rule='evenodd'
                        fill='currentColor'
                      >
                        <path d='M14 9.5c0-.825.675-1.5 1.5-1.5h1c.825 0 1.5.675 1.5 1.5v1c0 .825-.675 1.5-1.5 1.5h-1c-.825 0-1.5-.675-1.5-1.5v-1zM20 24h-8v-2h2v-6h-2v-2h6v8h2z'></path>
                        <path d='M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm0 29C8.82 29 3 23.18 3 16S8.82 3 16 3s13 5.82 13 13-5.82 13-13 13z'></path>
                      </svg>
                    </Link>
                  </Toolbar>
                  <Toolbar class='tm-key-update align-center'>
                    Smart machine translation that learns from your corrections
                    for enhanced quality and productivity thanks to ModernMT’s
                    basic features. To unlock all features,{' '}
                    <Link to='/'>click here</Link>.
                  </Toolbar>
                  <Toolbar>
                    <input type='checkbox' />
                  </Toolbar>
                  <Toolbar class='tm-key-row-key'></Toolbar>
                </Toolbar>
                <Toolbar class='settings-panel-row-extra-content'></Toolbar>
              </Toolbar>
            </Toolbar>
          </Toolbar>

          <Toolbar className='login_btn machine_t_btn'>
            <button>Login to see your custom MT engines</button>
          </Toolbar>
        </Toolbar>
      </TabPanel>

      <TabPanel value={value} index={2} className='sidebar_panel'>
        {/* Heading Content */}
        <Toolbar class='settings-panel-contentwrapper-active-tab'>
          <Typography variant='h3'>Advanced settings</Typography>
          <span>Advanced settings for your project</span>
        </Toolbar>

        <Toolbar class='translation-memory-glossary-tab advance_setting'>
          <Toolbar className='option_box'>
            <Toolbar class='option-description'>
              <Typography variant='h2'>Dictation</Typography>
              <Typography variant='body1'>
                <span class='option-s2t-box-chrome-label'>
                  Available on Chrome.{' '}
                </span>
                Improved accessibility thanks to a speech-to-text component to
                dictate your translations instead of typing them.
              </Typography>
            </Toolbar>
            <Toolbar>
              <FormControlLabel
                control={<Switch tick={checked} onChange={handletoggle} />}
                label={tick ? 'Active' : 'Inactive'}
              />
            </Toolbar>
          </Toolbar>

          <Toolbar className='option_box'>
            <Toolbar class='option-description'>
              <Typography variant='h2'>Guess tag position</Typography>
              <Typography variant='body1'>
                <span class='option-tagp-languages'>
                  Not available for:
                  <span class='option-notsupported-languages'>
                    Eastern Yiddish - Aragonese, Eastern Yiddish - French
                    (Canada), Eastern Yiddish - Maa, Eastern Yiddish - Sinhala
                  </span>
                  .<br />
                </span>
                Enable this functionality to let Matecat automatically place the
                tags where they belong.
                <Link class='tooltip-options' href='#' target='_blank'>
                  Supported languages
                </Link>
              </Typography>
            </Toolbar>
            <Toolbar>
              <FormControlLabel
                control={<Switch tick={checked} onChange={handletoggle} />}
                label={tick ? 'Available' : 'Unavailable'}
              />
            </Toolbar>
          </Toolbar>

          <Toolbar className='option_box'>
            <Toolbar class='option-description'>
              <Typography variant='h2'>
                QA by <img src='./img/lexiqa-new.png' alt='Lexiwa New' />
              </Typography>
              <Typography variant='body1'>
                <span class='option-qa-box-languages'>
                  Not available for:
                  <span class='option-notsupported-languages'>
                    Aragonese, Maa, Eastern Yiddish
                  </span>
                  .<br />
                </span>
                Linguistic QA with automated checks for punctuation, numerals,
                links, symbols, etc.
                <Link class='tooltip-options' href='#' target='_blank'>
                  Supported languages
                </Link>
              </Typography>
            </Toolbar>
            <Toolbar>
              <FormControlLabel
                control={<Switch tick={checked} onChange={handletoggle} />}
                label={tick ? 'Available' : 'Unavailable'}
              />
            </Toolbar>
          </Toolbar>

          <Toolbar className='option_box'>
            <Toolbar class='option-description'>
              <Typography variant='h2'>Cross-language Matches</Typography>
              <Typography variant='body1'>
                Get translation suggestions in other target languages you know
                as reference.
              </Typography>
            </Toolbar>
            <Toolbar className='selectables_option'>
              <FormControl fullWidth variant='outlined'>
                <Select id='type-form' value='' required>
                  <MenuItem value=''>Select Type Form & To</MenuItem>
                  <MenuItem value='type1'>Type 1</MenuItem>
                  <MenuItem value='type2'>Type 2</MenuItem>
                  {/* Add more MenuItem components as needed */}
                </Select>
              </FormControl>
              <FormControl fullWidth variant='outlined'>
                <Select id='type-form' value='' required>
                  <MenuItem value=''>Select Type Form & To</MenuItem>
                  <MenuItem value='type1'>Type 1</MenuItem>
                  <MenuItem value='type2'>Type 2</MenuItem>
                  {/* Add more MenuItem components as needed */}
                </Select>
              </FormControl>
            </Toolbar>
          </Toolbar>

          <Toolbar className='option_box'>
            <Toolbar class='option-description'>
              <Typography variant='h2'>Segmentation Rules</Typography>
              <Typography variant='body1'>
                Select how sentences are split according to specific types of
                content.
              </Typography>
              <Toolbar>
                <Typography variant='body1'>
                  <b>General</b> - Generates a new segment at the end of each
                  layout element (e.g. a paragraph, a table cell etc.) and every
                  time a strong punctuation mark is detected (e.g. full stop,
                  exclamation mark).
                </Typography>
                <Typography variant='body1'>
                  <b>Patent</b> - Works like the general rule, but includes a
                  series of exceptions for abbreviations used commonly in
                  patents.
                </Typography>
                <Typography variant='body1'>
                  <b>Paragraph</b> - Only generates a new segment at the end of
                  each layout element (e.g. a paragraph, a table cell etc.).
                </Typography>
              </Toolbar>
            </Toolbar>
            <Toolbar className='selectables_option'>
              <FormControl fullWidth variant='outlined'>
                <Select id='type-form' value='' required>
                  <MenuItem value=''>Select Type Form & To</MenuItem>
                  <MenuItem value='type1'>Type 1</MenuItem>
                  <MenuItem value='type2'>Type 2</MenuItem>
                  {/* Add more MenuItem components as needed */}
                </Select>
              </FormControl>
            </Toolbar>
          </Toolbar>
        </Toolbar>
      </TabPanel>
    </Toolbar>
  )
}

function TabPanel (props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`sidebar-tabpanel-${index}`}
      aria-labelledby={`sidebar-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  )
}
