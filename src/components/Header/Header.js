import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from './AppLogo.svg'
import Grid from '@material-ui/core/Grid'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  header: {
    [theme.breakpoints.up('xs')]: {
      padding: '0 20px',
    },
    [theme.breakpoints.up('sm')]: {
      padding: '0 100px',
    },
    backgroundColor: theme.palette.background.footer,
  },
  logoContainer: {
    display: 'flex',
    [theme.breakpoints.up('xs')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'flex-start',
      paddingLeft: '35px',
    },
  },
  linkContainer: {
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  appLogo: {
    width: '60px',
    maxHeight: '60px',
    '&:hover': {
      cursor: 'pointer',
    },
    [theme.breakpoints.up('xs')]: {
      width: '45px',
      maxHeight: '45px',
      marginBottom: '15px',
      marginTop: '10px',
    },
  },
  pageLink: {
    color: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'center',
    textDecoration: 'none',
    fontSize: '18px',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
}))

function Header(props) {
  const {
    appLogo,
    pageLink,

    logoContainer,
    linkContainer,
    header,
  } = useStyles()
  const history = useHistory()

  return (
    <Grid container className={header}>
      <Grid item xs={12} sm={6} md={6} lg={6} className={logoContainer}>
        <Logo onClick={() => history.push('/')} className={appLogo} />
      </Grid>
      <Grid item xs={4} sm={2} md={2} lg={2} className={linkContainer}>
        <Link className={pageLink} to="/resume">
          Resume
        </Link>
      </Grid>
      <Grid item xs={4} sm={2} md={2} lg={2} className={linkContainer}>
        <Link className={pageLink} to="/portfolio">
          Portfolio
        </Link>
      </Grid>
      <Grid item xs={4} sm={2} md={2} lg={2} className={linkContainer}>
        <Link className={pageLink} to="/hobbies">
          Hobbies
        </Link>
      </Grid>
    </Grid>
  )
}

export default Header
