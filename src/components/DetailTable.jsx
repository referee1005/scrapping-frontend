import * as React from "react";
import { Typography, Box } from "@mui/material";

const AnalyseItem = ({ children }) => (
  <Box className={"analyse-item"}>{children}</Box>
);

const rows = [
  { title: "New", rate: "100%" },
  { title: "Receptions", rate: "30%" },
  { title: "Internal 75-99%", rate: "50%" },
  { title: "TM Partial 50-74%", rate: "60%" },
  { title: "TM Partial 75-84%", rate: "90%" },
  { title: "TM Partial 85-94%", rate: "40%" },
  { title: "TM Partial 95-99%", rate: "75%" },
  { title: "TM 100%", rate: "100%" },
  { title: "Public TM 100%", rate: "140%" },
  { title: "TM 100% in context", rate: "100%" },
  { title: "Machine Translation", rate: "100%" },
];

export default function DenseTable() {
  return (
    <Box padding={"14px"}>
      <Box
        sx={{
          backgroundColor: "#aebdcd",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", padding: "10px" }}>
          <Typography fontSize="14px">ID:9650553</Typography>
          <Typography fontSize="14px" fontWeight="800" paddingLeft={2}>
            English (USA) {">"}
            French (France)
          </Typography>
        </Box>
        <Box sx={{ padding: "10px" }}>
          <Typography sx={{ display: "flex" }} fontSize="14px" fontWeight="800">
            2 Matecat Weighted words
          </Typography>
        </Box>
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
          <Box>Analysis bucket</Box>
          <Box>Payable rate</Box>
        </AnalyseItem>
        {rows.map((item,key) => (

        <AnalyseItem key={key}>
          <Box>{item.title}</Box>
          <Box>{item.rate}</Box>
      </AnalyseItem>
        ))}
        <AnalyseItem>
          <Box>Total</Box>
        </AnalyseItem>
      </Box>
    </Box>
  );
}
