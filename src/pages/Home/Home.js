import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    padding: '20px 50px',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  avatarContainer: {
    padding: '20px 10px',
  },
  title: {
    paddingBottom: '20px',
  },
  horizontalLine: {
    border: 0,
    width: '50%',
    backgroundColor: theme.palette.secondary.dark,
    height: '1px',
    margin: '0',
  },

  quote: {
    padding: '15px 0',
  },
  iconsContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: '20px 10px',
  },
}))

function Home(props) {
  const {
    homeContainer,
    avatar,
    avatarContainer,
    title,
    divider,
    quote,
    iconsContainer,
  } = useStyles()

  return (
    <Grid container className={homeContainer}>
      <Grid item xs={12}>
        <Typography variant="h5" className={title}>
          Hey! I'm Stefana<span>_</span>
        </Typography>
        <Typography>
          Motivated to learn new and modern concepts. The Informal School of IT
          student who learns Front-End Web Development Technologies. 2 years
          experience in aviation operations, sales and customer services.
          Passionate about Web & animal rescue. Looking for a long-term
          collaboration as a Front-End Developer.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <div className={avatarContainer}>
          <Avatar
            alt="profile-picture"
            src="https://media-exp1.licdn.com/dms/image/C4D03AQGTSRQ9UWSO3g/profile-displayphoto-shrink_800_800/0/1596815606145?e=1619654400&v=beta&t=PiBUP8K_EBrE5poGq2hh099Ay5KGldeFTyVLTldS1yc"
            className={avatar}
          />
        </div>
        <Divider variant="middle" />
      </Grid>
      <Grid item xs={12}>
        <Typography align="center" variant="h6" className={quote}>
          lorem ipsum dolor sit amet bla bla bla
        </Typography>
        <Divider variant="middle" className={divider} />
      </Grid>

      <Grid item xs={12}>
        <Box className={iconsContainer}>
          <Button
            size="small"
            href="https://www.linkedin.com/in/stefan-tudor-iloaie-8119859b/"
            target="_blank"
          >
            <LinkedInIcon />
          </Button>
          <Button
            size="small"
            href="https://github.com/tudistef"
            target="_blank"
          >
            <GitHubIcon />
          </Button>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Home
