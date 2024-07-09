import React from "react";
import { Box, Typography } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import List from "@mui/material/List";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase, IconButton } from "@mui/material";
import Divider from "@mui/material/Divider";
import InputAdornment from "@mui/material/InputAdornment";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import {
  Input,
  FormControl,
  Select,
  MenuItem,
  FormGroup,
  StyledEngineProvider
} from "@mui/material";
import { makeStyles, withStyles } from "@mui/styles";

const useStyles = makeStyles({
  customInput: {
    height: "20px !important", // Adjust the height as needed
    padding: 3
  }
});

const CustomSelect = withStyles({
  root: {
    "& .MuiSelect-select": {
      height: "20px !important", // Set the desired height here
      minHeight: 20
    }
  }
})(Select);

const CustomTab = withStyles({
  root: {
    "& .MuiButtonBase-root": {
      minHeight: "20px !important" // Set the desired height here
    }
  }
})(Tab);

const Footer = () => {
  const [value, setValue] = React.useState("1");
  const [isterm, setIsterm] = React.useState(false);
  const [isMore, setMore] = React.useState(false);

  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const addTerm = () => {
    setIsterm(true);
  };
  const cancelTerm = () => {
    setIsterm(false);
  };
  const clickMore = () => {
    setMore(!isMore);
  };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  }));
  const transitionmatches = [
    {
      source: "version"
    }
  ];
  return (
    <StyledEngineProvider injectFirst>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider"
            }}
          >
            <TabList
              sx={{
                bgcolor: "white",

                borderBottom: 1
              }}
              onChange={handleChange}
              aria-label="lab API tabs example"
            >
              <CustomTab
                label="Translation Matches"
                value="1"
                sx={{
                  bgcolor: value == "1" ? "white" : "#d9e0e8",
                  border: "1px solid rgb(174,189,205) !important",
                  borderColor: "#d9e0e8",
                  textTransform: "none"
                }}
              />
              <CustomTab
                label="TM Search"
                value="2"
                sx={{
                  bgcolor: value == "2" ? "white" : "#d9e0e8",
                  border: "1px solid rgb(174,189,205) !important",
                  borderColor: "#d9e0e8",
                  textTransform: "none"
                }}
              />
              <CustomTab
                label="Glossary"
                value="3"
                sx={{
                  bgcolor: value == "3" ? "white" : "#d9e0e8",
                  border: "1px solid rgb(174,189,205) !important",
                  borderColor: "#d9e0e8",
                  textTransform: "none"
                }}
              />
            </TabList>
          </Box>
          <TabPanel value="1" sx={{ padding: 0 }}>
            <List sx={{ padding: 0 }}>
              <ListItem sx={{ padding: 0 }}>
                <ListItemButton>
                  <Grid container>
                    <Grid
                      container
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Grid container direction="column">
                        <Grid item xs={12}>
                          <Typography sx={{ fontSize: "12px" }}>
                            Welcome to Longoworld
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Grid item xs={8}></Grid>
                          <Grid item xs={3}>
                            <Typography sx={{ fontSize: "12px" }}>
                              Welcome to Longoworld
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid container direction={"column"}>
                        <Grid container justifyContent={"flex-end"}>
                          <Typography
                            sx={{
                              fontSize: "12px"
                            }}
                          >
                            source:
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: "13px",
                              fontWeight: "bold"
                            }}
                          >
                            Public TM English
                          </Typography>
                          <Box
                            sx={{
                              bgcolor: "red",
                              width: "40px",
                              height: "20px"
                            }}
                          >
                            <Typography
                              sx={{
                                fontSize: "12px",
                                color: "white"
                              }}
                            >
                              100%
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  {/* </Grid> */}
                </ListItemButton>
              </ListItem>
            </List>
          </TabPanel>
          <TabPanel value="2">
            <Grid container xs={12} spacing={2}>
              <Grid item xs={6}>
                <TextField
                  id="project-name"
                  variant="outlined"
                  fullWidth
                  required
                  InputProps={{
                    classes: {
                      input: `${classes.customInput} !important`
                    }
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="project-name"
                  variant="outlined"
                  fullWidth
                  required
                  InputProps={{
                    classes: {
                      input: `${classes.customInput} !important`
                    }
                  }}
                />
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value="3">
            <Grid
              container
              xs={24}
              // spacing={2}
              // justifyContent={"center"}
              sx={{ padding: "4px ", marginBottom: "10px" }}
            >
              <Grid item xs={8}>
                <Paper
                  component="form"
                  sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    width: 400
                  }}
                >
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search term"
                    inputProps={{ "aria-label": "search term" }}
                    startAdornment={
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    }
                  />
                  <IconButton
                    type="button"
                    sx={{ p: "10px" }}
                    aria-label="search"
                  >
                    <SearchIcon />
                  </IconButton>
                </Paper>
              </Grid>
              <Grid item xs={4} justifyContent={""}>
                <Button
                  variant="contained"
                  style={{
                    background: "#09c",
                    textTransform: "none",
                    float: "right"
                  }}
                >
                  + Add Term
                </Button>
              </Grid>
            </Grid>
            <Divider style={{ marginTop: "1rem", marginBottom: "1rem" }} />

            {!isterm && (
              <div style={{ textAlign: "center" }}>
                <div>No glossary available</div>
                <div>
                  <Button
                    variant="contained"
                    style={{ background: "#09c", textTransform: "none" }}
                    onClick={addTerm}
                  >
                    + Click here to create one
                  </Button>
                </div>
              </div>
            )}

            {isterm && (
              <Box>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <FormGroup className="form_group">
                      <Typography variant="body1" gutterBottom>
                        Definition
                      </Typography>
                      <TextField
                        id="project-name"
                        InputProps={{
                          classes: {
                            input: `${classes.customInput} !important`
                          }
                        }}
                        fullWidth
                        required
                      />
                    </FormGroup>
                  </Grid>
                  <Grid item xs={2}>
                    <FormGroup className="form_group">
                      <Typography variant="body1" gutterBottom>
                        Glossary*
                      </Typography>
                      <FormControl fullWidth variant="outlined">
                        <CustomSelect
                          id="tm-glossary"
                          value=""
                          required
                          input={<InputBase />}
                        >
                          <MenuItem value="">Select TM & Glossary</MenuItem>
                          <MenuItem value="tm1">TM 1</MenuItem>
                          <MenuItem value="tm2">TM 2</MenuItem>
                          {/* Add more MenuItem components as needed */}
                        </CustomSelect>
                      </FormControl>
                    </FormGroup>
                  </Grid>
                  <Grid item xs={2}>
                    <FormGroup className="form_group">
                      <Typography variant="body1" gutterBottom>
                        Domain*
                      </Typography>
                      <FormControl fullWidth variant="outlined">
                        <CustomSelect id="tm-glossary" value="" required>
                          <MenuItem value="">Select TM & Glossary</MenuItem>
                          <MenuItem value="tm1">TM 1</MenuItem>
                          <MenuItem value="tm2">TM 2</MenuItem>
                          {/* Add more MenuItem components as needed */}
                        </CustomSelect>
                      </FormControl>
                    </FormGroup>
                  </Grid>
                  <Grid item xs={2}>
                    <FormGroup className="form_group">
                      <Typography variant="body1" gutterBottom>
                        Subdomain*
                      </Typography>
                      <FormControl fullWidth variant="outlined">
                        <CustomSelect id="tm-glossary" value="" required>
                          <MenuItem value="">Select TM & Glossary</MenuItem>
                          <MenuItem value="tm1">TM 1</MenuItem>
                          <MenuItem value="tm2">TM 2</MenuItem>
                          {/* Add more MenuItem components as needed */}
                        </CustomSelect>
                      </FormControl>
                    </FormGroup>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <FormGroup className="form_group">
                      <Typography variant="body1" gutterBottom>
                        Original term*
                      </Typography>
                      <TextField
                        id="project-name"
                        variant="outlined"
                        fullWidth
                        required
                        InputProps={{
                          classes: {
                            input: `${classes.customInput} !important`
                          }
                        }}
                      />
                    </FormGroup>
                  </Grid>
                  <Grid item xs={6}>
                    <FormGroup className="form_group">
                      <Typography variant="body1" gutterBottom>
                        Translated term*
                      </Typography>
                      <TextField
                        id="project-name"
                        variant="outlined"
                        fullWidth
                        required
                        InputProps={{
                          classes: {
                            input: `${classes.customInput} !important`
                          }
                        }}
                      />
                    </FormGroup>
                  </Grid>
                </Grid>
                {isMore && (
                  <Grid container spacing={2}>
                    <Grid item xs={3}>
                      <FormGroup className="form_group">
                        <Typography variant="body1" gutterBottom>
                          Notes
                        </Typography>
                        <TextField
                          id="project-name"
                          variant="outlined"
                          fullWidth
                          multiline
                          rows={3}
                          required
                        />
                      </FormGroup>
                    </Grid>
                    <Grid item xs={3}>
                      <FormGroup className="form_group">
                        <Typography variant="body1" gutterBottom>
                          Example of use
                        </Typography>
                        <TextField
                          id="project-name"
                          variant="outlined"
                          fullWidth
                          required
                          multiline
                          rows={3}
                        />
                      </FormGroup>
                    </Grid>
                    <Grid item xs={3}>
                      <FormGroup className="form_group">
                        <Typography variant="body1" gutterBottom>
                          Notes
                        </Typography>
                        <TextField
                          id="project-name"
                          variant="outlined"
                          fullWidth
                          required
                          multiline
                          rows={3}
                        />
                      </FormGroup>
                    </Grid>
                    <Grid item xs={3}>
                      <FormGroup className="form_group">
                        <Typography variant="body1" gutterBottom>
                          Example of use
                        </Typography>
                        <TextField
                          id="project-name"
                          variant="outlined"
                          fullWidth
                          required
                          multiline
                          rows={3}
                        />
                      </FormGroup>
                    </Grid>
                  </Grid>
                )}

                <Grid container sx={{ margin: "10px" }} spacing={2}>
                  <Grid item xs={2}></Grid>
                  <Grid item xs={8}>
                    <div
                      style={{
                        flexFlow: "flex",
                        textAlign: "center",
                        color: "#aebdcd",
                        cursor: "pointer"
                      }}
                      onClick={clickMore}
                    >
                      {!isMore ? (
                        <ArrowDropDownIcon
                          style={{ verticalAlign: "middle" }}
                        />
                      ) : (
                        <ArrowDropUpIcon style={{ verticalAlign: "middle" }} />
                      )}
                      <span style={{ textAlign: "center" }}>
                        {isMore ? "hide" : "more"} options
                      </span>
                    </div>
                  </Grid>
                  <Grid item xs={2}>
                    <Button
                      variant="text"
                      onClick={cancelTerm}
                      style={{ textTransform: "none" }}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="contained"
                      style={{ background: "#09c", textTransform: "none" }}
                    >
                      + Add
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            )}
          </TabPanel>
        </TabContext>
      </Box>
    </StyledEngineProvider>
  );
};

export default Footer;
