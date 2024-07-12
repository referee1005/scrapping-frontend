import React, { useState,useEffect } from 'react';
import './manage.css';
import { InputLabel, Toolbar, FormControl ,Popper,Paper,Button,Grow,MenuList, Link,Option,MenuItem,Container,Select} from '@mui/material';
import Menu from '@mui/material/Menu';
import ClickAwayListener from '@mui/material/ClickAwayListener'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

const Manage = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Toolbar className='project-list'>
      <Container>
        <div className='project_ui'>

          {/* Project Header */}
          <div className='project_header'>
            <div className='project_title'>
              <div className='ui-ribbon'>
                <div className='project-id'>(9785731)</div>
                <div className='project-name'>Dummy</div>
              </div>
            </div>
            <div className='project_activity'>
              <div className='project_assignee'>
                <span className='img_avatar'>
                  <img src='./img/1.webp' alt='Avatar of Ilaria' />
                </span>
                <span className='user-name'>Dummy User</span>
              </div>
              <div className='toggle_ellipses'>
                <Button
                  ref={anchorRef}
                  id="composition-button"
                  aria-controls={open ? 'composition-menu' : undefined}
                  aria-expanded={open ? 'true' : undefined}
                  aria-haspopup="true"
                  onClick={handleToggle}
                >
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </Button>
                <Popper
                  open={open}
                  anchorEl={anchorRef.current}
                  role={undefined}
                  placement="bottom-start"
                  transition
                  disablePortal
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin:
                          placement === 'bottom-start' ? 'left top' : 'left bottom',
                      }}
                    >
                      <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList
                            autoFocusItem={open}
                            id="composition-menu"
                            aria-labelledby="composition-button"
                            onKeyDown={handleListKeyDown}
                          >
                            <MenuItem onClick={handleClose}>Activity Log</MenuItem>
                            <MenuItem onClick={handleClose}>Archive Project</MenuItem>
                            <MenuItem onClick={handleClose}>Cancel Project</MenuItem>
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </div>
            </div>
          </div>

          {/* Project Body */}
          <div className='project_body'>
            <div className='jobs'>
              <div className='job_body'>

                {/* Upper body */}
                <div className='chunks'>
                  <div class="job-id">ID: 9674280</div>
                  <div className='languages-tooltip'>
                    <div className='source_label'>English (USA)</div>
                    <div className='in_to'><FontAwesomeIcon icon={faAngleRight} /></div>
                    <div className='target_box'>Sotho Southern</div>
                  </div>
                  <div className='progress_bar'>
                      Dummy Progress Bar
                  </div>
                  <div class="job-payable">
                    <Link href="/" target="_blank">
                      <span id="words">316</span> words
                    </Link>
                  </div>

                  <div class="outsource-job">
                    <Link href="/" target="_blank">
                      Assign job to translator
                    </Link>
                  </div>

                  <Link class="open-outsource buy-translation ui button" id="open-quote-request">
                    <span  class="buy-translation-span">Buy Translation</span>
                    <span>from</span>
                    <svg viewBox="0 0 40 40" width="20" height="20"><path fill-rule="evenodd" d="M19.686 2.77C10.353 2.78 2.79 10.317 2.78 19.62c0 9.306 7.57 16.85 16.907 16.85 9.338 0 16.908-7.544 16.908-16.85 0-9.307-7.57-16.85-16.908-16.85zm0-2.77c10.872 0 19.686 8.784 19.686 19.62 0 10.835-8.814 19.62-19.686 19.62S0 30.454 0 19.62C0 8.784 8.814 0 19.686 0zm4.756 27.857a5.533 5.533 0 0 1-3.448 1.074c-1.766 0-3.119-.578-3.92-1.842-.495-.743-.69-1.623-.69-3.027v-7.568h-3.54v-2.331h3.54v-3.88h3.063v13.821c0 1.458.69 2.144 1.969 2.144a2.892 2.892 0 0 0 1.82-.63l1.206 2.24zm-1.415-12.556a1.788 1.788 0 0 1 1.778-1.8h.056a1.79 1.79 0 0 1 1.777 1.8 1.788 1.788 0 0 1-1.777 1.796h-.056a1.788 1.788 0 0 1-1.778-1.796z"></path></svg>
                  </Link>

                  <Link class="open-translate" target="_blank" href="/">Open</Link>
                  <div className='toggle_ellipses'>
                <Button
                  ref={anchorRef}
                  id="composition-button"
                  aria-controls={open ? 'composition-menu' : undefined}
                  aria-expanded={open ? 'true' : undefined}
                  aria-haspopup="true"
                  onClick={handleToggle}
                >
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </Button>
                <Popper
                  open={open}
                  anchorEl={anchorRef.current}
                  role={undefined}
                  placement="bottom-start"
                  transition
                  disablePortal
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin:
                          placement === 'bottom-start' ? 'left top' : 'left bottom',
                      }}
                    >
                      <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList
                            autoFocusItem={open}
                            id="composition-menu"
                            aria-labelledby="composition-button"
                            onKeyDown={handleListKeyDown}
                          >
                            <MenuItem onClick={handleClose}>Activity Log</MenuItem>
                            <MenuItem onClick={handleClose}>Archive Project</MenuItem>
                            <MenuItem onClick={handleClose}>Cancel Project</MenuItem>
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </div>
                </div>
                
                {/* Inner Body */}
                <div className='outsource_container'>
                  <div className='outsource-header'>
                    <div class="job-id">ID: 9674280</div>
                    <div className='languages-tooltip'>
                      <div className='source_label'>English (USA)</div>
                      <div className='in_to'><FontAwesomeIcon icon={faAngleRight} /></div>
                      <div className='target_box'>Sotho Southern</div>
                    </div>
                    <div class="job-payable"><span id="words">228</span> words</div>
                  </div>
                  <div className='background-outsource-vendor'>
                    <div className='outsource_vendor'>
                      <div class="payment-service">
                        <div class="service-box">
                          <div class="service project-management">Outsource: Project Management </div>
                          <div class="service translation"> + Translation </div>
                        </div>
                        <div class="fiducial-logo">
                          <div class="translated-logo">Guaranteed by<img class="logo-t" src="./img/matecat-logo-translated.svg"/>
                          </div>
                        </div>
                      </div>
                      <div className='payment-details-box'>

                        {/* Translator Job Desc */}
                        <div className='translator-job-details'>
                          <div class="translator-details-box">
                            <div class="translator-no-found">
                              <p>Translated uses the <b>most qualified translator</b> <br/> and <b>keeps using the same translator for your next projects. </b></p>
                            </div>
                          </div>
                          <div class="job-details-box">
                            <div class="source-target-outsource st-details">
                              <div class="source-box">English (USA)</div>
                              <div class="in-to">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path></svg>
                              </div>
                              <div class="target-box">Sotho Southern</div>
                            </div>
                            <div class="job-payment">
                              <div class="payable">228 words</div>
                            </div>
                          </div>
                          <div class="job-price">€ 19.15</div>
                        </div>

                        {/* Revision Box */}

                        <div class="revision-box">
                          <div class="add-revision">
                            <div class="ui checkbox ">
                              <input type="checkbox"/>
                              <label>Add Revision</label>
                            </div>
                          </div>
                          <div class="job-price">€ 7.60</div>
                        </div>

                        {/* Delivery Order Date */}
                        <div className='delivery-order'>
                          <div class="delivery-box">
                            <label>Delivery date:</label>
                            <div class="delivery-date">12 July</div>
                            <div class="atdd">at</div>
                            <div class="delivery-time">05:30 PM</div>
                            <div className='gmt'>
                            <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        onChange={handleChange}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
                            </div>
                            <div class="need-it-faster"><a class="faster">Need it faster?</a></div>
                            </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </Container>
    </Toolbar>
  );
};

export default Manage;
