import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid'
import { TextField, Typography } from '@mui/material'
import { makeStyles, withStyles } from '@mui/styles'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ItemFooter from './ItemFooter'
import Button from '@mui/material/Button'
import { forEach } from 'lodash'
const useStyles = makeStyles({
  customInput: {
    height: '20px !important', // Adjust the height as needed
    padding: 3
  }
})

const ItemContainer = ({
  index,
  sText,
  text,
  editvalue,
  value,
  splitSegment,
  setTranslated,
  visibleModal,
  invisibleSplitSegment
}) => {
  const classes = useStyles()
  const [hoverArrow, setHoverArrow] = React.useState(null)
  /* useEffect(() => {

    const sources = document.getElementsByClassName('source').children
    const targets = document.getElementsByClassName('target').children
    console.log(sources, sources.item(1))
    for (let i = 0; i < sources.length; i++) {
      let highlightedSourceText = sources
        .item(i)
        .replace(
          /s/g,
          '<span style="background-color: yellow;">' +
            sText['source'] +
            '</span>'
        )
      let highlightedTargetText = targets
        .item(i)
        .replace(
          /s/g,
          '<span style="background-color: yellow;">' +
            sText['target'] +
            '</span>'
        )
      document.getElementsByClassName('source').innerHTML =
        highlightedSourceText
      document.getElementsByClassName('target').innerHTML =
        highlightedTargetText
    }

  }, [sText]) */

  return (
    <>
      {editvalue != value ? (
        <Grid container spacing={2} onClick={visibleModal}>
          <Grid item xs={6}>
            <div className='source'>
              {/* Created BI applications with QlikView, Tableau, and Power BI for
              marketing, customer acquisition, CRM, responsible gaming,
              payments, and finance. */}
              {text['source']}
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className='target'>
              {/* Création d'applications BI avec QlikView, Tableau et Power BI pour
              le marketing, l'acquisition de clients, le CRM, les jeux
              responsables, les paiements et les finances. */}
              {text['target']}
            </div>
          </Grid>
        </Grid>
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Grid container spacing={2}>
              <Grid item xs={11}>
                {text['source']}
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
                <ArrowForwardIosIcon
                  color='info'
                  cursor
                  onMouseMove={() => setHoverArrow(true)}
                  onMouseLeave={() => setHoverArrow(false)}
                />
                {hoverArrow && (
                  <Typography fontSize={8} style={{ textAlign: 'center' }}>
                    CTRL+I
                  </Typography>
                )}
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6}>
            <textarea
              rows={5}
              className='textarea'
              defaultValue={
                // "Création d'applications BI avec QlikView, Tableau et Power BI pour le marketing, l'acquisition de clients, le CRM, les jeux responsables, les paiements et les finances."
                text['target']
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
