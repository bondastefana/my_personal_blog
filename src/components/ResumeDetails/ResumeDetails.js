import { makeStyles } from '@material-ui/core/styles'
import { useState, useEffect } from 'react'
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from '@material-ui/lab'

import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive'
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver'
import PhoneIcon from '@material-ui/icons/Phone'
import SpaIcon from '@material-ui/icons/Spa'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  paperTitle: {
    padding: '15px 16px',
    margin: '0 32px',
  },
  timelineContainer: {
    [theme.breakpoints.up('md')]: {
      padding: '0 50px',
    },
  },
  period: {
    paddingTop: '10px',
  },
  workExp: {
    display: 'flex',
    justifyContent: 'center',
  },
  isVisible: {
    display: 'inline',
  },
  notVisible: {
    visibility: 'hidden',
  },
  employer: {
    fontFamily: 'Roboto',
  },
  position: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
    },
  },
}))

function ResumeDetails(props) {
  const [toggle, setToggle] = useState(false)
  const {
    paper,
    period,
    timelineContainer,
    workExp,
    paperTitle,
    isVisible,
    notVisible,
    employer,
    position,
  } = useStyles()

  useEffect(() => {
    setTimeout(() => {
      setToggle(!toggle)
    }, 500)
  }, [toggle])

  return (
    <Box className={timelineContainer}>
      <Paper elevation={3} className={paperTitle}>
        <Typography variant="h5" className={workExp}>
          My Work Experience{' '}
          <span className={toggle ? isVisible : notVisible}>_</span>
        </Typography>
      </Paper>
      <Timeline align="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="secondary" className={period}>
              Oct 2020 - Present
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary">
              <SpaIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={paper}>
              <Typography className={position} variant="h6" component="h1">
                Marketing & Floral Design
              </Typography>
              <Typography className={employer} color="primary">
                Lavanda Flowershop
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="secondary" className={period}>
              Oct 2018 - Sep 2020
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <AirplanemodeActiveIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={paper}>
              <Typography className={position} variant="h6" component="h1">
                Passenger Service Agent
              </Typography>
              <Typography className={employer} color="primary">
                Menzies Aviation
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography
              variant="body2"
              color="textSecondary"
              className={period}
            >
              May 2018 - Sep 2018
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary">
              <RecordVoiceOverIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={paper}>
              <Typography className={position} variant="h6" component="h1">
                Brand Ambassador
              </Typography>
              <Typography className={employer} color="primary">
                Clock Advertising
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="secondary" className={period}>
              Sep 2015 - Feb 2016
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <PhoneIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={paper}>
              <Typography className={position} variant="h6" component="h1">
                Call Center Operator
              </Typography>
              <Typography className={employer} color="primary">
                Asitel
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  )
}

export default ResumeDetails
