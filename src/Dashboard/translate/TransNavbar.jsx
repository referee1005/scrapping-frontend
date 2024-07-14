import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Button from '@mui/material/Button'
import { Link } from '@mui/material'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import SearchBox from './SearchBox'

export default function Navbar ({ searchText, searchCount }) {
  const [searchBox, visibleSearchBox] = useState(false)
  const [openLoginModal, setOpenLoginModal] = useState(false)
  const openLogin = () => {
    setOpenLoginModal(true)
  }
  const closeLogin = () => {
    setOpenLoginModal(false)
  }
  return (
    <>
      <AppBar position='static' className='header_bar'>
        <Toolbar>
          <Toolbar className='logo_branding'>LingoWorld</Toolbar>
          <div class='icon-container'>
            <span
              id='project-badge'
              className='translate_navbar_folder_badge_icon'
            >
              <span>1</span>
            </span>
            <div className='translate_navbar_folder_icon' />
            <div style={{ marginLeft: 10 }}>doc2.rtf</div>
          </div>
          <Toolbar className='navigation ml-auto'>
            <Link color='inherit'>
              <button
                style={{
                  width: 45,
                  height: 45,
                  scale: '70%'
                }}
                className='translate_navbar_download_icon'
              ></button>
            </Link>
            <Link color='inherit'>
              <div
                class='action-submenu ui floating'
                id='quality-report-button'
                title='Quality Report'
              >
                <div
                  id='quality-report'
                  class=''
                  data-testid='report-button'
                  data-vote=''
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    x='0'
                    y='0'
                    enableBackground='new 0 0 42 42'
                    version='1.1'
                    viewBox='0 0 42 42'
                    xmlSpace='preserve'
                    width='30px'
                    height='30px'
                  >
                    <path
                      d='M2 0h36c1.1 0 2 .9 2 2v36c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z'
                      className='st0'
                      transform='translate(1 1)'
                      fill='none'
                      stroke='#FAFAFA'
                    />
                    <g className='st1'>
                      <path
                        fill='#FFFFFF'
                        d='M17.5 25.4l1.8 2.1-1.9 1.5-1.9-2.3c-1 .5-2.2.7-3.5.7-4.9 0-7.9-3.6-7.9-8.3 0-4.7 3-8.3 7.9-8.3s7.9 3.6 7.9 8.3c.1 2.6-.9 4.8-2.4 6.3zM12 13.5c-3.2 0-5 2.4-5 5.7 0 3.3 1.8 5.7 5 5.7.6 0 1.2-.1 1.7-.4l-1.6-1.9 1.8-1.4 1.8 2.1c.9-1 1.4-2.4 1.4-4.1-.1-3.3-1.9-5.7-5.1-5.7zM33 27.2l-3.2-6.1h-4v6.1H23v-16h7.2c3.5 0 5.6 1.9 5.6 4.8 0 2.3-1.4 3.8-3.2 4.5l3.6 6.6H33zm-2.9-13.6h-4.3v5.1h4.3c1.6 0 2.7-1 2.7-2.5 0-1.6-1.1-2.6-2.7-2.6z'
                        className='st2'
                        transform='translate(1 1)'
                      />
                    </g>
                  </svg>
                  <div class='dropdown-menu-overlay'></div>
                </div>
              </div>
            </Link>
            <Link color='inherit'>
              <div
                className='action-submenu ui floating notific disabled'
                id='notifbox'
                title='Well done, no errors found!'
                style={{
                  width: 30,
                  height: 30,
                  padding: 0,
                  textAlign: 'right'
                }}
              >
                <a id='point2seg'></a>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  x='0'
                  y='0'
                  enableBackground='new 0 0 42 42'
                  version='1.1'
                  viewBox='0 0 42 42'
                  xmlSpace='preserve'
                >
                  <g className='st0'>
                    <path
                      fill='#fff'
                      className='st1'
                      d='M18.5 26.8l1.8 2.1-1.8 1.5-1.9-2.3c-1 .5-2.2.7-3.5.7-4.9 0-7.9-3.6-7.9-8.3 0-4.7 3-8.3 7.9-8.3s7.9 3.6 7.9 8.3c0 2.6-.9 4.8-2.5 6.3zm-5.4-11.9c-3.2 0-5 2.4-5 5.7 0 3.3 1.8 5.7 5 5.7.6 0 1.2-.1 1.7-.4L13.2 24l1.8-1.4 1.8 2.1c.9-1 1.4-2.4 1.4-4.1-.1-3.3-2-5.7-5.1-5.7z'
                    ></path>
                    <path
                      d='M34.7 28.5l-1.5-4.1h-6.6L25 28.5h-3l6.3-16h3.3l6.3 16h-3.2zM29.9 15l-2.6 7.1h5.1L29.9 15z'
                      className='st1'
                      fill='#fff'
                    ></path>
                  </g>
                </svg>
              </div>
            </Link>
            <Link color='inherit'>
              <div
                className='action-submenu ui floating dropdown'
                id='action-search'
                title='Search or Filter results'
                style={{
                  position: 'relative',
                  display: 'grid',
                  alignItems: 'center',
                  gridTemplateColumns: '30px',
                  gridTemplateRows: '30px',
                  opacity: 0.8,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  margin: 0,
                  borderRadius: 2,
                  cursor: 'pointer'
                }}
                onClick={() => visibleSearchBox(!searchBox)}
              >
                <svg
                  width='30px'
                  height='30px'
                  viewBox='-4 -4 31 31'
                  version='1.1'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g
                    id='Icon/Search/Active'
                    stroke='none'
                    strokeWidth='1'
                    fill='none'
                    fillRule='evenodd'
                  >
                    <path
                      d='M23.3028148,20.1267654 L17.8057778,14.629284 C16.986716,15.9031111 15.9027654,16.9865185 14.6289383,17.8056296 L20.1264198,23.3031111 C21.0040494,24.1805432 22.4270123,24.1805432 23.3027654,23.3031111 C24.1804444,22.4271111 24.1804444,21.0041481 23.3028148,20.1267654 Z'
                      id='Path'
                      fill='#FFFFFF'
                    ></path>
                    <circle
                      id='Oval'
                      stroke='#FFFFFF'
                      strokeWidth='1.5'
                      cx='9'
                      cy='9'
                      r='8.25'
                    ></circle>
                    <path
                      className='st1'
                      d='M9,16 C5.13400675,16 2,12.8659932 2,9 C2,5.13400675 5.13400675,2 9,2 C12.8659932,2 16,5.13400675 16,9 C16,12.8659932 12.8659932,16 9,16 Z M3.74404938,8.9854321 L5.2414321,8.9854321 C5.2414321,6.92108642 6.9211358,5.24153086 8.9854321,5.24153086 L8.9854321,3.744 C6.0957037,3.744 3.74404938,6.09565432 3.74404938,8.9854321 Z'
                      id='Combined-Shape'
                      fill='#FFFFFF'
                    ></path>
                  </g>
                </svg>
              </div>
            </Link>
            <Link
              color='inherit'
              className='button_white'
              style={{
                background: 'none',
                padding: 0
              }}
            >
              <div
                id='mbc-history'
                title='View comments'
                className='mbc-history-balloon-icon-has-no-comments'
              >
                <div>
                  {/* <svg xmlns='http://www.w3.org/2000/svg' viewBox='3 3 36 36'>
                    <path
                      fill='#fff'
                      fillRule='evenodd'
                      stroke='none'
                      strokeWidth='1'
                      d='M33.125 13.977c-1.25-1.537-2.948-2.75-5.093-3.641C25.886 9.446 23.542 9 21 9c-2.541 0-4.885.445-7.031 1.336-2.146.89-3.844 2.104-5.094 3.64C7.625 15.514 7 17.188 7 19c0 1.562.471 3.026 1.414 4.39.943 1.366 2.232 2.512 3.867 3.439-.114.416-.25.812-.406 1.187-.156.375-.297.683-.422.922-.125.24-.294.505-.508.797a8.15 8.15 0 01-.484.617 249.06 249.06 0 00-1.023 1.133 1.1 1.1 0 00-.126.141l-.109.132-.094.141c-.052.078-.075.127-.07.148a.415.415 0 01-.031.156c-.026.084-.024.146.007.188v.016c.042.177.125.32.25.43a.626.626 0 00.422.163h.079a11.782 11.782 0 001.78-.344c2.73-.697 5.126-1.958 7.189-3.781.78.083 1.536.125 2.265.125 2.542 0 4.886-.445 7.032-1.336 2.145-.891 3.843-2.104 5.093-3.64C34.375 22.486 35 20.811 35 19c0-1.812-.624-3.487-1.875-5.023z'
                    ></path>
                  </svg> */}
                  <svg
                    fill='#FFFFFF'
                    // height='800px'
                    // width='800px'
                    version='1.1'
                    id='Capa_1'
                    xmlns='http://www.w3.org/2000/svg'
                    xmlnsXlink='http://www.w3.org/1999/xlink'
                    viewBox='0 0 217.762 217.762'
                    xmlSpace='preserve'
                    width={30}
                    height={30}
                  >
                    <path
                      d='M108.881,5.334C48.844,5.334,0,45.339,0,94.512c0,28.976,16.84,55.715,45.332,72.454
      c-3.953,18.48-12.812,31.448-12.909,31.588l-9.685,13.873l16.798-2.153c1.935-0.249,47.001-6.222,79.122-26.942
      c26.378-1.92,50.877-11.597,69.181-27.364c19.296-16.623,29.923-38.448,29.923-61.455C217.762,45.339,168.918,5.334,108.881,5.334z
       M115.762,168.489l-2.049,0.117l-1.704,1.145c-18.679,12.548-43.685,19.509-59.416,22.913c3.3-7.377,6.768-17.184,8.499-28.506
      l0.809-5.292l-4.741-2.485C30.761,142.547,15,119.42,15,94.512c0-40.901,42.115-74.178,93.881-74.178s93.881,33.276,93.881,74.178
      C202.762,133.194,164.547,165.688,115.762,168.489z'
                    />
                  </svg>
                  <div className='mbc-badge-container'></div>
                </div>
              </div>
            </Link>
            <Link color='inherit'>
              <div
                className='action-submenu ui floating'
                id='action-filter'
                title='Filter segments'
              >
                <svg
                  width='30px'
                  height='30px'
                  viewBox='-6 -5 33 33'
                  version='1.1'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g
                    id='Icon/Filter/Active'
                    stroke='none'
                    strokeWidth='1'
                    fill='none'
                    fillRule='evenodd'
                  >
                    <g id='filter' fill='none'>
                      <path
                        strokeWidth='1.5'
                        stroke='#fff'
                        d='M22.9660561,1.79797063e-06 L1.03369998,1.79797063e-06 C0.646872201,-0.00071025154 0.292239364,0.210114534 0.115410779,0.545863698 C-0.0638568515,0.88613389 -0.0323935402,1.29588589 0.196629969,1.60665014 L8.23172155,12.6494896 C8.23440448,12.6532968 8.2373313,12.6568661 8.24001423,12.6606733 C8.53196433,13.0452025 8.68976863,13.510873 8.69074424,13.9896308 L8.69074424,22.9927526 C8.68903691,23.2594959 8.79635358,23.5155313 8.98903581,23.7047026 C9.18171797,23.8938738 9.44366823,24.0000018 9.71683793,24.0000018 C9.85586177,24.0000018 9.99317834,23.9728736 10.1214705,23.9210002 L14.6365754,22.2413027 C15.041208,22.1208994 15.3097436,21.7485057 15.3097436,21.2999677 L15.3097436,13.9896308 C15.3104753,13.5111109 15.4685235,13.0452025 15.7602297,12.6606733 C15.7629126,12.6568661 15.7658394,12.6532968 15.7685223,12.6494896 L23.80337,1.60617426 C24.0323936,1.2956479 24.0638568,0.88613389 23.8845893,0.545863698 C23.7077606,0.210114534 23.3531278,-0.00071025154 22.9660561,1.79797063e-06 Z'
                        id='Shape'
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
            </Link>
            <Link color='inherit'>
              <div
                className='action-submenu ui floating'
                id='action-settings'
                title='Settings'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='-3 -3 26 26'
                  width='30px'
                  height='30px'
                >
                  <path
                    fill='#fff'
                    fillRule='evenodd'
                    stroke='none'
                    strokeWidth='1'
                    d='M19.92 8.882c-.032-.281-.36-.492-.643-.492a2.22 2.22 0 01-2.068-1.37 2.225 2.225 0 01.558-2.47.555.555 0 00.061-.753 9.887 9.887 0 00-1.583-1.599.556.556 0 00-.76.062c-.595.66-1.664.904-2.491.56a2.22 2.22 0 01-1.35-2.17.554.554 0 00-.49-.583A9.975 9.975 0 008.906.06a.556.556 0 00-.494.571 2.223 2.223 0 01-1.369 2.132c-.816.334-1.878.09-2.473-.563a.557.557 0 00-.754-.064A9.924 9.924 0 002.2 3.735a.556.556 0 00.06.76c.695.63.92 1.631.558 2.493-.345.821-1.198 1.35-2.174 1.35a.543.543 0 00-.577.49c-.088.751-.089 1.516-.004 2.273.031.282.369.491.655.491.87-.022 1.705.517 2.056 1.37.349.851.124 1.844-.559 2.47a.555.555 0 00-.06.753c.464.591.996 1.13 1.58 1.6a.556.556 0 00.76-.061c.598-.661 1.668-.906 2.491-.56a2.216 2.216 0 011.352 2.168.555.555 0 00.49.584 9.931 9.931 0 002.248.006.556.556 0 00.495-.572 2.22 2.22 0 011.367-2.131c.822-.336 1.88-.09 2.474.563.198.215.524.24.754.063a9.947 9.947 0 001.616-1.598.555.555 0 00-.06-.76 2.214 2.214 0 01-.559-2.492 2.237 2.237 0 012.044-1.354l.123.003a.556.556 0 00.585-.49 10 10 0 00.005-2.272zm-9.913 4.463a3.336 3.336 0 01-3.333-3.333 3.336 3.336 0 013.333-3.332 3.336 3.336 0 013.333 3.332 3.336 3.336 0 01-3.333 3.333z'
                    transform='translate(-1261 -285) translate(1261 285)'
                  ></path>
                </svg>
              </div>
            </Link>
            <Link color='inherit'>
              <div className='action-menu qr-element'>
                <div
                  className='action-submenu ui pointing top center floating dropdown'
                  id='action-three-dots'
                  tabIndex='0'
                  style={{
                    width: 30,
                    height: 30
                  }}
                >
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='5 5 32 32'>
                    <g
                      fill='#fff'
                      fillRule='evenodd'
                      transform='translate(9 9)'
                    >
                      <circle cx='12.5' cy='2.5' r='2.5'></circle>
                      <circle cx='12.5' cy='21.5' r='2.5'></circle>
                      <circle cx='12.5' cy='12.5' r='2.5'></circle>
                    </g>
                  </svg>
                  {/* <ul className='menu left transition hidden' tabIndex='-1'>
                    <li className='item' title='Revise' data-value='revise'>
                      <a href='/revise/doc2.rtf/en-US-fr-FR/9675501-d230e603a83f'>
                        Revise
                      </a>
                    </li>
                    <li className='item' title='Analysis' data-value='analysis'>
                      <a
                        rel='noreferrer'
                        target='_blank'
                        href='/jobanalysis/9786955-9675501-4110cbfcb4ff'
                      >
                        Volume analysis
                      </a>
                    </li>
                    <li
                      className='item'
                      title='XLIFF-to-target converter'
                      data-value='target'
                    >
                      <a
                        rel='noreferrer'
                        target='_blank'
                        href='/utils/xliff-to-target'
                      >
                        XLIFF-to-target converter
                      </a>
                    </li>
                    <li
                      className='item shortcuts'
                      title='Shortcuts'
                      data-value='shortcuts'
                    >
                      <a>Shortcuts</a>
                    </li>
                  </ul> */}
                </div>
              </div>
            </Link>
            <Link>
              <span onClick={openLogin}>
                <img src='./img/author.svg' />
              </span>
            </Link>
          </Toolbar>
        </Toolbar>
        {searchBox && (
          <SearchBox searchText={searchText} searchCount={searchCount} />
        )}
      </AppBar>
    </>
  )
}
