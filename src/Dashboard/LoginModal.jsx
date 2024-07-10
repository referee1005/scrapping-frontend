import React from 'react'
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
    Link,
    Grid
  } from "@mui/material";

export const LoginModal = ({ open, handleClose }) => {
    const gridItemStyle = {
        borderRight: '1px solid #ccc', // Add border right style
        paddingRight: '2px', // Adjust padding as needed
      };
  return (
    <Toolbar>
            <Dialog open={open} onClose={handleClose} className="multilang_dialog login-Modal">
              <Toolbar style={{display:'flex',justifyContent:'space-between'}} className="header_top">
                <DialogTitle>Add project to your management panel</DialogTitle>
                <button onClick={handleClose}>
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><g clip-path="url(#a)"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M7 7l10 10M7 17L17 7"></path></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"></path></clipPath></defs></svg>
                </button>
              </Toolbar>
              <Toolbar class="login-modal">
                <Toolbar class="login-container-right">
                    <h2>Sign up now to:</h2>
                    <ul class="">
                        <li>Manage your TMs, glossaries and MT engines</li>
                        <li>Access the management panel</li>
                        <li>Translate Google Drive files</li>
                    </ul>
                    <a class="register-button btn-confirm-medium">Sign up</a>
                </Toolbar>
                <Toolbar class="login-container-left">
                    <a class="google-login-button btn-confirm-medium"></a>
                    <Toolbar class="login-form-container">
                        <Toolbar class="form-divider">
                            <Toolbar class="divider-line"></Toolbar>
                            <span>OR</span>
                            <Toolbar class="divider-line"></Toolbar>
                        </Toolbar>
                        <Toolbar>
                            <input type="text" placeholder="Email" name="emailAddress" tabindex="1" value=""/>
                        </Toolbar>
                        <Toolbar>
                            <input type="password" placeholder="Password" name="password" tabindex="2" value=""/>
                        </Toolbar>
                        <a class="login-button btn-confirm-medium sing-in disabled" tabindex="3">
                            <span class="button-loader "></span> Sign in 
                        </a>
                        <br/>
                        <span class="forgot-password">Forgot password?</span>
                    </Toolbar>
                </Toolbar>
            </Toolbar>
          
            </Dialog>
          </Toolbar>
  )
}
