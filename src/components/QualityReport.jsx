import React, { useState, useRef, useEffect } from 'react';
import data from './QualityData.json';
import {
  Box,
  Typography,
  Grid,
  Chip,
  createTheme,
  LinearProgress,
  ThemeProvider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
  MenuItem,
  Select,
  TextField,
  FormControl,
  IconButton,
} from '@mui/material';
import { FaCircle, FaTimes } from 'react-icons/fa';
import ErrorOutlineIcon from '@mui/icons-material/Cancel';

const data1 = [
  { issue: 'Style (readability, consistent style and tone)', major: '', minor: '', neutral: '', total: 0 },
  { issue: 'Tag issues (mismatches, whitespaces)', major: '', minor: '', neutral: '', total: 0 },
  { issue: 'Translation errors (mistranslation, additions or omissions)', major: '', minor: '', neutral: '', total: 0 },
  { issue: 'Terminology and translation consistency', major: '', minor: '', neutral: '', total: 0 },
  { issue: 'Language quality (grammar, punctuation, spelling)', major: '', minor: '', neutral: '', total: 0 },
];

const theme = createTheme({
  typography: {
    fontFamily: 'Calibri',
  },
});

const statusColors = {
  NEW: '#ffffff',
  DRAFT: '#928e85',
  TRANSLATED: '#6f9cde',
  APPROVED: '#4caf50',
  REJECTED: '#ff9800',
};


const issueSeverities = [
  "Neutral",
  "Minor",
  "Major"
];

const CustomBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '16px',
  backgroundColor: '#e0e7f1',
  borderRadius: '4px',
  height: '90px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  marginBottom: '16px',
});

const CustomLinearProgress = styled(LinearProgress)({
  height: '12px',
  borderRadius: '4px',
  width: '150px',
  '&.MuiLinearProgress-colorPrimary': {
    backgroundColor: '#eeeeee',
  },
  '& .MuiLinearProgress-bar': {
    backgroundColor: '#1976d2',
  },
});

const CustomChip = ({ label }) => (
  <Chip
    icon={<ErrorOutlineIcon sx={{ color: 'red' }} />}
    label={label}
    sx={{
      backgroundColor: '#dddddd',
      color: '#545454',
      marginTop: '4px',
      marginRight: '4px',
      borderRadius: 0,
      fontSize: '16px',
      border: '1px solid #ccc',
      display: 'flex',
      alignItems: 'center',
    }}
  />
);

const QualityReport = () => {
  const [filterId, setFilterId] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [filterSeverity, setFilterSeverity] = useState('');
  const [anchorOrigin, setAnchorOrigin] = useState({ vertical: 'bottom', horizontal: 'left' });
  const [transformOrigin, setTransformOrigin] = useState({ vertical: 'top', horizontal: 'left' });
  const selectRef = useRef(null);

  const issueCategories = ['All', ...new Set(data1.map(item => item.issue))];

  const handleFilterIdChange = (event) => {
    setFilterId(event.target.value);
  };

  const handleFilterStatusChange = (event) => {
    setFilterStatus(event.target.value);
  };


  const handleClearFilterStatus = () => {
    setFilterStatus('');
  };

  const handleFilterCategoryChange = (event) => {
    setFilterCategory(event.target.value);
  };

  const handleFilterSeverityChange = (event) => {
    setFilterSeverity(event.target.value);
  };

  const handleClearFilterCategory = () => {
    setFilterCategory('');
  };

  const handleClearFilterSeverity = () => {
    setFilterSeverity('');
  };

  const filteredData = data.filter((item) => {
    const matchesId = filterId === '' || item.id.toString().includes(filterId);
    const matchesStatus = filterStatus === '' || item.segmentStatus === filterStatus;
    const matchesCategory = filterCategory === '' || item.issueCategory === filterCategory;
    const matchesSeverity = filterSeverity === '' || item.issueSeverity === filterSeverity;
    return matchesId && matchesStatus && matchesCategory && matchesSeverity;
  });
  useEffect(() => {
    const handleResize = () => {
      if (selectRef.current) {
        const rect = selectRef.current.getBoundingClientRect();
        const spaceBelow = window.innerHeight - rect.bottom;
        const spaceAbove = rect.top;

        if (spaceBelow < '20px') {
          setAnchorOrigin({ vertical: 'top', horizontal: 'left' });
          setTransformOrigin({ vertical: 'bottom', horizontal: 'left' });
        }
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: '#f5f6f7', minHeight: '100vh', padding: '32px 16px', fontFamily: 'Calibri' }}>
        <Box display="flex" justifyContent="flex-start" sx={{ paddingLeft: '4px', paddingBottom: '16px' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#000000', fontSize: '24px' }}>
            QR Job Summary
          </Typography>
        </Box>
        <CustomBox sx={{ height: '60px', boxShadow: '0px 2px 8px 1px rgba(99, 99, 99, 0.8)', fontFamily: 'Calibri' }}>
          <Box>
            <Typography variant="body2" sx={{ color: '#333', fontSize: '16px' }}>
              ID: 9660627
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#000000', fontSize: '18px' }}>
              English (USA)
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#b2b2b2', margin: '0 8px', fontSize: '24px' }}>
              &gt;
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#000000', fontSize: '18px' }}>
              Italian (Italy)
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <CustomLinearProgress variant="determinate" value={4} />
            <Typography variant="body2" sx={{ marginLeft: 1, color: '#000000', fontSize: '18px' }}>4%</Typography>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="flex-start">
            <Typography variant="body2" sx={{ color: '#000000', fontSize: '16px' }}>
              Reviewed Words
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#000000', fontSize: '18px' }}>0</Typography>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="flex-start">
            <Typography variant="body2" sx={{ color: '#000000', fontSize: '16px' }}>
              Translator
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#000000', fontSize: '18px' }}>Not assigned</Typography>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="flex-start">
            <Typography variant="body2" sx={{ color: '#000000', fontSize: '16px' }}>
              Time to edit
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#000000', fontSize: '18px' }}>00:00:00</Typography>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="flex-start">
            <Typography variant="body2" sx={{ color: '#000000', fontSize: '16px' }}>
              PEE
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#000000', fontSize: '18px' }}>0%</Typography>
          </Box>
          <Box display="flex" flexDirection="column">
            <Box display="flex" flexDirection="row" alignItems="center" paddingTop="10px">
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#333', fontSize: '50px', paddingRight: '14px' }}>
                0
              </Typography>
              <Box display="flex" flexDirection="column" alignItems="flex-start">
                <Typography variant="body2" sx={{ color: '#333', fontSize: '16px', lineHeight: '1.2', margin: 0 }}>Quality score</Typography>
                <Typography variant="body2" sx={{ color: '#333', fontSize: '22px', lineHeight: '1.2', margin: 0 }}>No revision</Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', paddingLeft: '4px' }}>
              <Typography variant="body2" sx={{ color: '#333', fontSize: '17px', lineHeight: '0', margin: 0, paddingBottom: 2 }}>
                Threshold 20
              </Typography>
            </Box>
          </Box>
        </CustomBox>

        <TableContainer component={Paper} sx={{ backgroundColor: '#eeeeee', marginTop: '32px', boxShadow: '0px 2px 8px 1px rgba(99, 99, 99, 0.6)', fontFamily: 'Calibri' }}>
          <Table>
            <TableHead>
              <TableRow sx={{ height: '60px', backgroundColor: '#eeeeee', width: '100%' }}>
                <TableCell sx={{ width: '40%', fontSize: '18px' }}>Issues</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold', width: '15%', fontSize: '18px' }}>Major</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold', width: '15%', fontSize: '18px' }}>Minor</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold', width: '15%', fontSize: '18px' }}>Neutral</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold', width: '15%', backgroundColor: 'rgb(120, 129, 144)', color: '#000000' }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: '18px' }}>
                      Total Error Points
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 'bold', marginTop: '8px', fontSize: '18px' }}>
                      0
                    </Typography>
                  </Box>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableRow sx={{ height: '20px', backgroundColor: '#f4f7f9', border: '4px solid #f4f7f9' }}>
              <TableCell sx={{ width: '40%', padding: '0 8px' }}></TableCell>
              <TableCell align="center" sx={{ width: '15%', fontSize: '15px', padding: '0 8px' }}>Weight: 2</TableCell>
              <TableCell align="center" sx={{ width: '15%', fontSize: '15px', padding: '0 8px' }}>Weight: 0.5</TableCell>
              <TableCell align="center" sx={{ width: '15%', fontSize: '15px', padding: '0 8px' }}>Weight: 0</TableCell>
              <TableCell align="center" sx={{ width: '15%', fontSize: '15px', padding: '0 8px' }}></TableCell>
            </TableRow>
            <TableBody>
              {data1.map((row, index) => (
                <TableRow key={index} sx={{ backgroundColor: '#ffffff', '& td': { height: '23px' }, paddingLeft: '32px', borderLeft: '4px solid #f4f7f9' }}>
                  <TableCell sx={{ width: '40%', borderRight: '2px solid #eeeeee', fontSize: '16px' }}>{row.issue}</TableCell>
                  <TableCell align="center" sx={{ width: '15%', borderRight: '2px solid #eeeeee', fontSize: '16px' }}>{row.major}</TableCell>
                  <TableCell align="center" sx={{ width: '15%', borderRight: '2px solid #eeeeee', fontSize: '16px' }}>{row.minor}</TableCell>
                  <TableCell align="center" sx={{ width: '15%', borderRight: '2px solid #eeeeee', fontSize: '16px' }}>{row.neutral}</TableCell>
                  <TableCell align="center" sx={{ width: '15%', fontSize: '17px' }}>{row.total}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box sx={{ backgroundColor: '#eeeeee', padding: '16px', marginBottom: '16px', marginTop: '32px', boxShadow: '0px 2px 8px 1px rgba(99, 99, 99, 0.6)', fontFamily: 'Calibri' }}>
          <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ paddingBottom: '16px' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#000000', fontSize: '20px' }}>
              Segment details
            </Typography>
            <Box display="flex" alignItems='center' gap={2}>
              <Typography variant="h6" sx={{ color: '#000000', fontSize: '18px' }}>
                Filters by
              </Typography>
              <FormControl variant="outlined" size="small" sx={{ width: '150px', backgroundColor: '#fff', borderRadius: '32px', position: 'relative' }}>
        <TextField
          label="Id Segment"
          variant="outlined"
          size="small"
          value={filterId}
          onChange={handleFilterIdChange}
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: '32px' } }}
          InputProps={{
            endAdornment: filterId && (
              <IconButton size="small" onClick={() => setFilterId('')}>
                <FaTimes />
              </IconButton>
            ),
          }}
          InputLabelProps={{
            shrink: false,
            sx: {
              color: '#666',
              '&.Mui-focused': {
                display: 'none'
              }
            }
          }}
        />
      </FormControl>  
     <FormControl
      variant="outlined"
      size="small"
      sx={{ width: '150px', backgroundColor: '#fff', borderRadius: '32px', position: 'relative' }}
      ref={selectRef}
    >
      <Select
        displayEmpty
        value={filterStatus}
        onChange={handleFilterStatusChange}
        sx={{ borderRadius: '32px', fontFamily: 'Calibri', '& .MuiSelect-icon': { display: 'none' } }}
        renderValue={(selected) => {
          if (!selected) {
            return <em style={{ color: '#666' }}>Segment status</em>;
          }
          return selected;
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              mt: anchorOrigin.vertical === 'top' ? '-4px' : 2,
              '& .MuiMenu-list': {
                py: 0,
              },
            },
          },
          anchorOrigin: anchorOrigin,
          transformOrigin: transformOrigin,
          getContentAnchorEl: null,
        }}
      >
        {Object.entries(statusColors).map(([status, color]) => (
          <MenuItem key={status} value={status}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <FaCircle style={{ color, marginRight: '8px', border: status === 'NEW' ? '1px solid grey' : 'none', borderRadius: '50%' }} />
              {status}
            </Box>
          </MenuItem>
        ))}
      </Select>
      {filterStatus && (
        <IconButton
          onClick={handleClearFilterStatus}
          size="small"
          sx={{ position: 'absolute', right: '8px', top: '50%', transform: 'translateY(-50%)' }}
        >
          <FaTimes />
        </IconButton>
      )}
    </FormControl>


      <FormControl
        variant="outlined"
        size="small"
        sx={{ width: '150px', backgroundColor: '#fff', borderRadius: '32px', position: 'relative' }}
      >
        <Select
          displayEmpty
          value={filterCategory}
          onChange={handleFilterCategoryChange}
          sx={{ borderRadius: '32px', fontFamily: 'Calibri', '& .MuiSelect-icon': { display: 'none' } }}
          renderValue={(selected) => {
            if (!selected) {
              return <em style={{ color: '#666' }}>Issue category</em>;
            }
            return selected;
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                mt: 2,
                '& .MuiMenu-list': {
                  py: 0,
                },
              },
            },
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'left',
            },
            transformOrigin: {
              vertical: 'top',
              horizontal: 'left',
            },
            getContentAnchorEl: null,
          }}
        >
          {issueCategories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
        {filterCategory && (
          <IconButton
            onClick={handleClearFilterCategory}
            size="small"
            sx={{ position: 'absolute', right: '8px', top: '50%', transform: 'translateY(-50%)' }}
          >
            <FaTimes />
          </IconButton>
        )}
      </FormControl>
      <FormControl
        variant="outlined"
        size="small"
        sx={{ width: '150px', backgroundColor: '#fff', borderRadius: '32px', position: 'relative' }}
      >
        <Select
          displayEmpty
          value={filterSeverity}
          onChange={handleFilterSeverityChange}
          sx={{ borderRadius: '32px', fontFamily: 'Calibri', '& .MuiSelect-icon': { display: 'none' } }}
          renderValue={(selected) => {
            if (!selected) {
              return <em style={{ color: '#666' }}>Issue severity</em>;
            }
            return selected;
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                mt: 2,
                '& .MuiMenu-list': {
                  py: 0,
                },
              },
            },
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'left',
            },
            transformOrigin: {
              vertical: 'top',
              horizontal: 'left',
            },
            getContentAnchorEl: null,
          }}
        >
          {issueSeverities.map((severity) => (
            <MenuItem key={severity} value={severity}>
              {severity}
            </MenuItem>
          ))}
        </Select>
        {filterSeverity && (
          <IconButton
            onClick={handleClearFilterSeverity}
            size="small"
            sx={{ position: 'absolute', right: '8px', top: '50%', transform: 'translateY(-50%)' }}
          >
            <FaTimes />
          </IconButton>
        )}
      </FormControl>




            </Box>
          </Box>
          <Box display="flex" justifyContent="flex-start" sx={{ paddingBottom: '22px', paddingTop: '28px' }}>
            <Typography variant="h6" sx={{ color: '#000000', fontSize: '17px' }}>
              FILE Improving the realism of AI voice cloning.pdf
            </Typography>
          </Box>
          {filteredData.map((item) => (
            <Box key={item.id} sx={{ marginBottom: '40px', boxShadow: '0px 2px 8px 0px rgba(99, 99, 99, 0.6)' }}>
              <Grid container alignItems="center" spacing={0} sx={{ height: '80px', backgroundColor: '#ffffff', boxShadow: '0px 5px 2.6px rgba(0, 0, 0, 0.15)', zIndex: '10' }}>
                <Grid item xs={2} container alignItems="center">
                  <Typography variant="body2" sx={{ color: '#000000', fontSize: '18px', paddingLeft: '12px' }}>
                    {item.id}
                  </Typography>
                </Grid>
                <Grid item xs={8} container display="flex" justifyContent="space-between">
                  <Typography variant="body2" sx={{ color: '#000000', fontSize: '18px', paddingLeft: '12px' }}>
                    Secs/Word: <Box component="span" sx={{ fontWeight: 'bold', fontSize: '20px' }}>{item.secPerWord}</Box> &nbsp;&nbsp;&nbsp; PEE: <Box component="span" sx={{ fontWeight: 'bold', fontSize: '20px' }}>{item.pee}</Box>
                  </Typography>
                </Grid>
                <Grid item xs={2} container direction="column" alignItems="flex-start" justifyContent="center" sx={{ height: '100%', paddingLeft: '12px' }}>
                <Typography variant="body2" sx={{ color: '#000000', fontSize: '18px' }}>
                  Segment status
                </Typography>
                  <Typography variant="body2" sx={{ color: item.segmentStatus === 'NEW' ? '#ffffff' : item.segmentStatus === 'DRAFT' ? '#928e85' : item.segmentStatus === 'TRANSLATED' ? '#6f9cde' : item.segmentStatus === 'APPROVED' ? '#4caf50' : item.segmentStatus === 'REJECTED' ? '#ff9800' : '#928e85', fontWeight: 'bold', fontSize: '22px' }}>
                    {item.segmentStatus}
                  </Typography>
                </Grid>
              </Grid>

              <Grid container alignItems="center" justifyContent="center" spacing={0} sx={{ height: '60px', bgcolor: '#ffffff', border: '1px solid #ccc', borderBottom: '1px solid #e8e8e8' }}>
                <Grid item xs={2} container alignItems="center" sx={{ height: '100%', bgcolor: '#f5f5f5' }}>
                  <Typography variant="body2" sx={{ color: '#000000', fontWeight: 'bold', fontSize: '18px', paddingLeft: '12px' }}>
                    Source
                  </Typography>
                </Grid>
                <Grid item xs={8} container alignItems="center" sx={{ borderRight: '1px solid #ccc', height: '100%' }}>
                  <Typography variant="body2" sx={{ color: '#545454', fontSize: '18px', paddingLeft: '12px', paddingRight: '12px', textAlign: 'left' }}>
                    {item.sourceText}
                  </Typography>
                </Grid>
                <Grid item xs={2} container alignItems="center" sx={{ height: '100%' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', paddingRight: '12px', paddingLeft: '12px' }}>
                    <Typography variant="body2" sx={{ color: '#000000', fontSize: '18px' }}>
                      Words:
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: '20px', color: '#000000' }}>
                      {item.words}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>

              {item.suggestionText && (
                <Grid container alignItems="center" justifyContent="center" spacing={0} sx={{ height: '60px', bgcolor: '#ffffff', borderLeft: '1px solid #ccc', borderRight: '1px solid #ccc', borderTop: '1px solid #ccc', borderBottom: '1px solid #e8e8e8' }}>
                  <Grid item xs={2} container alignItems="center" sx={{ height: '100%', bgcolor: '#f5f5f5' }}>
                    <Typography variant="body2" sx={{ color: '#000000', fontWeight: 'bold', fontSize: '18px', paddingLeft: '12px' }}>
                      Suggestion
                    </Typography>
                  </Grid>
                  <Grid item xs={8} container alignItems="center" sx={{ borderRight: '1px solid #ccc', height: '100%' }}>
                    <Typography variant="body2" sx={{ color: '#545454', fontSize: '18px', paddingLeft: '12px', paddingRight: '12px', textAlign: 'left' }}>
                      {item.suggestionText}
                    </Typography>
                  </Grid>
                  <Grid item xs={2} container alignItems="center" sx={{ height: '100%' }}>
                    <Typography variant="body2" sx={{ color: '#545454', paddingLeft: '12px' }}>
                      {item.mtLabel && (
                        <Chip label={item.mtLabel} sx={{ backgroundColor: '#ffd700', color: '#000000', fontWeight: 'bold', borderRadius: 0, fontSize: '18px' }} />
                      )}
                    </Typography>
                  </Grid>
                </Grid>
              )}

              {item.segmentStatus === 'TRANSLATED' && item.translationText && (
                <Grid container alignItems="center" justifyContent="center" spacing={0} sx={{ height: '60px', bgcolor: '#ffffff', borderLeft: '1px solid #ccc', borderRight: '1px solid #ccc', borderTop: '1px solid #ccc', borderBottom: '1px solid #e8e8e8' }}>
                  <Grid item xs={2} container alignItems="center" sx={{ height: '100%', bgcolor: '#f5f5f5' }}>
                    <Typography variant="body2" sx={{ color: '#000000', fontWeight: 'bold', fontSize: '18px', paddingLeft: '12px' }}>
                      Translation
                    </Typography>
                  </Grid>
                  <Grid item xs={8} container alignItems="center" sx={{ borderRight: '1px solid #ccc', height: '100%' }}>
                    <Typography variant="body2" sx={{ color: '#545454', fontSize: '18px', textAlign: 'left', paddingLeft: '12px', paddingRight: '12px' }}>
                      {item.translationText}
                    </Typography>
                  </Grid>
                  <Grid item xs={2} container alignItems="center" sx={{ height: '100%' }}></Grid>
                </Grid>
              )}

              {item.qaTags.length > 0 && (
                <Grid container alignItems="center" justifyContent="center" spacing={0} sx={{ height: '60px', bgcolor: '#ffffff', border: '1px solid #ccc' }}>
                  <Grid item xs={2} container alignItems="center" sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', paddingRight: '12px', height: '100%', bgcolor: '#f5f5f5' }}>
                    <Typography variant="body2" sx={{ color: '#000000', fontWeight: 'bold', fontSize: '18px', paddingLeft: '12px' }}>
                      QA
                    </Typography>
                    {item.qaTags.map((tag, index) => (
                      tag.includes('Automated') && (
                        <Chip
                          key={index}
                          label={tag}
                          sx={{
                            backgroundColor: '#ddddddd',
                            color: '#545454',
                            marginTop: '4px',
                            borderRadius: 0,
                            fontSize: '15px',
                            border: '1px solid #ccc',
                          }}
                        />
                      )
                    ))}
                  </Grid>
                  <Grid item xs={10} container alignItems="center" sx={{ height: '100%', paddingLeft: '12px' }}>
                    {item.qaTags.map((tag, index) => (
                      !tag.includes('Automated') && (
                        <CustomChip
                          key={index}
                          label={tag}
                        />
                      )
                    ))}
                  </Grid>
                </Grid>
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default QualityReport;
