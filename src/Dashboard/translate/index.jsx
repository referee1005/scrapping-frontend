import React from 'react'
import { useState } from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import Checkbox from '@mui/material/Checkbox'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import ItemFooter from './ItemFooter'
import TranslateFooter from './TranslateFooter'
import IconButton from '@mui/material/IconButton'
import AlarmIcon from '@mui/icons-material/Alarm'
import BorderVerticalIcon from '@mui/icons-material/BorderVertical'
import { Typography, Toolbar, Drawer } from '@mui/material'
import zIndex from '@mui/material/styles/zIndex'
import SideBarTabs from './SideBarTabs'
import Badge from '@mui/material/Badge'
import { styled } from '@mui/material/styles'
import Setting from './setting'
import AddCommentButton from './AddCommentButton'
import Comment from './Comment'
import ItemCheck from './ItemCheck'
import ItemContainer from './ItemContainer'
import PrivateResource from './PrivateResource'
import TransNavbar from './TransNavbar'
const dummyText = [
  {
    source:
      'Created BI applications with QlikView, Tableau, and Power BI for marketing, customer acquisition, CRM, responsible gaming, payments, and finance',
    target:
      'Created BI applications with QlikView, Tableau, and Power BI for marketing, customer acquisition, CRM, responsible gaming, payments, and finance.'
  },
  {
    source:
      'Created BI applications with QlikView, Tableau, and Power BI for marketing, customer acquisition, CRM, responsible gaming, payments, and finance',
    target:
      'Created BI applications with QlikView, Tableau, and Power BI for marketing, customer acquisition, CRM, responsible gaming, payments, and finance.'
  },
  {
    source:
      'Created BI applications with QlikView, Tableau, and Power BI for marketing, customer acquisition, CRM, responsible gaming, payments, and finance',
    target:
      'Created BI applications with QlikView, Tableau, and Power BI for marketing, customer acquisition, CRM, responsible gaming, payments, and finance.'
  },
  {
    source:
      'Created BI applications with QlikView, Tableau, and Power BI for marketing, customer acquisition, CRM, responsible gaming, payments, and finance',
    target:
      'Created BI applications with QlikView, Tableau, and Power BI for marketing, customer acquisition, CRM, responsible gaming, payments, and finance.'
  }
]
function Editor () {
  const [checked, setChecked] = React.useState([])
  const [editvalue, setValue] = React.useState(-1)
  const [hover, setHover] = React.useState(null)
  const [setting, visibleSettings] = React.useState(false)
  const [splitSegment, setSplitSegment] = React.useState(false)
  const [commentModal, visibleCommentModal] = React.useState(false)
  const [translated, setTranslated] = React.useState([])
  const [text, setText] = useState(dummyText)
  const [sText, setSearchText] = useState({})

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    setChecked(newChecked)
  }
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      height: 13,
      transform: 'translate(35px, 5px)'
    }
  }))

  const searchText = (source, target) => {
    setText(
      dummyText.filter((value, index) => {
        if (
          value['source'].includes(source) &&
          value['target'].includes(target)
        ) {
          return true
        } else return false
      })
    )
    // setSearchText({ source, target })
    console.log(source, target)
  }
  return (
    <>
      <TransNavbar searchText={searchText} />
      <div style={{ height: '100vh' }}>
        <div
          className='landscape'
          style={
            commentModal
              ? {
                  scale: '85%',
                  transform: 'translate(-9%, 0)'
                }
              : {}
          }
        >
          <div
            class='fileformat'
            style={{
              padding: '0px 80px',
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'center'
            }}
          >
            <div class='format-box' style={{ maxWidth: 120 }}>
              <div class='file-list'>
                <div>
                  <span
                    class='extxif'
                    style={{ fontWeight: 600, fontSize: 12 }}
                  >
                    doc2.rtf
                  </span>
                </div>
              </div>
            </div>
            <div style={{ fontSize: 13 }}>Payale words: 20.1</div>
          </div>
          <List
            dense
            sx={{
              width: '100%',
              maxWidth: '100%',
              bgcolor: 'background.paper'
            }}
          >
            {text.map((value, index) => {
              console.log('ttttt', text)
              const labelId = `checkbox-list-secondary-label-${value}`
              return (
                <>
                  <Grid
                    container
                    onMouseMove={() => setHover(index)}
                    onMouseLeave={() => setHover(null)}
                    columns={30}
                  >
                    <Grid items xs={29}>
                      <ListItem
                        key={value}
                        disablePadding
                        style={{
                          alignItems: 'start',
                          justifyContent: 'center'
                        }}
                      >
                        <ItemCheck
                          hover={hover}
                          value={value}
                          editvalue={editvalue}
                          checked={checked}
                          index={index}
                          labelId={labelId}
                          handleToggle={handleToggle}
                          setSplitSegment={() => setSplitSegment(!splitSegment)}
                        />
                        <div
                          style={
                            editvalue === value
                              ? {
                                  scale: '102%',
                                  borderRadius: '5px 5px 0px 0px',
                                  zIndex: 1,
                                  flex: 1,
                                  borderTop: 20,
                                  borderLeft: 1,
                                  borderColor: '#eaebee',
                                  borderStyle: 'solid'
                                }
                              : {
                                  background: '#d9e0e8',
                                  flex: 1,
                                  border: '1px solid #aebdcd'
                                }
                          }
                        >
                          <Box
                            component='section'
                            sx={{ p: 2 }}
                            style={Object.assign(
                              editvalue === value ? { paddingBottom: 0 } : {},
                              translated.includes(index)
                                ? {
                                    border: 0,
                                    borderRight: 10,
                                    borderRightColor: '#2fb177',
                                    borderStyle: 'solid'
                                  }
                                : {}
                            )}
                            onClick={() => {
                              setValue(value)
                            }}
                          >
                            <ItemContainer
                              editvalue={editvalue}
                              value={value}
                              splitSegment={splitSegment}
                              invisibleSplitSegment={() =>
                                setSplitSegment(false)
                              }
                              tranlateGroup={translated}
                              setTranslated={() =>
                                setTranslated([...translated, index])
                              }
                              visibleModal={() => visibleCommentModal(false)}
                              text={text[index]}
                              sText={sText}
                            />
                          </Box>
                          {editvalue === value && (
                            <PrivateResource
                              visibleSettings={visibleSettings}
                            />
                          )}
                        </div>
                      </ListItem>
                    </Grid>
                    <Grid items xs={1}>
                      {commentModal && editvalue === value && (
                        <Comment
                          visibleModal={() => visibleCommentModal(false)}
                        />
                      )}
                      {editvalue === value && hover === index && (
                        <AddCommentButton
                          visibleModal={e => visibleCommentModal(e)}
                        />
                      )}
                    </Grid>
                  </Grid>
                </>
              )
            })}
          </List>
          <Setting setting={setting} visibleSetting={e => visibleSettings(e)} />
        </div>
        <TranslateFooter />
      </div>
    </>
  )
}

export default Editor
