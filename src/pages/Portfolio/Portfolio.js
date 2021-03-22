import { Grid, Typography, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {
  projectsData,
  projectsDataReact,
} from '../../components/ProjectCard/staticData.js'
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
    padding: '10px 0',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: '17px',
    },
  },
  titleContainer: {
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(3),
    },
  },
  paper: {
    [theme.breakpoints.up('sm')]: {
      margin: 'auto -20px',
    },
    padding: '6px 16px',
  },
}))

function Portfolio(props) {
  const { portfolioContainer, title, titleContainer, paper } = useStyles()

  return (
    <Grid container className={portfolioContainer}>
      <Grid item xs={12} className={titleContainer}>
        <Paper elevation={3} className={paper}>
          <Typography variant="h5" className={title}>
            ReactJS, React Bootstrap, Material UI
          </Typography>
        </Paper>
      </Grid>

      {projectsDataReact.map((project, index) => {
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
      <Grid item xs={12} className={titleContainer}>
        <Paper elevation={3} className={paper}>
          <Typography variant="h5" className={title}>
            HTML, CSS, JavaScript
          </Typography>
        </Paper>
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
