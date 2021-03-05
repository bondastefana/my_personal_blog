import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Box,
  Typography,
  Button,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    margin: '10px 5px',
    backgroundColor: theme.palette.background.footer,
  },
  cardImage: {
    [theme.breakpoints.up('xs')]: {
      height: '180px',
    },
    [theme.breakpoints.up('sm')]: {
      height: '280px',
    },
    [theme.breakpoints.up('md')]: {
      height: '230px',
    },
    [theme.breakpoints.up('lg')]: {
      height: '400px',
    },
  },
  titleContainer: {
    fontSize: '30px',
  },
  cardDescription: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontSize: '15px',
    fontFamily: 'Poppins',
    [theme.breakpoints.up('sm')]: {
      fontSize: '17px',
      minHeight: '140px',
    },
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}))

function ProjectCard(props) {
  const { imagePath, title, description, url } = props
  const mobile = useMediaQuery('(max-width:600px)')

  const {
    cardContainer,
    cardImage,
    titleContainer,
    cardDescription,
    buttonContainer,
  } = useStyles()
  return (
    <Card
      className={cardContainer}
      onClick={() => {
        window.open(url, '_blank')
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          image={imagePath}
          title="Contemplative Reptile"
          className={cardImage}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={titleContainer}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="secondary"
            component="p"
            className={cardDescription}
          >
            {description}
          </Typography>
          <Box className={buttonContainer}>
            <Button
              size={mobile ? 'medium' : 'large'}
              color="secondary"
              variant="outlined"
              onClick={() => {
                window.open(url, '_blank')
              }}
            >
              See project
            </Button>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ProjectCard
