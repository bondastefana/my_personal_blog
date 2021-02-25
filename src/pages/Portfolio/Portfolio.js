import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import projectsData from '../../components/ProjectCard/staticData.js'
import ProjectCard from '../../components/ProjectCard/ProjectCard.js'

const useStyles = makeStyles((theme) => ({
  portfolioContainer: {
    padding: '20px 50px',
    [theme.breakpoints.up('sm')]: {
      padding: '20px 100px',
    },
  },
  titlePadding: {
    paddingLeft: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      fontSize: '17px',
    },
  },
  title: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '17px',
    },
  },
  titleContainer: {
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(3),
    },
  },
}))

function Portfolio(props) {
  const {
    portfolioContainer,
    title,
    titlePadding,
    titleContainer,
  } = useStyles()

  return (
    <Grid container className={portfolioContainer}>
      <Grid item xs={12} className={titleContainer}>
        <Typography variant="h5" className={title}>
          {'if (youWant() === true) {'}
        </Typography>
        <Typography variant="h5" className={titlePadding}>
          {'youCan();'}
        </Typography>
        <Typography variant="h5" className={title}>
          {'} else {'}
        </Typography>
        <Typography variant="h5" className={titlePadding}>
          {'youCant();'}
        </Typography>
        <Typography variant="h5" className={title}>
          {'}'}
        </Typography>
      </Grid>
      {projectsData.map((project, index) => {
        return (
          <Grid item xs={12} md={6}>
            <ProjectCard
              key={index}
              imagePath={project.imagePath}
              title={project.title}
              description={project.description}
              url={project.url}
            />
          </Grid>
        )
      })}
    </Grid>
  )
}

export default Portfolio
