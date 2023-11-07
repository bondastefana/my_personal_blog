import {
  Grid,
  Avatar,
  Typography,
  Button,
  Divider,
  Box
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Icons from '../../components/Icons/Icons.js'
import ResumeDetails from '../../components/ResumeDetails/ResumeDetails.js'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import clsx from 'clsx'
import ResumePicture from './ResumePicture.JPG'

const useStyles = makeStyles(theme => ({
  resumeContainer: {
    padding: '45px 0',
    [theme.breakpoints.up('sm')]: {
      padding: '45px 20px'
    }
  },
  avatarContainer: {
    padding: '0 30px 20px 30px',
    display: 'flex',
    justifyContent: 'center'
  },
  avatar: {
    height: '200px',
    width: '200px'
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    padding: '3px 0'
  },
  position: {
    fontFamily: 'Poppins',
    display: 'flex',
    justifyContent: 'center',
    padding: '3px 0',
    fontWeight: 100
  },
  name: {
    fontSize: '25px',
    fontWeight: 'bold'
  },
  contentContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '20px 0 0 0'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10px 0 20px 0'
  },
  dividerContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  divider: {
    width: '50%',
    display: 'flex',
    justifyContent: 'center'
  },
  contactDetails: {
    display: 'flex',
    justifyContent: 'center'
  }
}))

function Resume(props) {
  const {
    avatarContainer,
    avatar,
    title,
    name,
    contentContainer,
    buttonContainer,
    divider,
    dividerContainer,
    resumeContainer,
    position
  } = useStyles()

  const resumeLink =
    'https://andreeastefanabonda-resume.tiiny.site/'

  const tablet = useMediaQuery('(max-width:1024px)')

  return (
    <Grid container className={resumeContainer}>
      <Grid item xs={12} sm={5}>
        <Grid container>
          <Grid item xs={12}>
            <Box className={avatarContainer}>
              <Avatar
                alt='resume-picture'
                src={ResumePicture}
                className={avatar}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box className={contentContainer}>
              <Typography className={clsx(title, name)}>
                Andreea-Stefana Bonda
              </Typography>
              <Typography className={position}>Frontend Developer</Typography>
              <Box className={buttonContainer}>
                <Button
                  size={'small'}
                  color='primary'
                  variant='outlined'
                  onClick={() => {
                    window.open(resumeLink, '_blank')
                  }}
                >
                  Download CV
                </Button>
              </Box>

              <div className={dividerContainer}>
                <Divider variant='middle' className={divider} />
              </div>
            </Box>
            <Box className={contentContainer}>
              {tablet ? (
                <>
                  <Typography className={title}>
                    email: bondastefana@gmail.com
                  </Typography>
                  <Typography className={title}>
                    phone: +40.751.588.936
                  </Typography>
                </>
              ) : (
                <Typography className={title}>
                  email: bondastefana@gmail.com / phone: +40.751.588.936
                </Typography>
              )}
            </Box>
            <Icons />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={7}>
        <ResumeDetails />
      </Grid>
    </Grid>
  )
}

export default Resume
