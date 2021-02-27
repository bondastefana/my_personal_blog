import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import Divider from '@material-ui/core/Divider'
import Paper from '@material-ui/core/Paper'
import Icons from '../../components/Icons/Icons.js'
import { useState, useEffect } from 'react'

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    padding: '20px 50px',
    [theme.breakpoints.up('sm')]: {
      padding: '45px 100px',
    },
  },
  avatar: {
    width: '100%',
    height: '100%',
    [theme.breakpoints.up('lg')]: {
      width: '75%',
      height: '75%',
    },
  },
  avatarContainer: {
    padding: '20px 10px',
    display: 'flex',
    justifyContent: 'center',

    [theme.breakpoints.up('sm')]: {
      paddingTop: '50px',
    },
  },
  title: {
    [theme.breakpoints.up('sm')]: {
      paddingTop: '20px',
      paddingBottom: '25px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '45px',
    },
  },

  aboutMe: {
    marginTop: '20px',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      fontSize: '25px',
    },
  },

  quoteContainer: {
    paddingTop: '50px',
  },

  quote: {
    padding: '20px 0',
    fontFamily: 'Arial',
  },
  dividerContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  divider: {
    width: '50%',
  },
  iconsContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: '40px',
  },
  paper: {
    padding: '6px 16px',
    [theme.breakpoints.up('md')]: {
      padding: '6px 40px',
    },
  },
  isVisible: {
    display: 'inline',
  },
  notVisible: {
    display: 'none',
  },
}))

function Home(props) {
  const [toggle, setToggle] = useState(false)
  const {
    homeContainer,
    avatar,
    avatarContainer,
    title,
    divider,
    dividerContainer,
    quote,
    quoteContainer,
    aboutMe,
    paper,
    titleUnderscore,
    isVisible,
    notVisible,
  } = useStyles()

  useEffect(() => {
    setTimeout(() => {
      setToggle(!toggle)
    }, 500)
  }, [toggle])

  return (
    <Grid container className={homeContainer}>
      <Grid item xs={12} sm={6} md={8} lg={8}>
        <Paper elevation={3} className={paper}>
          <Typography variant="h5" className={title}>
            Hey! I'm Stefana
            <span className={toggle ? isVisible : notVisible}>_</span>
          </Typography>
        </Paper>

        <Typography className={aboutMe}>
          I am a Frontend enthusiast student at The Informal School of IT
          Cluj-Napoca. I am determined and productive, with a passion for
          creative solutions. I am comfortable working with JavaScript and its
          frameworks, but also with HTML and CSS. I have 2 years experience in
          aviation operations, sales and customer services. Passionate about Web
          & animal rescue.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <div className={avatarContainer}>
          <Avatar
            alt="profile-picture"
            src="https://media-exp1.licdn.com/dms/image/C4D03AQGTSRQ9UWSO3g/profile-displayphoto-shrink_800_800/0/1596815606145?e=1619654400&v=beta&t=PiBUP8K_EBrE5poGq2hh099Ay5KGldeFTyVLTldS1yc"
            className={avatar}
          />
        </div>
      </Grid>

      <Grid item xs={12} sm={12} md={12} className={quoteContainer}>
        <Divider variant="middle" />
        <Typography align="center" variant="h6" className={quote}>
          "Make everyday a little less ordinary."
        </Typography>
        <div className={dividerContainer}>
          <Divider variant="middle" className={divider} />
        </div>
      </Grid>

      <Grid item xs={12} sm={12} md={12}>
        <Icons />
      </Grid>
    </Grid>
  )
}

export default Home
