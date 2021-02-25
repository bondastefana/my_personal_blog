import { Grid, Paper, Typography } from '@material-ui/core'
import HobbyAvatar from '../../components/HobbyAvatar/HobbyAvatar.js'
import { makeStyles } from '@material-ui/core/styles'
import hobbies from './staticData.js'
import HobbyModal from '../../components/HobbyModal/HobbyModal.js'

const useStyles = makeStyles((theme) => ({
  hobbiesContainer: {
    padding: '20px 20px',
    [theme.breakpoints.up('sm')]: {
      padding: '45px 20px',
    },
  },
  paperTitle: {
    padding: '15px 16px',
  },
}))

function Hobbies(props) {
  const { paperTitle, pageTitle, hobbiesContainer } = useStyles()

  const openModal = (params) => {
    console.log(params)
  }

  return (
    <Grid container className={hobbiesContainer}>
      <Paper elevation={3} className={paperTitle}>
        <Typography variant="h5" className={pageTitle}>
          lorem ipsum dolor sit amet, consectetur adipis
        </Typography>
      </Paper>
      {hobbies.map((hobby, index) => {
        const { title, description, imageUrl } = hobby

        return (
          <Grid item xs={12} sm={4}>
            <HobbyAvatar
              key={index}
              hobbyTitle={title}
              hobbyDescription={description}
              hobbyImage={imageUrl}
              openModal={openModal}
            />
          </Grid>
        )
      })}
      <HobbyModal />
    </Grid>
  )
}
export default Hobbies
