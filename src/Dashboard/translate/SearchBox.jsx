import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Button from '@mui/material/Button'
import { Link } from '@mui/material'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import './searchBox.css'

export default function Navbar ({ searchText }) {
  const [openLoginModal, setOpenLoginModal] = useState(false)
  const [sourceText, setSourceText] = useState('')
  const [targetText, setTargetText] = useState('')

  const openLogin = () => {
    setOpenLoginModal(true)
  }
  const closeLogin = () => {
    setOpenLoginModal(false)
  }

  return (
    <>
      <div id='header-bars-wrapper'>
        <div>
          <div class='ui form'>
            <div class='find-wrapper'>
              <div class='find-container'>
                <div class='find-container-inside'>
                  <div class='find-list'>
                    <div class='find-element ui input'>
                      <div class='find-in-source'>
                        <input
                          type='text'
                          tabindex='1'
                          placeholder='Find in source'
                          value={sourceText}
                          onChange={event => setSourceText(event.target.value)}
                          // value=''
                        />
                      </div>
                      <div class='find-exact-match'>
                        <div class='exact-match'>
                          <input type='checkbox' tabindex='3' />
                          <label> Match Case</label>
                        </div>
                        <div class='exact-match'>
                          <input type='checkbox' tabindex='4' />
                          <label> Whole word</label>
                        </div>
                      </div>
                    </div>
                    <div class='find-element-container'>
                      <div class='find-element ui input'>
                        <div class='find-in-target'>
                          <input
                            type='text'
                            tabindex='2'
                            placeholder='Find in target'
                            value={targetText}
                            onChange={event =>
                              setTargetText(event.target.value)
                            }
                            // value=''
                          />
                        </div>
                        <div class='enable-replace-check disabled'>
                          <input type='checkbox' tabindex='5' />
                          <label> Replace with</label>
                        </div>
                      </div>
                    </div>
                    <div class='find-element find-dropdown-status'>
                      <div class='find-dropdown not-filtered disabled'>
                        <div
                          class='ui top left pointing dropdown basic tiny button'
                          tabindex='0'
                        >
                          <div class='text'>
                            <div>Status Segment</div>
                          </div>
                          <div class='ui cancel label'>
                            <i class='icon-cancel3'></i>
                          </div>
                          <div class='menu' tabindex='-1'>
                            <div class='item' data-value='NEW'>
                              <div class='ui new-color empty circular label'></div>
                              NEW
                            </div>
                            <div class='item' data-value='DRAFT'>
                              <div class='ui draft-color empty circular label'></div>
                              DRAFT
                            </div>
                            <div class='item' data-value='TRANSLATED'>
                              <div class='ui translated-color empty circular label'></div>
                              TRANSLATED
                            </div>
                            <div class='item' data-value='APPROVED'>
                              <div class='ui approved-color empty circular label'></div>
                              APPROVED
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class='find-element find-clear-all'>
                      {(sourceText || targetText) && (
                        <div
                          class='find-clear'
                          onClick={() => {
                            setSourceText('')
                            setTargetText('')
                          }}
                        >
                          <button type='button' class=''>
                            Clear
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <div class='find-actions'>
                      {/* <button
                        class='ui basic tiny button'
                        onClick={() => searchText(sourceText, targetText)}
                      >
                        FIND
                      </button> */}
                      <Button
                        variant='outlined'
                        onClick={() => searchText(sourceText, targetText)}
                        // disabled
                      >
                        FIND
                      </Button>
                      <Button
                        variant='outlined'
                        onClick={() => searchText(sourceText, targetText)}
                        // disabled
                      >
                        REPLACE
                      </Button>
                      <Button
                        variant='outlined'
                        onClick={() => searchText(sourceText, targetText)}
                        // disabled
                      >
                        REPLACE ALL
                      </Button>
                      {/* <button class='ui basic tiny button disabled'>
                        REPLACE
                      </button>
                      <button class='ui basic tiny button disabled'>
                        REPLACE ALL
                      </button> */}
                    </div>
                  </div>
                </div>
                <div class='search-display'>
                  <p class='found'>
                    <span class='numbers'>No segments found</span> having
                    <span class='query'>
                      <span class='param'>text</span>in source{' '}
                    </span>{' '}
                    (case insensitive)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
