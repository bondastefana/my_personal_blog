import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Grid,
  Typography,
  Button
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles = makeStyles(theme => ({
  cardContainer: {
    margin: '10px 5px',
    backgroundColor: theme.palette.background.footer
  },
  cardImage: {
    [theme.breakpoints.up('xs')]: {
      height: '180px'
    },
    [theme.breakpoints.up('sm')]: {
      height: '280px'
    },
    [theme.breakpoints.up('md')]: {
      height: '230px'
    },
    [theme.breakpoints.up('lg')]: {
      height: '400px'
    }
  },
  titleContainer: {
    fontSize: '30px'
  },
  cardDescription: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontSize: '15px',
    fontFamily: 'Poppins',
    [theme.breakpoints.up('sm')]: {
      fontSize: '17px',
      minHeight: '140px'
    }
  },
  buttonContainerCode: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginTop: '10px'
  },
  buttonContainerProject: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '10px'
  }
}))

function ProjectCard (props) {
  const { imagePath, title, description, url, gitUrl } = props

  const mobile = useMediaQuery('(max-width:600px)')

  const {
    cardContainer,
    cardImage,
    titleContainer,
    cardDescription,
    buttonContainerCode,
    buttonContainerProject
  } = useStyles()
  return (
    <Card
      className={cardContainer}
      // onClick={() => {
      //   window.open(url, '_blank')
      // }}
    >
      <CardActionArea>
        <CardMedia
          component='img'
          alt='Contemplative Reptile'
          image={imagePath}
          title='Contemplative Reptile'
          className={cardImage}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant='h5'
            component='h2'
            className={titleContainer}
          >
            {title}
          </Typography>
          <Typography
            variant='body2'
            color='secondary'
            component='p'
            className={cardDescription}
          >
            {description}
          </Typography>
          <Grid container>
            <Grid item xs={6} className={buttonContainerCode}>
              <Button
                size={mobile ? 'medium' : 'large'}
                color='secondary'
                variant='outlined'
                onClick={() => {
                  window.open(gitUrl, '_blank')
                }}
              >
                See Code
              </Button>
            </Grid>
            <Grid item xs={6} className={buttonContainerProject}>
              <Button
                size={mobile ? 'medium' : 'large'}
                color='secondary'
                variant='outlined'
                onClick={() => {
                  window.open(url, '_blank')
                }}
              >
                See project
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ProjectCard
