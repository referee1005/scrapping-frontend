import React, { useState } from "react";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Box, Button, Grid } from "@mui/material";
import DetailTable from "../components/DetailTable";
import DenseTable from "../components/DenseTable";
const CustomCollapse = ({ title, children }) => {
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#d9e0e8",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        // marginLeft:'-90px',
      }}
    >
      <Box
        onClick={handleExpandClick}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <Typography fontSize="16px" align="center" sx={{ fontWeight: "700" }}>
          {expanded ? "Hide Details" : "Show Details"}
        </Typography>
        <IconButton>
          {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </Box>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Grid rowSpacing={0}>
          <Grid item xs={12}>
            <DetailTable />
          </Grid>
          <Grid item xs={12} sx={{marginTop:'-27px'}}>
            <DenseTable />
          </Grid>
        </Grid>
      </Collapse>
    </Box>
  );
};

export default CustomCollapse;
