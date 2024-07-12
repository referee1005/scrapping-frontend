import React from 'react'
import { Typography, Toolbar, Drawer } from '@mui/material'
import SideBarTabs from './SideBarTabs'

function Editor ({ setting = false, visibleSetting }) {
  // const [setting, setPResouce] = React.useState(false)

  return (
    <Drawer
      anchor='right'
      open={setting}
      onClose={() => visibleSetting(false)}
      className='drawer_sidebar'
    >
      <Toolbar class='settings-panel-header'>
        <Toolbar class='settings-panel-header-logo'></Toolbar>
        <span>Settings</span>
        <Toolbar class='close-matecat-modal x-popup'>
          <svg
            onClick={() => visibleSetting(false)}
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
  )
}

export default Editor
