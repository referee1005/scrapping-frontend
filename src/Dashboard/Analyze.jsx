import React from "react";
import { Typography, Box, Grid, Container } from "@mui/material";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import Table from "../components/Table";
import { styled } from "@mui/material/styles";
import CustomCollapse from "../components/CustomCollopse";
const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.white,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "black", // Set the color of the tooltip text to black
  },
}));
const Analyze = () => {
  return (
    <Container>
    <Box sx={{ marginTop: "40px"}}>
      <Grid
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ margin: "-15px" }}
      >
        <Grid item xs={12}>
          <Grid
            sx={{
              backgroundColor: "#eaebee",
              height: "230px",
              // marginLeft: "-100px",
            }}
          >
            <Grid container>
              <Grid
                item
                xs={7}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                }}
              >
                <Typography
                  variant="h5"
                  marginLeft="10px"
                  padding="25px"
                  display="flex"
                  justifyContent="flex-start"
                >
                  Volume Analysis
                </Typography>
                <Box sx={{ position: "absolute", top: "70px", left: "-15px" }}>
                  <img src="sign.png" width="170px" alt="Document Icon" />
                  <Typography
                    variant="h6"
                    sx={{ marginTop: "-55px", marginLeft: "40px" }}
                  >
                    sample.doc
                  </Typography>
                </Box>
                <Typography
                  sx={{ fontSize: "14px", fontWeight: "700" }}
                  marginLeft="10px"
                  padding="25px"
                  marginTop="40px"
                  display="flex"
                  justifyContent="flex-start"
                >
                  Analysis:&nbsp;
                  <Typography sx={{ fontSize: "14px" }} className="p">
                    complete
                  </Typography>
                  &nbsp; | &nbsp;<u>Downloade Analysis Report</u>
                </Typography>
              </Grid>
              <Grid item xs={5}>
                <Box
                  my={4}
                  display="flex"
                  alignItems="center"
                  gap={4}
                  p={2}
                  width="90%"
                  sx={{ border: "1px solid green" }}
                >
                  <Grid rowSpacing={1}>
                    <Grid item xs={12} display="flex">
                      <Typography
                        fontSize="40px"
                        marginTop="-8px"
                        paddingRight={1}
                      >
                        40%
                      </Typography>
                      <Grid rowSpacing={1}>
                        <Grid item xs={12}>
                          <Typography fontSize="20px">
                            Saving on word count
                          </Typography>
                        </Grid>
                        <Grid item xs={12} marginTop="-6px" marginRight="30px">
                          <Typography
                            fontSize="12px"
                            color="rgba(0, 0, 0, 0.6)"
                          >
                            0 work minute at 3.000 w/day
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} justifyContent="start">
                      <Typography fontSize="12px" marginTop={3}>
                        Matecat gives you more matches than any other tool
                        thanks to a better
                      </Typography>
                      <br />
                      <Typography
                        fontSize="12px"
                        marginTop={-3}
                        marginRight={5}
                      >
                        integration of machine translation and translation
                        memories.
                        <BootstrapTooltip
                          container
                          title={
                            <span style={{ color: "black", fontSize: "14px" }}>
                              Matecat suggests MT only when it helps thanks to a
                              dynamic penalty system. We learn when to offer
                              machine translation suggestions or translation
                              memory matches thanks to the millions of words
                              corrected by the Matecat community.
                              <br /> This data is also used to define a fair
                              pricing scheme that splits the benefits of the
                              technology between the customer and the
                              translator.
                            </span>
                          }
                        >
                          <i
                            className="fa fa-info-circle"
                            style={{
                              fontSize: "20px",
                              cursor: "pointer",
                              color: "gray",
                            }}
                            ariaHidden="true"
                          ></i>
                        </BootstrapTooltip>
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid rowSpacing={1} marginTop={8}>
        <Grid item xs={12}>
          <Table />
        </Grid>
        <Grid item xs={12} marginTop={4}>
          <CustomCollapse />
        </Grid>
        {/* <img src="live_chat.png" width={60} style={{ position: 'absolute',bottom:"0",right:"0" }} alt="" /> */}
      </Grid>
    </Box>
    </Container>
  );
};

export default Analyze;
