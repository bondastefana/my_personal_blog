import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'
import { TextField, Button } from '@material-ui/core'
import { useState } from 'react'

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
    fontSize: '15px',
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

  const handleTypingName = (event) => {
    setName(event.target.value)
  }
  const handleTypingEmail = (event) => {
    setEmail(event.target.value)
  }

  const handleTypingMessage = (event) => {
    setMessage(event.target.value)
  }

  const submitInfo = (event) => {
    console.log(name, email, message)
    window.open(`mailto:bondastefana@gmail.com?subject=`)
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
        <Grid container>
          <Grid item xs={6} sm={6} lg={6} className={textField}>
            <TextField
              id="name"
              label="Your name..."
              fullWidth
              onChange={handleTypingName}
            />
          </Grid>
          <Grid item xs={6} sm={6} lg={6} className={textField}>
            <TextField
              id="email"
              label="Your email..."
              fullWidth
              onChange={handleTypingEmail}
            />
          </Grid>

          <Grid item xs={12} sm={12} lg={12} className={textField}>
            <TextField
              id="filled-multiline-static"
              label="Your message..."
              multiline
              rows={3}
              fullWidth
              onChange={handleTypingMessage}
            />
          </Grid>
          <Grid item xs={12} sm={12} lg={12} className={submitContainer}>
            <Button variant="outlined" size="large" onClick={submitInfo}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
export default Footer
