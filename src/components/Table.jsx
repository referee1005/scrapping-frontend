import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Typography, Box, Button, Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import Search from "../components/Search";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

// ... (rest of the code remains unchanged)

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: "#d9e0e8",
//     color: "",
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#d9e0e8",
    color: "",
    border: "1px solid rgba(0, 0, 0, 0.07)",
    // Add border style for table header cells
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    border: "1px solid rgba(0, 0, 0, 0.2)", // Add border style for table body cells
  },
}));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//     '&:nth-of-type(odd)': {
//         backgroundColor: theme.palette.action.white,
//     },
//     // hide last border
//     '&:last-child td, &:last-child th': {
//         border: 0,
//     },
// }));

// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
// }

// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.white,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "black", // Set the color of the tooltip text to black
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.15)",
  },
}));

export default function CustomizedTables() {
  return (
    <TableContainer
      component={Paper}
      sx={{ marginLeft: "-90px", width: "1370px" }}
    >
      <Table sx={{ minWidth: 900 }} ariaLabel="customized table">
        <TableHead>
          <TableRow sx={{ textAlign: "center" }}>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell align="center">
              <Box fontSize="14px" width="120px">
                Total word count
              </Box>
            </StyledTableCell>
            <StyledTableCell
              align="center"
              sx={{ display: "flex", width: "130px", height: "22px" }}
            >
              <Box fontSize="14px" align="left">
                Industry weighted
              </Box>
              &nbsp;
              <Box fontSize="14px" align="left">
                <BootstrapTooltip
                  placement="top"
                  container
                  title={
                    <span style={{ color: "black", fontSize: "14px" }}>
                      As counted by other CAT tools
                    </span>
                  }
                >
                  <i
                    className="fa fa-info-circle"
                    style={{
                      fontSize: "12px",
                      cursor: "pointer",
                      color: "gray",
                    }}
                    ariaHidden="true"
                  ></i>
                </BootstrapTooltip>
              </Box>
            </StyledTableCell>
            <StyledTableCell align="center">
              <Typography fontSize="14px" width="120px">
                Matecat weighted
              </Typography>
            </StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableCell
            component="th"
            scope="row"
            width="40px"
            align="center"
            sx={{ cursor: "pointer" }}
          >
            <Box display="flex" justifyContent="center" alignItems="center">
              <Box align="center">
                <Typography fontSize="12px">ID: 9650553</Typography>
              </Box>
              <Box align="center">
                <Typography
                  fontSize="12px"
                  fontWeight={800}
                  paddingLeft={2}
                  marginTop={-0.7}
                >
                  English{"("}US...{">"} French{"("}Fra
                </Typography>
              </Box>
            </Box>
            <Search />
          </StyledTableCell>
          <StyledTableCell align="center" width="100px">
            5
          </StyledTableCell>
          <StyledTableCell align="center" width="100px">
            3
          </StyledTableCell>
          <StyledTableCell align="center" width="100px">
            3
          </StyledTableCell>
          <StyledTableCell align="center">
            <Grid container rowSpacing={1}>
              <Grid item xs={4}>
                <Button
                  variant="outlined"
                  sx={{
                    color: "#09c",
                    borderRadius: "0",
                    width: "110px",
                    textTransform: "none",
                  }}
                >
                  Split
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#09c",
                    borderRadius: "0",
                    width: "110px",
                    textTransform: "none",
                  }}
                >
                  Translate
                </Button>
              </Grid>
              <Grid
                item
                xs={4}
                marginTop="-3px"
                sx={{
                  borderColor: "rgba(0, 0, 0, 0.25)",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderTop: "none",
                  borderRight: "none",
                  borderBottom: "none",
                }}
              >
                <Typography fontSize="12px" color="#09c">
                  <u>Buy Translation</u>
                </Typography>
                <br />
                <Typography fontSize="12px">from translated</Typography>
              </Grid>
            </Grid>
          </StyledTableCell>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
