import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'
import { TextField, Button } from '@material-ui/core'
import { useState } from 'react'
import emailjs from 'emailjs-com'
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    backgroundColor: theme.palette.background.footer,
    [theme.breakpoints.up('xs')]: {
      padding: '20px',
    },
    [theme.breakpoints.up('sm')]: {
      padding: '30px 50px',
    },
    [theme.breakpoints.up('md')]: {
      padding: '40px 75px',
    },
  },
  linksContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  linksSubContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  pageLink: {
    display: 'flex',
    justifyContent: 'center',
    color: theme.palette.primary.main,
    textDecoration: 'none',
    fontSize: '18px',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
  footerLinks: {
    display: 'flex',
    flexDirection: 'column',
  },
  textField: {
    padding: '0 10px',
  },
  submitContainer: {
    padding: '20px 10px',
    display: 'flex',
    justifyContent: 'flex-end',
  },
}))

function Footer(props) {
  const {
    pageLink,
    footerContainer,
    footerLinks,
    linksContainer,
    linksSubContainer,
    textField,
    submitContainer,
  } = useStyles()

  //initial state
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false)

  const handleTypingName = (event) => {
    setName(event.target.value)
  }
  const handleTypingEmail = (event) => {
    setEmail(event.target.value)
  }

  const handleTypingMessage = (event) => {
    setMessage(event.target.value)
  }

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setIsSnackbarOpen(false)
  }

  const submitInfo = (event) => {
    event.preventDefault()

    emailjs
      .sendForm(
        'service_ko2uvn6',
        'template_i3ovxwo',
        event.target,
        'user_IGlUs2373SZIIPxQxUfoC',
      )
      .then(
        (result) => {
          setName('')
          setEmail('')
          setMessage('')
          setIsSnackbarOpen(true)
        },
        (error) => {
          console.log(error.text)
        },
      )
  }

  return (
    <Grid container className={footerContainer}>
      <Grid item xs={12} sm={6} lg={6} className={linksContainer}>
        <Grid container className={linksSubContainer}>
          <Grid item xs={6} sm={4} className={footerLinks}>
            <Link to="/" className={pageLink}>
              Home
            </Link>
            <Link to="/resume" className={pageLink}>
              Resume
            </Link>
          </Grid>
          <Grid item xs={6} sm={4} className={footerLinks}>
            <Link to="/portfolio" className={pageLink}>
              Portfolio
            </Link>
            <Link to="/hobbies" className={pageLink}>
              Hobbies
            </Link>
          </Grid>
          <Grid item xs={6} sm={4} className={footerLinks}></Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={6} lg={6}>
        <form onSubmit={submitInfo}>
          <Grid container>
            <Grid item xs={6} sm={6} lg={6} className={textField}>
              <TextField
                value={name}
                id="name"
                name="name"
                label="Your name..."
                fullWidth
                onChange={handleTypingName}
              />
            </Grid>
            <Grid item xs={6} sm={6} lg={6} className={textField}>
              <TextField
                value={email}
                id="email"
                name="email"
                label="Your email..."
                fullWidth
                onChange={handleTypingEmail}
              />
            </Grid>

            <Grid item xs={12} sm={12} lg={12} className={textField}>
              <TextField
                value={message}
                id="message"
                name="message"
                label="Your message..."
                multiline
                rows={3}
                fullWidth
                onChange={handleTypingMessage}
              />
            </Grid>
            <Grid item xs={12} sm={12} lg={12} className={submitContainer}>
              <Button type="submit" variant="outlined" size="large">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success">
          Thank you for your interest!
        </Alert>
      </Snackbar>
    </Grid>
  )
}
export default Footer
