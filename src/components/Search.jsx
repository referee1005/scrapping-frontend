import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

export default function CustomizedInputBase() {
    return (
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 430 }}
        >
            <InputBase
                sx={{
                    ml: 1, flex: 1
                }}
            placeholder="https://www.matecat.com/translate/sample.doc/en-US-fr-FR/9652690-f7f6f6587782"
            inputProps={{ 'aria-label': 'https://www.matecat.com/translate/sample.doc/en-US-fr-FR/9652690-f7f6f6587782', style: { fontSize: '14px', color:'#09c'} }}
            />

            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton color="primary" sx={{ p: '10px' }} ariaLabel="directions">
            <i className="fa fa-link fa-flip-horizontal" ariaHidden="true"></i>
            </IconButton>
        </Paper>
    );
}