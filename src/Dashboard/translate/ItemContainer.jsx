import React from 'react'
import Grid from '@mui/material/Grid'
import { TextField } from '@mui/material'
import { makeStyles, withStyles } from '@mui/styles'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ItemFooter from './ItemFooter'
import Button from '@mui/material/Button'
const useStyles = makeStyles({
  customInput: {
    height: '20px !important', // Adjust the height as needed
    padding: 3
  }
})

const ItemContainer = ({
  index,
  editvalue,
  value,
  splitSegment,
  setTranslated,
  invisibleSplitSegment
}) => {
  const classes = useStyles()

  return (
    <>
      {editvalue != value ? (
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <div>
              Created BI applications with QlikView, Tableau, and Power BI for
              marketing, customer acquisition, CRM, responsible gaming,
              payments, and finance.
            </div>
          </Grid>
          <Grid item xs={6}>
            <div>
              Création d'applications BI avec QlikView, Tableau et Power BI pour
              le marketing, l'acquisition de clients, le CRM, les jeux
              responsables, les paiements et les finances.
            </div>
          </Grid>
        </Grid>
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Grid container spacing={2}>
              <Grid item xs={11}>
                Created BI applications with QlikView, Tableau, and Power BI for
                marketing, customer acquisition, CRM, responsible gaming,
                payments, and finance.
                {splitSegment && (
                  <div style={{ float: 'right', marginTop: 50 }}>
                    <Button
                      variant='contained'
                      style={{
                        background: 'rgb(246, 246, 246)',
                        color: 'black',
                        width: 150,
                        textTransform: 'none'
                      }}
                      onClick={invisibleSplitSegment}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant='contained'
                      color='primary'
                      style={{
                        background: '#09c',
                        marginLeft: 50,
                        width: 150,
                        color: 'black',
                        textTransform: 'none'
                      }}
                      disabled
                    >
                      Confirm
                    </Button>
                  </div>
                )}
              </Grid>
              <Grid
                item
                xs={1}
                style={{ verticalAlign: 'middle', cursor: 'pointer' }}
                title='Copy source to target'
              >
                <ArrowForwardIosIcon color='info' cursor />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6}>
            <textarea
              rows={5}
              className='textarea'
              defaultValue={
                "Création d'applications BI avec QlikView, Tableau et Power BI pour le marketing, l'acquisition de clients, le CRM, les jeux responsables, les paiements et les finances."
              }
            ></textarea>
            <div style={{ float: 'right', background: '#09c' }}>
              <Button
                variant='contained'
                style={{ background: '#09c' }}
                onClick={() => setTranslated()}
              >
                TRANSLATED
              </Button>
            </div>
          </Grid>

          <Grid item xs={12} style={{ paddingLeft: 0 }}>
            <ItemFooter />
          </Grid>
        </Grid>
      )}
    </>
  )
}

export default ItemContainer
