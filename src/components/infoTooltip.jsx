import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

// Assuming the path to your info.svg is correct
import infoIcon from '../info.svg';

const tooltipText = `By updating MyMemory, you are contributing to making MateCat better and helping fellow MateCat users improve their translations. For confidential projects, we suggest adding a private TM and selecting the Update option in the Settings panel.`;

export default function InfoTooltip() {
  return (
    <Tooltip title={
      <Typography>
        {tooltipText}
      </Typography>
    }>
      <IconButton aria-label="info">
        <img src={infoIcon} alt="Information" />
      </IconButton>
    </Tooltip>
  );
}