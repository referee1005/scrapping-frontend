import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Footer from "./Footer";
import TranslateFooter from "./TranslateFooter";
import { Typography } from "antd";

function Editor() {
  const [checked, setChecked] = React.useState([]);
  const [editvalue, setValue] = React.useState(-1);
  const [hover, setHover] = React.useState(null);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <div style={{ height: "100vh" }}>
      <div className="landscape">
        <List
          dense
          sx={{ width: "100%", maxWidth: "100%", bgcolor: "background.paper" }}
        >
          {[0, 1, 2, 3].map((value, index) => {
            const labelId = `checkbox-list-secondary-label-${value}`;
            return (
              <ListItem
                key={value}
                disablePadding
                onMouseMove={() => setHover(index)}
                onMouseLeave={() => setHover(null)}
              >
                <span style={{ fontSize: 12 }}>534343</span>
                <ListItemIcon>
                  {hover === index && (
                    <Checkbox
                      edge="end"
                      checked={checked.indexOf(value) !== -1}
                      tabIndex={-1}
                      onChange={handleToggle(value)}
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  )}
                </ListItemIcon>
                <div
                  style={
                    editvalue === value
                      ? {
                          scale: "102%",
                          zIndex: 1,
                          border: 1,
                          borderColor: "black",
                          borderStyle: "dotted",
                          background: "white"
                        }
                      : { background: "#d9e0e8" }
                  }
                >
                  <Box
                    component="section"
                    sx={{ p: 2 }}
                    onClick={() => {
                      setValue(value);
                    }}
                  >
                    {editvalue != value ? (
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <div>
                            Created BI applications with QlikView, Tableau, and
                            Power BI for marketing, customer acquisition, CRM,
                            responsible gaming, payments, and finance.
                          </div>
                        </Grid>
                        <Grid item xs={6}>
                          <div>
                            Création d'applications BI avec QlikView, Tableau et
                            Power BI pour le marketing, l'acquisition de
                            clients, le CRM, les jeux responsables, les
                            paiements et les finances.
                          </div>
                        </Grid>
                      </Grid>
                    ) : (
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          {/* <div className="row"> */}
                          <Grid container spacing={2}>
                            <Grid item xs={11}>
                              Created BI applications with QlikView, Tableau,
                              and Power BI for marketing, customer acquisition,
                              CRM, responsible gaming, payments, and finance.
                            </Grid>
                            <Grid
                              item
                              xs={1}
                              style={{ verticalAlign: "middle" }}
                            >
                              <ArrowForwardIosIcon color="info" cursor />
                            </Grid>
                          </Grid>
                        </Grid>

                        <Grid item xs={6}>
                          <textarea
                            rows={5}
                            className="textarea"
                            defaultValue={
                              "Création d'applications BI avec QlikView, Tableau et Power BI pour le marketing, l'acquisition de clients, le CRM, les jeux responsables, les paiements et les finances."
                            }
                          ></textarea>
                        </Grid>
                        <Grid item xs={12}>
                          <div style={{ float: "right", background: "#09c" }}>
                            <Button
                              variant="contained"
                              style={{ background: "#09c" }}
                            >
                              TRANSLATED
                            </Button>
                          </div>
                        </Grid>

                        <Grid item xs={12} style={{ paddingLeft: 0 }}>
                          <Footer />
                        </Grid>
                      </Grid>
                    )}
                  </Box>
                </div>
              </ListItem>
            );
          })}
        </List>
      </div>
      <TranslateFooter />
    </div>
  );
}

export default Editor;
