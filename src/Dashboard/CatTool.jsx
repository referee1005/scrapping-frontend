import React from 'react';
import { Container, Toolbar, Typography, TextField, Select, MenuItem, FormControl, InputLabel, Button, Grid, Paper, IconButton, FormGroup } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import UploadIcon from '@mui/icons-material/Upload';

import { Link } from 'react-router-dom';

export default function CatTool() {
  const handleFileDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    // Handle dropped files here (e.g., store them in state or perform any other actions)
    console.log(files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <Toolbar className='cat_tool_desc'>
      <Container>
        <Typography variant='h3'>The CAT tool that works for you</Typography>
        <form>
          <Toolbar container spacing={3} className='form_grid'>
            <FormGroup className='form_group'>
              <Typography variant="body1" gutterBottom>Project Name</Typography>
              <TextField
                id="project-name"
                variant="outlined"
                fullWidth
                required
                placeholder="Enter project name"
              />
            </FormGroup>

            <FormGroup className='form_group'>
              <Typography variant="body1" gutterBottom>From</Typography>
              <FormControl fullWidth variant="outlined">
                <Select
                  id="type-form"
                  value=""
                  required
                >
                  <MenuItem value="">Select Type Form & To</MenuItem>
                  <MenuItem value="type1">Type 1</MenuItem>
                  <MenuItem value="type2">Type 2</MenuItem>
                  {/* Add more MenuItem components as needed */}
                </Select>
              </FormControl>
            </FormGroup>

            <FormGroup className='form_group'>
              <Typography variant="body1" gutterBottom>To</Typography>
              <FormControl fullWidth variant="outlined">
                <Select
                  id="type-form"
                  value=""
                  required
                >
                  <MenuItem value="">Select Type Form & To</MenuItem>
                  <MenuItem value="type1">Type 1</MenuItem>
                  <MenuItem value="type2">Type 2</MenuItem>
                  {/* Add more MenuItem components as needed */}
                </Select>
              </FormControl>
            </FormGroup>

            <FormGroup className='form_group'>
              <Typography variant="body1" gutterBottom>Select Subject</Typography>
              <FormControl fullWidth variant="outlined">
                <Select
                  id="subject"
                  value=""
                  required
                >
                  <MenuItem value="">Select Subject</MenuItem>
                  <MenuItem value="subject1">Subject 1</MenuItem>
                  <MenuItem value="subject2">Subject 2</MenuItem>
                  {/* Add more MenuItem components as needed */}
                </Select>
              </FormControl>
            </FormGroup>

            <FormGroup className='form_group'>
              <Typography variant="body1" gutterBottom>Select TM & Glossary</Typography>
              <FormControl fullWidth variant="outlined">
                <Select
                  id="tm-glossary"
                  value=""
                  required
                >
                  <MenuItem value="">Select TM & Glossary</MenuItem>
                  <MenuItem value="tm1">TM 1</MenuItem>
                  <MenuItem value="tm2">TM 2</MenuItem>
                  {/* Add more MenuItem components as needed */}
                </Select>
              </FormControl>
            </FormGroup>
          </Toolbar>
          <Paper
            className='drag_upload'
            variant="outlined"
            elevation={0}
            onDrop={handleFileDrop}
            onDragOver={handleDragOver}
          >
            <input
              type="file"
              id="file-input"
              style={{ display: 'none' }}
              multiple
              onChange={(e) => {
                const files = e.target.files;
                // Handle selected files here (e.g., store them in state or perform any other actions)
                console.log(files);
              }}
            />
            <label htmlFor="file-input">
              <IconButton component="span">
                <img src='./img/upload.svg'/>
              </IconButton>
              <Typography variant="h4">Drop your files to translate them with Matecat</Typography>
              <Typography variant="body1">or click here to browse</Typography>
            </label>
          </Paper>
        </form>
          <Toolbar className='form_bottom_bar'>
            <Typography variant='body1'>Matecat supports 80 file formats and Google drive files</Typography>
            <Button variant="contained" color="primary">
              <Link to={"/analyze"} style={{ textDecoration: "None", color: "white" }}>
                Analyze
              </Link>
            </Button>
          </Toolbar>
      </Container>
    </Toolbar>
  );
}
