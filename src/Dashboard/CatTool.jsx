import React, { useState,useEffect ,useRef} from "react";
import {
  Container,
  Toolbar,
  Typography,
  Select,
  MenuItem,
  FormControl,
  Button,
  Paper,
  IconButton,
  FormGroup,
  Drawer,
  OutlinedInput,
  Autocomplete,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  InputLabel,
  List,
  ListItem,
  Popper,
  ListItemText,
  Checkbox,
  Link
} from "@mui/material";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import UploadIcon from "@mui/icons-material/Upload";
import Chip from "@mui/material/Chip";
import MenuIcon from "@mui/icons-material/Menu";
import SideBarTabs from "../SideBarTabs";
import { styled } from "@mui/system";

const CustomPopper = styled(Popper)({
  zIndex: 9999,
  width: '100vw',
  height: '100vh',
});

const StyledAutocomplete = styled(Autocomplete)(({ theme }) => ({
  '& .MuiAutocomplete-paper': {
    width: '100vw',
    height: '100vh',
    margin: 0,
    position: 'fixed',
    top: 0,
    left: 0,
  },
  '& .MuiAutocomplete-listbox': {
    width: '100%',
    height: 'calc(100% - 56px)',
  },
}));

const languages = [
  'English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Korean', 'Russian', 'Italian', 'Portuguese',
  'Arabic', 'Hindi', 'Bengali', 'Punjabi', 'Javanese', 'Malay', 'Vietnamese', 'Telugu', 'Marathi', 'Tamil',
  'Urdu', 'Turkish', 'Persian', 'Polish', 'Ukrainian', 'Romanian', 'Dutch', 'Greek', 'Czech', 'Swedish',
  'Hungarian', 'Serbian', 'Belarusian', 'Finnish', 'Slovak', 'Danish', 'Norwegian', 'Bulgarian', 'Croatian', 'Lithuanian',
  'Slovenian', 'Latvian', 'Estonian', 'Maltese', 'Icelandic', 'Luxembourgish', 'Macedonian', 'Albanian', 'Bosnian', 'Georgian'
];

export default function CatTool() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [formatDialogOpen, setFormatDialogOpen]=useState(false)
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const autocompleteRef = useRef(null);
  const [autocompleteOpen, setAutocompleteOpen] = useState(false);
  const [selectedFromLanguage, setSelectedFromLanguage] = useState(null);
  const top100Films = [
    { label: "The Shawshank Redemption", value: "Re" },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
    {
      label: "The Lord of the Rings: The Return of the King",
      year: 2003,
    },
    { label: "The Good, the Bad and the Ugly", year: 1966 },
    { label: "Fight Club", year: 1999 },
    {
      label: "The Lord of the Rings: The Fellowship of the Ring",
      year: 2001,
    },
    {
      label: "Star Wars: Episode V - The Empire Strikes Back",
      year: 1980,
    },
    { label: "Forrest Gump", year: 1994 },
    { label: "Inception", year: 2010 },
    {
      label: "The Lord of the Rings: The Two Towers",
      year: 2002,
    },
    { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { label: "Goodfellas", year: 1990 },
    { label: "The Matrix", year: 1999 },
    { label: "Seven Samurai", year: 1954 },
    {
      label: "Star Wars: Episode IV - A New Hope",
      year: 1977,
    },
    { label: "City of God", year: 2002 },
    { label: "Se7en", year: 1995 },
    { label: "The Silence of the Lambs", year: 1991 },
    { label: "It's a Wonderful Life", year: 1946 },
    { label: "Life Is Beautiful", year: 1997 },
    { label: "The Usual Suspects", year: 1995 },
    { label: "Léon: The Professional", year: 1994 },
    { label: "Spirited Away", year: 2001 },
    { label: "Saving Private Ryan", year: 1998 },
    { label: "Once Upon a Time in the West", year: 1968 },
    { label: "American History X", year: 1998 },
    { label: "Interstellar", year: 2014 },
    { label: "Casablanca", year: 1942 },
    { label: "City Lights", year: 1931 },
    { label: "Psycho", year: 1960 },
    { label: "The Green Mile", year: 1999 },
    { label: "The Intouchables", year: 2011 },
    { label: "Modern Times", year: 1936 },
    { label: "Raiders of the Lost Ark", year: 1981 },
    { label: "Rear Window", year: 1954 },
    { label: "The Pianist", year: 2002 },
    { label: "The Departed", year: 2006 },
    { label: "Terminator 2: Judgment Day", year: 1991 },
    { label: "Back to the Future", year: 1985 },
    { label: "Whiplash", year: 2014 },
    { label: "Gladiator", year: 2000 },
    { label: "Memento", year: 2000 },
    { label: "The Prestige", year: 2006 },
    { label: "The Lion King", year: 1994 },
    { label: "Apocalypse Now", year: 1979 },
    { label: "Alien", year: 1979 },
    { label: "Sunset Boulevard", year: 1950 },
    {
      label:
        "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
      year: 1964,
    },
    { label: "The Great Dictator", year: 1940 },
    { label: "Cinema Paradiso", year: 1988 },
    { label: "The Lives of Others", year: 2006 },
    { label: "Grave of the Fireflies", year: 1988 },
    { label: "Paths of Glory", year: 1957 },
    { label: "Django Unchained", year: 2012 },
    { label: "The Shining", year: 1980 },
    { label: "WALL·E", year: 2008 },
    { label: "American Beauty", year: 1999 },
    { label: "The Dark Knight Rises", year: 2012 },
    { label: "Princess Mononoke", year: 1997 },
    { label: "Aliens", year: 1986 },
    { label: "Oldboy", year: 2003 },
    { label: "Once Upon a Time in America", year: 1984 },
    { label: "Witness for the Prosecution", year: 1957 },
    { label: "Das Boot", year: 1981 },
    { label: "Citizen Kane", year: 1941 },
    { label: "North by Northwest", year: 1959 },
    { label: "Vertigo", year: 1958 },
    {
      label: "Star Wars: Episode VI - Return of the Jedi",
      year: 1983,
    },
    { label: "Reservoir Dogs", year: 1992 },
    { label: "Braveheart", year: 1995 },
    { label: "M", year: 1931 },
    { label: "Requiem for a Dream", year: 2000 },
    { label: "Amélie", year: 2001 },
    { label: "A Clockwork Orange", year: 1971 },
    { label: "Like Stars on Earth", year: 2007 },
    { label: "Taxi Driver", year: 1976 },
    { label: "Lawrence of Arabia", year: 1962 },
    { label: "Double Indemnity", year: 1944 },
    {
      label: "Eternal Sunshine of the Spotless Mind",
      year: 2004,
    },
    { label: "Amadeus", year: 1984 },
    { label: "To Kill a Mockingbird", year: 1962 },
    { label: "Toy Story 3", year: 2010 },
    { label: "Logan", year: 2017 },
    { label: "Full Metal Jacket", year: 1987 },
    { label: "Dangal", year: 2016 },
    { label: "The Sting", year: 1973 },
    { label: "2001: A Space Odyssey", year: 1968 },
    { label: "Singin' in the Rain", year: 1952 },
    { label: "Toy Story", year: 1995 },
    { label: "Bicycle Thieves", year: 1948 },
    { label: "The Kid", year: 1921 },
    { label: "Inglourious Basterds", year: 2009 },
    { label: "Snatch", year: 2000 },
    { label: "3 Idiots", year: 2009 },
    { label: "Monty Python and the Holy Grail", year: 1975 },
  ];

  useEffect(() => {
    if (dialogOpen) {
      setAutocompleteOpen(true);
    }
  }, [dialogOpen]);
  const handleFromLanguageChange = (event, newValue) => {
    setSelectedFromLanguage(newValue);
  };

  const handleChange = (event, newValue) => {
    setSelectedLanguages(newValue);
    setInputValue(newValue.length > 1 ? `${newValue.length} languages selected` : newValue.join(', '));
  };

  const [from, setFrom] = useState("");

  const handleFileDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    // Handle dropped files here (e.g., store them in state or perform any other actions)
    console.log(files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleAutocompleteClick = () => {
    setDialogOpen(true);
  };


  const handleDialogClose = () => {
    setDialogOpen(false);
  };
  const closeDialog=()=>{
    setDialogOpen(false)
  }
  const handleTextFieldClick = () => {
    setDialogOpen(true);
  };
  const openFormatDialog=()=>{
setFormatDialogOpen(true)
  }
  const handleFormatDialogClose=()=>{
    setFormatDialogOpen(false)
  }
  return (
    <Container>
      <Toolbar className="cat_tool_desc">
        <Typography variant="h3">The CAT tool that works for you</Typography>
        <form>
          <Toolbar container spacing={3} className="form_grid">
            <FormGroup className="form_group">
              <Typography variant="body1" gutterBottom>
                Project Name
              </Typography>
              <TextField
                id="project-name"
                variant="outlined"
                fullWidth
                required
                placeholder="Enter project name"
              />
       

            </FormGroup>

            <FormGroup className="form_group">
              <Typography variant="body1" gutterBottom>
                From
              </Typography>
              <Autocomplete
                className="search_lang"
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                onChange={handleFromLanguageChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </FormGroup>

            <FormGroup className="form_group">
              <Typography variant="body1" gutterBottom>
                To
              </Typography>
                    <Stack spacing={2}>
                    <TextField
                    value={inputValue}
                    onClick={handleTextFieldClick}
                    placeholder="Select Languages"
                    fullWidth
                    variant="outlined"
                    InputProps={{
                      readOnly: true,
                    }}
                  />
        </Stack>

            </FormGroup>

            <FormGroup className="form_group">
              <Typography variant="body1" gutterBottom>
                Select Subject
              </Typography>
              <Autocomplete
                disablePortal
                className="search_lang"
                id="combo-box-demo"
                options={[]}
                renderInput={(params) => <TextField {...params} />}
              />
            </FormGroup>

            <FormGroup className="form_group">
              <Typography variant="body1" gutterBottom>
                TM & Glossary
              </Typography>
              <Autocomplete
                disablePortal
                className="search_lang"
                id="combo-box-demo"
                options={[]}
                renderInput={(params) => <TextField {...params} />}
              />
            </FormGroup>

            <FormGroup>
              <Typography variant="body1" gutterBottom>
                &nbsp;
              </Typography>
              <FormControl
                fullWidth
                variant="outlined"
                className="sidebar_opening"
              >
                <Button onClick={toggleDrawer(true)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width={"15px"}
                  >
                    <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
                  </svg>{" "}
                  More Settings
                </Button>
              </FormControl>
            </FormGroup>
          </Toolbar>


          {/* dialog start */}
          
          <Toolbar>
            <Dialog open={dialogOpen} onClose={handleDialogClose} className="multilang_dialog">
              <div style={{display:'flex',justifyContent:'space-between'}} className="header_top">
              <DialogTitle>Select Languages</DialogTitle>
              <button onClick={closeDialog}>X</button>
              </div>
          
              <DialogContent className="dialog_content">
                <div ref={autocompleteRef}>
                  <Toolbar className="w-100">
                  <b>From</b> <span>{selectedFromLanguage ? selectedFromLanguage.label : "Select a language"}</span>
                  </Toolbar>
                  <Toolbar className="w-100">
                    <b>To</b> 
                    <Autocomplete
                      multiple
                      open={autocompleteOpen}
                      value={selectedLanguages}
                      onChange={handleChange}
                      options={languages}
                      disableCloseOnSelect
                      getOptionLabel={(option) => option}
                      renderOption={(props, option, { selected }) => (
                        <li {...props}>
                          <Checkbox
                            checked={selected}
                            style={{ marginRight: 8 }}
                          />
                          <ListItemText primary={option} />
                        </li>
                      )}
                      PopperComponent={(props) => <Popper {...props} id="target-language" placement='bottom'></Popper>}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          className="selected-lang"
                          label="Select Languages"
                          variant="outlined"
                          autoFocus
                        />
                      )}
                      componentsProps={{
                        paper: {
                          sx: {
                            display: 'flex',
                            flexWrap: 'wrap',
                            flexDirection: 'row',
                            gap: '10px',
                            padding: '10px'
                          }
                        },
                        popper: {
                          sx: {
                            width: 'auto',
                          }
                        }
                      }}
                    />
                  </Toolbar>
                </div>
              </DialogContent>
              <DialogActions>
                {/* <Button onClick={handleDialogClose}>Cancel</Button> */}
                <Button onClick={handleDialogClose} className="btn_confirm">Confirm</Button>
              </DialogActions>
            </Dialog>
          </Toolbar>

      {/* dialog end  */}




      <Toolbar>
      <Dialog open={formatDialogOpen} onClose={handleFormatDialogClose} className="multilang_dialog">
              <div style={{display:'flex',justifyContent:'space-between'}} className="header_top">
              <DialogTitle>Select Languages</DialogTitle>
              <button onClick={handleFormatDialogClose}>X</button>
              </div>
          
              <DialogContent className="dialog_content">
                
                  <div class="fileformat">
                    <div class="format-box">
                      <h3>Office</h3>
                      <div class="file-list">
                        <div><span class="extdoc">pages</span></div>
                        <div><span class="extdoc">doc</span></div>
                        <div><span class="extdoc">dot</span></div>
                        <div><span class="extdoc">docx</span></div>
                        <div><span class="extdoc">docm</span></div>
                        <div><span class="extdoc">dotx</span></div>
                        <div><span class="extdoc">dotm</span></div>
                        <div><span class="extdoc">rtf</span></div>
                        <div><span class="extdoc">odt</span></div>
                        <div><span class="extdoc">ott</span></div>
                        <div><span class="extpdf">pdf</span></div>
                        <div><span class="extxls">numbers</span></div>
                        <div><span class="exttxt">txt</span></div>
                        <div><span class="extxls">xls</span></div>
                        <div><span class="extxls">xlt</span></div>
                        <div><span class="extxls">xlsx</span></div>
                        <div><span class="extxls">xlsm</span></div>
                        <div><span class="extxls">xltx</span></div>
                        <div><span class="extxls">xltm</span></div>
                        <div><span class="extxls">ods</span></div>
                        <div><span class="extxls">ots</span></div>
                        <div><span class="extxls">tsv</span></div>
                        <div><span class="extppt">key</span></div>
                        <div><span class="extppt">ppt</span></div>
                        <div><span class="extppt">pps</span></div>
                        <div><span class="extppt">pot</span></div>
                        <div><span class="extppt">pptx</span></div>
                        <div><span class="extppt">pptm</span></div>
                        <div><span class="extppt">ppsx</span></div>
                        <div><span class="extppt">ppsm</span></div>
                        <div><span class="extppt">potx</span></div>
                        <div><span class="extppt">potm</span></div>
                        <div><span class="extppt">odp</span></div>
                        <div><span class="extppt">otp</span></div>
                        <div><span class="extxml">xml</span></div>
                        <div><span class="extzip">zip</span></div>
                      </div>
                    </div>
                    <div class="format-box">
                      <h3>Web</h3>
                      <div class="file-list">
                        <div><span class="exthtm">htm</span></div>
                        <div><span class="exthtm">html</span></div>
                        <div><span class="exthtm">xhtml</span></div>
                        <div><span class="extxml">xml</span></div>
                        <div><span class="extxml">dtd</span></div>
                        <div><span class="extxml">json</span></div>
                        <div><span class="extxml">jsont</span></div>
                        <div><span class="extxml">jsont2</span></div>
                        <div><span class="extxml">yaml</span></div>
                        <div><span class="extxml">yml</span></div>
                        <div><span class="extxml">md</span></div>
                      </div>
                    </div>
                    <div class="format-box">
                      <h3>Scanned Files</h3>
                      <div class="file-list">
                        <div><span class="extpdf">pdf</span></div>
                        <div><span class="extimg">bmp</span></div>
                        <div><span class="extimg">png</span></div>
                        <div><span class="extimg">gif</span></div>
                        <div><span class="extimg">jpeg</span></div>
                        <div><span class="extimg">jpg</span></div>
                        <div><span class="extimg">jfif</span></div>
                        <div><span class="extimg">tiff</span></div>
                      </div>
                    </div>
                    <div class="format-box">
                      <h3>Interchange Formats</h3>
                      <div class="file-list">
                        <div><span class="extxif">xliff</span></div>
                        <div><span class="extxif">sdlxliff</span></div>
                        <div><span class="exttmx">tmx</span></div>
                        <div><span class="extttx">ttx</span></div>
                        <div><span class="extxlf">xlf</span></div>
                      </div>
                    </div>
                    <div class="format-box">
                      <h3>Desktop Publishing</h3>
                      <div class="file-list">
                        <div><span class="extmif">mif</span></div>
                        <div><span class="extidd">idml</span></div>
                        <div><span class="exticml">icml</span></div>
                        <div><span class="extxml">xml</span></div>
                        <div><span class="extdit">dita</span></div>
                      </div>
                    </div>
                    <div class="format-box">
                      <h3>Localization</h3>
                      <div class="file-list">
                        <div><span class="extpro">properties</span></div>
                        <div><span class="extres">resx</span></div>
                        <div><span class="extxml">xml</span></div>
                        <div><span class="extxml">sxml</span></div>
                        <div><span class="extxml">txml</span></div>
                        <div><span class="extdit">dita</span></div>
                        <div><span class="extxml">Android xml</span></div>
                        <div><span class="extstr">strings</span></div>
                        <div><span class="extsbv">sbv</span></div>
                        <div><span class="extsrt">srt</span></div>
                        <div><span class="extvtt">vtt</span></div>
                        <div><span class="extwix">wix</span></div>
                        <div><span class="extpo">po</span></div>
                        <div><span class="extg">g</span></div>
                        <div><span class="exts">QT linguist ts</span></div>
                      </div>
                    </div>
                  </div>

              </DialogContent>
              <DialogActions>
                {/* <Button onClick={handleDialogClose}>Cancel</Button> */}
                {/* <Button onClick={handleDialogClose} className="btn_confirm">Confirm</Button> */}
              </DialogActions>
            </Dialog>
      </Toolbar>
          <Paper
            className="drag_upload"
            variant="outlined"
            elevation={0}
            onDrop={handleFileDrop}
            onDragOver={handleDragOver}
          >
            <input
              type="file"
              id="file-input"
              style={{ display: "none" }}
              multiple
              onChange={(e) => {
                const files = e.target.files;
                // Handle selected files here (e.g., store them in state or perform any other actions)
                console.log(files);
              }}
            />
            <label htmlFor="file-input">
              <IconButton component="span">
                <UploadIcon />
              </IconButton>
              <Typography variant="h4">
                Drop your files to translate them with Matecat
              </Typography>
              <Typography variant="body1">or click here to browse</Typography>
            </label>
          </Paper>
        </form>
        <Toolbar className="form_bottom_bar">
          <Typography variant="body1">
            Matecat supports <Link><span onClick={openFormatDialog}>80 file formats</span></Link> and <Link>Google drive</Link> files
          </Typography>
          <Button type="submit" variant="contained" color="primary">
            Analyze
          </Button>
        </Toolbar>
      </Toolbar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        className="drawer_sidebar"
      >
        {/* Sidebar */}
        <Toolbar class="settings-panel-header">
          <Toolbar class="settings-panel-header-logo"></Toolbar>
          <span>Settings</span>
          <Toolbar class="close-matecat-modal x-popup">
            <svg
              onClick={toggleDrawer(false)}
              width="18"
              height="18"
              fill="none"
              viewBox="0 0 24 24"
            >
              <g clip-path="url(#a)">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  d="M7 7l10 10M7 17L17 7"
                ></path>
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M0 0h24v24H0z"></path>
                </clipPath>
              </defs>
            </svg>
          </Toolbar>
        </Toolbar>

        <Toolbar className="sidebar_tabs">
          <SideBarTabs />
        </Toolbar>
      </Drawer>
    </Container>
  );
}
