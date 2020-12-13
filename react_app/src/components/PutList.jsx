import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Container from '@material-ui/core/Container';
import PutInfo from './PutInfo'
import PutFilm from './PutFilm'


const PutList = (props) => {
  const { items } = props 
  const useStyles = makeStyles((theme) => ({
    cont: {
      width: '100%',
      maxWidth:600,
      backgroundColor: '#000',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }))

  const classes = useStyles()


  return (
    <Container maxWidth="xs" className={classes.cont}>
        {items.map((item) => {
          return (
              <Accordion style={{backgroundColor: '#000', color: '#fff'}}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  style={{backgroundColor: '#000', color:'rgb(255, 232, 31)'}}
                >
                  <Typography className={classes.heading}>{item.name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <Typography variant="body1" component='p' color='primary'>
                      Homeworld: 
                    </Typography>
                    <Typography variant="body2" component='span'>
                      <PutInfo url={item.homeworld} />
                    </Typography>
                    <Typography variant="body1" component='p' color='primary'>
                      Species: 
                    </Typography>
                    <Typography variant="body2" component='span'>
                      <PutInfo url={item.species} />
                    </Typography>
                    <Typography variant="body1" component='p' color='primary'>
                    Films: 
                    </Typography>
                    {item.films.map((film) => {
                      return (
                        <Typography variant="body2" component='p'>
                          <PutFilm url={film}/>
                        </Typography>
                      )
                    })}
                    <Typography variant="body1" component='p' color='primary'>
                    Starships: 
                    </Typography>
                    {item.starships.map((starship) => {
                      return (
                        <Typography variant="body2" component='p'>
                          <PutInfo url={starship}/>
                        </Typography>
                      )
                    })}
                  </Typography>
                </AccordionDetails>
              </Accordion>
          )
          })}
    </Container>
  )
}

export default PutList