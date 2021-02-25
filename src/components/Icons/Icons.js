import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { Box, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  iconsContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: '40px',
  },
}))

function Icons(props) {
  const { iconsContainer } = useStyles()
  return (
    <Box className={iconsContainer}>
      <Button
        size="small"
        href="https://www.linkedin.com/in/andreea-stefana-bonda-9727011b4/"
        target="_blank"
      >
        <LinkedInIcon style={{ fontSize: 50 }} />
      </Button>
      <Button
        size="small"
        href="https://github.com/bondastefana"
        target="_blank"
      >
        <GitHubIcon style={{ fontSize: 40 }} />
      </Button>
    </Box>
  )
}

export default Icons
