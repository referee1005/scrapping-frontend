import React from 'react';
import data from './QualityData.json';
import { Box, Typography, Paper, Divider, Chip, Grid, LinearProgress } from '@mui/material';
import { styled } from '@mui/system';

const QualityReport = () => {

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
        width: '140px',
        '&.MuiLinearProgress-colorPrimary': {
          backgroundColor: '#eeeeee', 
        },
        '& .MuiLinearProgress-bar': {
          backgroundColor: '#1976d2', 
        },
      });
      
  return (
    <Box sx={{ backgroundColor: '#f5f6f7', minHeight: '100vh', padding: '32px 16px' }}>
      <Box display="flex" justifyContent="flex-start" sx={{ paddingLeft: '16px', paddingBottom: '16px' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#000000' }}>
          QR Job Summary
        </Typography>
      </Box>
        <CustomBox>
          <Box>
            <Typography variant="body2" sx={{ color: '#333' }}>
              ID: 9660627
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#000000' }}>
              English (USA)
            </Typography>
            <Typography variant="body2" sx={{ color: '#b2b2b2', margin: '0 8px' }}>
              &gt;
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#000000' }}>
              Italian (Italy)
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <CustomLinearProgress variant="determinate" value={4} />
            <Typography variant="body2" sx={{ marginLeft: 1, color: '#000000' }}>4%</Typography>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="flex-start">
            <Typography variant="body2" sx={{ color: '#000000' }}>
              Reviewed Words
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#000000' }}>0</Typography>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="flex-start">
            <Typography variant="body2" sx={{ color: '#000000' }}>
              Translator
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#000000' }}>Not assigned</Typography>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="flex-start">
            <Typography variant="body2" sx={{ color: '#000000' }}>
              Time to edit
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#000000' }}>00:00:00</Typography>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="flex-start">
            <Typography variant="body2" sx={{ color: '#000000' }}>
              PEE
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#000000' }}>0%</Typography>
          </Box>
          <Box display="flex" flexDirection="column">
          <Box display="flex" flexDirection="row" alignItems="flex-end">
            <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#333' , fontSize:'35px'}}>
              0
            </Typography>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography variant="body2" sx={{ color: '#333' }}>Quality score</Typography>
              <Typography variant="body2" sx={{ color: '#333' }}>No revision</Typography>
            </Box>
          </Box>
          <Typography variant="body2" sx={{ color: '#1976d2', fontWeight: 'bold' }}>
              Threshold 20
            </Typography>
          </Box>
        </CustomBox>

      {data.map(item => (
        
        <Paper key={item.id} sx={{ padding: 2, marginBottom: 2, borderRadius: '4px', backgroundColor: '#ffffff', width: '100%' }}>
          <Grid container alignItems="center" spacing={2} sx={{ marginBottom: '8px', height: '80px', backgroundColor: '#ffffff' }}>
            <Grid item xs={2.4} container alignItems="flex-start">
              <Typography variant="body2" sx={{ color: '#000000', fontSize: '16px', marginBottom: '16px' }}>
                {item.id}
              </Typography>
            </Grid>
            <Grid item xs={7.2} container alignItems="flex-start">
              <Typography variant="body2" sx={{ color: '#000000', fontSize: '15px', marginBottom: '16px' }}>
                Secs/Word: <Box component="span" sx={{ fontWeight: 'bold', fontSize: '18px' }}>{item.secPerWord}</Box> &nbsp;&nbsp;&nbsp; PEE: <Box component="span" sx={{ fontWeight: 'bold', fontSize: '18px' }}>{item.pee}</Box>
              </Typography>
            </Grid>
            <Grid item xs={2.4} container direction="column" alignItems="flex-start">
              <Typography variant="body2" sx={{ color: '#000000', fontSize: '15px' }}>
                Segment status:
              </Typography>
              <Typography variant="body2" sx={{ color: item.segmentStatus === 'TRANSLATED' ? '#6f9cde' : '#928e85', fontWeight: 'bold', fontSize: '20px', marginBottom: '16px' }}>
                {item.segmentStatus}
              </Typography>
            </Grid>
          </Grid>
          
          <Grid container alignItems="center" justifyContent="center" spacing={2} sx={{ marginBottom: '0px', height: '70px', bgcolor: '#f5f5f5' }}>
            <Grid item xs={2.4} container alignItems="flex-start">
              <Typography variant="body2" sx={{ color: '#000000', fontWeight: 'bold', fontSize: '15px', padding: '4px', marginBottom: '16px' }}>
                Source
              </Typography>
            </Grid>
            <Divider orientation="vertical" flexItem sx={{ height: 'auto', alignSelf: 'stretch', marginLeft: '-1px', marginRight: '-1px' }} />
            <Grid item xs={7.2} container alignItems="flex-start">
              <Typography variant="body2" sx={{ color: '#545454', fontSize: '15px', padding: '4px', marginBottom: '16px', textAlign: 'left' }}>
                {item.sourceText}
              </Typography>
            </Grid>
            <Divider orientation="vertical" flexItem sx={{ height: 'auto', alignSelf: 'stretch', marginLeft: '-1px', marginRight: '-1px' }} />
            <Grid item xs={2.4} container alignItems="flex-start">
              <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: '4px', marginBottom: '16px' }}>
                <Typography variant="body2" sx={{ color: '#000000', fontSize: '15px', alignItems: 'center' }}>
                  Words:
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: '17px', color: '#000000', alignItems: 'center', marginBottom: '16px' }}>
                  {item.words}
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Divider sx={{ marginX: '10px' }} />
          {item.suggestionText && (
            <>
              <Divider sx={{ marginY: '7.5px' }} />
              <Grid container alignItems="center" justifyContent="center" spacing={2} sx={{ marginBottom: '0px', height: '70px', bgcolor: '#ffffff' }}>
                <Grid item xs={2.4} container alignItems="flex-start">
                  <Typography variant="body2" sx={{ color: '#000000', fontWeight: 'bold', fontSize: '15px', padding: '4px', marginBottom: '16px' }}>
                    Suggestion
                  </Typography>
                </Grid>
                <Divider orientation="vertical" flexItem sx={{ height: 'auto', alignSelf: 'stretch', marginLeft: '-1px', marginTop:'8px', marginRight: '-1px' }} />
                <Grid item xs={7.2} container alignItems="flex-start">
                  <Typography variant="body2" sx={{ color: '#545454', fontSize: '15px', padding: '4px', marginBottom: '16px', textAlign: 'left' }}>
                    {item.suggestionText}
                  </Typography>
                </Grid>
                <Divider orientation="vertical" flexItem sx={{ height: 'auto', alignSelf: 'stretch', marginLeft: '-1px',  marginTop:'8px', marginRight: '-1px' }} />
                <Grid item xs={2.4} container alignItems="flex-start">
                  <Typography variant="body2" sx={{ color: '#545454', fontSize: '20px', padding: '4px', marginBottom: '16px', textAlign: 'left' }}>
                    {item.mtLabel && (
                      <Chip label={item.mtLabel} sx={{ backgroundColor: '#ffd700', color: '#000000', fontWeight: 'bold', borderRadius: 0 }} />
                    )}
                  </Typography>
                </Grid>
              </Grid>
            </>
          )}
           <Divider sx={{ marginX: '9px' }} />
          {item.segmentStatus === 'TRANSLATED' && item.translationText && (
            <>
              <Divider sx={{ marginY: '7px' }} />
              <Grid container alignItems="center" justifyContent="center" spacing={2} sx={{ marginBottom: '0px', height: '70px', bgcolor: '#ffffff' }}>
                <Grid item xs={2.4} container alignItems="flex-start">
                  <Typography variant="body2" sx={{ color: '#000000', fontWeight: 'bold', fontSize: '15px', padding: '4px', marginBottom: '16px' }}>
                    Translation
                  </Typography>
                </Grid>
                <Divider orientation="vertical" flexItem sx={{ height: 'auto', alignSelf: 'stretch', marginLeft: '-1px', marginTop:'12px' , marginRight: '-1px' }} />
                <Grid item xs={7.2} container alignItems="flex-start">
                  <Typography variant="body2" sx={{ color: '#545454', fontSize: '15px', padding: '4px', marginBottom: '16px', textAlign: 'left' }}>
                    {item.translationText}
                  </Typography>
                </Grid>
                <Divider orientation="vertical" flexItem sx={{ height: 'auto', alignSelf: 'stretch', marginLeft: '-1px' , marginTop:'12px', marginRight: '-1px' }} />
                <Grid item xs={2.4} container alignItems="flex-start">
                </Grid>
              </Grid>
            </>
          )}
          {item.qaTags.length > 0 && (
            <>
              <Divider sx={{ marginY: '9px' }} />
              <Grid container alignItems="center" justifyContent="center" spacing={2} sx={{ marginBottom: '0px', height: '50px', bgcolor: '#ffffff' }}>
  <Grid item xs={2.4} container alignItems="flex-start">
    <Typography variant="body2" sx={{ color: '#000000', fontWeight: 'bold', fontSize: '15px', padding: '4px', marginBottom: '16px' }}>
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
            borderRadius: 0 ,
            alignSelf: 'flex-end'
          }}
        />
      )
    ))}
  </Grid>
  <Divider orientation="vertical" flexItem sx={{ height: 'auto', alignSelf: 'stretch', marginLeft: '-1px', marginRight: '-1px' }} />
  <Grid item xs={9.6} container alignItems="flex-start">
    {item.qaTags.map((tag, index) => (
      !tag.includes('Automated') && (
        <Chip
          key={index}
          label={tag}
          sx={{
            backgroundColor: '#dddddd',
            color:  '#545454',
            marginTop: '4px',
            marginRight: '4px',
            borderRadius: 0 
          }}
        />
      )
    ))}
  </Grid>
</Grid>

            </>
          )}
        </Paper>
      ))}
    </Box>
  );
};

export default QualityReport;
