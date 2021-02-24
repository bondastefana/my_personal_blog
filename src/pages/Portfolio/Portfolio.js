import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  portfolioContainer: {
    padding: '20px 50px',
    [theme.breakpoints.up('sm')]: {
      padding: '20px 100px',
    },
  },
}))

function Portfolio() {
  const code = 'if(youWant() === true) { youCan();} else{ youCant(); }'
  const { portfolioContainer, title } = useStyles()
  return (
    <Grid container className={portfolioContainer}>
      <Grid item xs={12}>
        <Typography variant="h5" className={title}>
          {code}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Portfolio
