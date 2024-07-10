import React from 'react';
import { Dialog, Toolbar, IconButton,DialogTitle , Button} from "@mui/material";

export const ForgotPassModal = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose} className="multilang_dialog login-Modal">
        <Toolbar style={{display:'flex',justifyContent:'space-between'}} className="header_top">
                <DialogTitle>Forgot Password</DialogTitle>
                <button onClick={handleClose}>
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><g clip-path="url(#a)"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M7 7l10 10M7 17L17 7"></path></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"></path></clipPath></defs></svg>
                </button>
              </Toolbar>
              <Toolbar class="forgot_pass-content">
               <div style={{display:"flex" , justifyContent:"center"}}>
                <p>Enter the email address associated with your account and we'll send you the link to reset your password.</p>
               </div>
               <div style={{display:"flex" , justifyContent:"center"}}>
                <input type="text" placeholder='Email' />
               </div>
               
               <div className='send-btn'>
             <Button className="">Send</Button>
               </div>
               <div className='back-to-login'>
                <p> Back to Login</p>
               </div>
                
                </Toolbar>
      {/* Add your forgot password content here */}
    </Dialog>
  );
};
