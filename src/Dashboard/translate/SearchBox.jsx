import React, { useState } from 'react'
import Button from '@mui/material/Button'
import './searchBox.css'
import CancelIcon from '@mui/icons-material/Cancel'

export default function Navbar ({ searchText, searchCount }) {
  const [openLoginModal, setOpenLoginModal] = useState(false)
  const [sourceText, setSourceText] = useState('')
  const [targetText, setTargetText] = useState('')
  const [sourcetempText, setSourceTempText] = useState('')
  const [targettempText, setTargetTempText] = useState('')
  const [visibleSegement, setVisibleSegment] = useState(false)
  const [segment, setSegment] = useState(0)
  const [visibleCancel, setVisibleCancel] = useState(false)

  const openLogin = () => {
    setOpenLoginModal(true)
  }
  const closeLogin = () => {
    setOpenLoginModal(false)
  }
  const changeSegment = segment => {
    let change
    if (segment === 1) {
      change =
        " <div class='item' data-value='TRANSLATED'><div class='ui new-color empty circular label'></div>NEW</div>"
    } else if (segment === 2) {
      change =
        "<div class='item' data-value='TRANSLATED'><div class='ui draft-color empty circular label'></div>DRAFT</div>"
    } else if (segment === 3) {
      change =
        "<div class='item' data-value='TRANSLATED'><div class='ui translated-color empty circular label'></div>TRANSLATED</div>"
    } else if (segment === 4) {
      change =
        "<div class='item' data-value='TRANSLATED'><div class='ui approved-color empty circular label'></div>APPROVED</div>"
    } else change = '<div>Status Segment</div>'

    document.getElementsByClassName('text')[0].innerHTML = change
    setSegment(segment)
    setVisibleSegment(false)
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
                          value={sourcetempText}
                          onChange={event =>
                            setSourceTempText(event.target.value)
                          }
                          style={{ width: '100%' }}
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
                            value={targettempText}
                            onChange={event =>
                              setTargetTempText(event.target.value)
                            }
                            style={{ width: '100%' }}
                          />
                        </div>
                        <div class='enable-replace-check disabled'>
                          <input type='checkbox' tabindex='5' />
                          <label> Replace with</label>
                        </div>
                      </div>
                    </div>
                    <div class='find-element find-dropdown-status'>
                      <div class='find-dropdown not-filtered'>
                        <div
                          class='ui top left pointing dropdown basic tiny button'
                          tabindex='0'
                          onMouseOver={() => {
                            if (segment) {
                              setVisibleCancel(true)
                            }
                          }}
                          onMouseOut={(_, w, e) => {
                            if (segment) setVisibleCancel(false)
                          }}
                          style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                          }}
                        >
                          <div
                            class='text'
                            style={{ width: 150, height: 40 }}
                            onClick={() => setVisibleSegment(!visibleSegement)}
                          >
                            <div>Status Segment</div>
                          </div>
                          <div
                            className='cancel'
                            style={{
                              display: visibleCancel ? 'inline' : 'none'
                            }}
                          >
                            <CancelIcon
                              onMouseOver={() => {
                                setVisibleCancel(true)
                              }}
                              onClick={() => {
                                changeSegment(0)
                                setVisibleCancel(false)
                              }}
                            />
                          </div>
                          {/* )} */}
                          {visibleSegement && (
                            <div class='menu transition visible' tabindex='-1'>
                              <div
                                class='item'
                                data-value='NEW'
                                onClick={() => changeSegment(1)}
                              >
                                <div class='ui new-color empty circular label'></div>
                                NEW
                              </div>
                              <div
                                class='item'
                                data-value='DRAFT'
                                onClick={() => changeSegment(2)}
                              >
                                <div class='ui draft-color empty circular label'></div>
                                DRAFT
                              </div>
                              <div
                                class='item'
                                data-value='TRANSLATED'
                                onClick={() => changeSegment(3)}
                              >
                                <div class='ui translated-color empty circular label'></div>
                                TRANSLATED
                              </div>
                              <div
                                class='item'
                                data-value='APPROVED'
                                onClick={() => changeSegment(4)}
                              >
                                <div class='ui approved-color empty circular label'></div>
                                APPROVED
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div class='find-element find-clear-all'>
                      {(sourcetempText || targettempText) && (
                        <div
                          class='find-clear'
                          onClick={() => {
                            setSourceTempText('')
                            setTargetTempText('')
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
                        onClick={() => {
                          setSourceText(sourcetempText)
                          setTargetText(targettempText)
                          searchText(sourcetempText, targettempText)
                        }}
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
                    {!searchCount[0] && (sourceText || targetText) ? (
                      <span class='numbers'>
                        {' '}
                        No segments found having{' '}
                        <span style={{ background: 'yellow' }}>
                          {sourceText}
                        </span>{' '}
                        in source{' '}
                        <span style={{ background: 'yellow' }}>
                          {targetText}
                        </span>{' '}
                        in target (case insensitive)'
                      </span>
                    ) : null}
                    {searchCount[0] && sourceText && targetText ? (
                      <span class='numbers'>
                        Found {searchCount[1]} segments having{' '}
                        <span style={{ background: 'yellow' }}>
                          {sourceText}
                        </span>{' '}
                        in source{' '}
                        <span style={{ background: 'yellow' }}>
                          {' '}
                          {targetText}
                        </span>{' '}
                        in target (case insensitive)
                      </span>
                    ) : searchCount[0] && (sourceText || targetText) ? (
                      <span class='numbers'>
                        Found {searchCount[0]} results in {searchCount[1]}{' '}
                        segments having
                        <span style={{ background: 'yellow' }}>
                          {sourceText}
                        </span>{' '}
                        in source{' '}
                        <span style={{ background: 'yellow' }}>
                          {' '}
                          {targetText}
                        </span>{' '}
                        in target (case insensitive)
                      </span>
                    ) : null}
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
