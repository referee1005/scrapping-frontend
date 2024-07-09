import React, { useState } from "react";
import Collapse from "@mui/material/Collapse";

import { Box, IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AnalyseItem = ({ children }) => (
  <Box className={"analyse-item1"}>{children}</Box>
);

const rows = [
  {f:0,s:0,t:0},
  {f:0,s:0,t:0},
  {f:0,s:0,t:0},
  {f:0,s:0,t:0},
  {f:0,s:0,t:0},
  {f:0,s:0,t:0},
  {f:0,s:0,t:0},
  {f:0,s:0,t:0},
  {f:5,s:2,t:0},
  {f:0,s:0,t:0},
  {f:0,s:0,t:0},
  {f:5,s:2,t:0},
];

export default function DenseTable() {
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
    console.log(expanded);
  };
  return (
    <Box padding={"14px"}>
      <Box
        sx={{
          backgroundColor: "#aebdcd",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* <Box sx={{ display: "flex", padding: "10px" }}>
          <Typography variant="h7">ID:9650553</Typography>
          <Typography variant="h7" fontWeight="800" paddingLeft={2}>
            English (USA) {">"}
            French (France)
          </Typography>
        </Box>
        <Box sx={{ padding: "10px" }}>
          <Typography sx={{ display: "flex" }} variant="h7" fontWeight="800">
            2 Matecat Weighted words
          </Typography>
        </Box> */}
      </Box>
      <Box
        container
        spacing={0}
        sx={{
          display: "grid",

          "grid-template-columns":
            "minmax(100px, 150px) repeat(11, 1fr) minmax(80px, 100px)",
          "grid-template-rows": "100px",
        }}
      >
        <AnalyseItem>
          <Box
            sx={{
              backgroundColor: "#f5f6f7",
              borderRadius: "4px",
              display: "flex",
              flexDirection: "column",
              marginTop: "18px",
              marginLeft: "4px",
              height: "408px",
            }}
          >
            <Box sx={{ color: "#d9e0e8" }}>Raw</Box>

            <Box
              sx={{ display: "flex", cursor: "pointer" }}
              onClick={handleExpandClick}
            >
              <IconButton>
                <ExpandMoreIcon />
              </IconButton>
              <Box sx={{ fontSize: "14px", marginTop: "10px" }}>
                <u>File(1)</u> Weighted
              </Box>
            </Box>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <Box
                sx={{
                  backgroundColor: "#eeeee5",
                  width: "148px",
                  marginRight: "-8px",
                }}
              >
                sample.doc
              </Box>
            </Collapse>
          </Box>
        </AnalyseItem>
        {rows.map((item, key) => (
          <AnalyseItem key={key}>
            <Box sx={{ marginTop: "-14px" }}>{item.f}</Box>
            <Box sx={{ marginTop: "-14px" }}>{item.s}</Box>
            <Box
              sx={{ marginTop: "-14px" }}
              className={expanded ? "color" : "color1"}
            >
              {item.t}
            </Box>
          </AnalyseItem>
        ))}
      </Box>
    </Box>
  );
}
