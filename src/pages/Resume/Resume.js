import {
  Grid,
  Avatar,
  Typography,
  Button,
  Divider,
  Box,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Icons from '../../components/Icons/Icons.js'
import ResumeDetails from '../../components/ResumeDetails/ResumeDetails.js'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
  resumeContainer: {
    padding: '45px 0',
  },
  avatarContainer: {
    padding: '0 30px 20px 30px',
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    height: '130px',
    width: '130px',
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    padding: '3px 0',
  },
  name: {
    fontSize: '25px',
    fontWeight: 'bold',
  },
  contentContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '20px 0 0 0',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10px 0 20px 0',
  },
  dividerContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  divider: {
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
  },
  contactDetails: {
    display: 'flex',
    justifyContent: 'center',
  },
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
  } = useStyles()

  const resumeLink =
    'https://srv-store5.gofile.io/download/LeQw6t/AndreeaStefanaBondaResume.pdf'

  const tablet = useMediaQuery('(max-width:1024px)')

  return (
    <Grid container className={resumeContainer}>
      <Grid item xs={12} sm={5} md={4} lg={5}>
        <Grid container>
          <Grid item xs={12}>
            <Box className={avatarContainer}>
              <Avatar
                alt="resume-picture"
                src="https://media-exp1.licdn.com/dms/image/C4D03AQGTSRQ9UWSO3g/profile-displayphoto-shrink_800_800/0/1596815606145?e=1619654400&v=beta&t=PiBUP8K_EBrE5poGq2hh099Ay5KGldeFTyVLTldS1yc"
                className={avatar}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box className={contentContainer}>
              <Typography className={clsx(title, name)}>
                Andreea-Stefana Bonda
              </Typography>
              <Typography className={title}>Frontend Developer</Typography>
              <Box className={buttonContainer}>
                <Button
                  size={'small'}
                  color="primary"
                  variant="outlined"
                  onClick={() => {
                    window.open(resumeLink, '_blank')
                  }}
                >
                  Download CV
                </Button>
              </Box>

              <div className={dividerContainer}>
                <Divider variant="middle" className={divider} />
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
      <Grid item xs={12} sm={7} md={8} lg={7}>
        <ResumeDetails />
      </Grid>
    </Grid>
  )
}

export default Resume
