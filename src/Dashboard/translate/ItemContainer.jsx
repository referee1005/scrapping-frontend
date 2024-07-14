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
  setSearchCount,
  invisibleSplitSegment
}) => {
  const classes = useStyles()
  const [hoverArrow, setHoverArrow] = React.useState(null)
  // const [searchCount, setSearchCount] = React.useState(0)
  useEffect(() => {
    let count = 0,
      segmentCount = 0
    const sources = document.getElementsByClassName('source')
    const targets = document.getElementsByClassName('target')

    for (let i = 0; i < sources.length; i++) {
      let sourceCount = 0,
        targetCount = 0
      let highlightedSourceText = sources
        .item(i)
        .textContent.replaceAll(
          sText['source'],
          '<span style="background-color: yellow;">' +
            sText['source'] +
            '</span>'
        )

      if (sText['source'])
        sourceCount = (
          sources.item(i).textContent.match(new RegExp(sText['source'], 'g')) ||
          []
        ).length
      if (sText['target'])
        targetCount = (
          targets.item(i).textContent.match(new RegExp(sText['target'], 'g')) ||
          []
        ).length

      sources.item(i).innerHTML = highlightedSourceText
      let highlightedTargetText = targets
        .item(i)
        .textContent.replaceAll(
          sText['target'],
          '<span style="background-color: yellow;">' +
            sText['target'] +
            '</span>'
        )

      if (sText['source'] && sText['target']) {
        if (sourceCount && targetCount) {
          segmentCount++
          count += sourceCount
        }
      } else if (sText['source'] || sText['target']) {
        if (sourceCount || targetCount) {
          segmentCount++
          count += targetCount
          count += sourceCount
        }
      }

      setSearchCount(count, segmentCount)
      targets.item(i).innerHTML = highlightedTargetText
    }
  }, [sText])

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
