import { useState, useEffect } from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
import HobbyAvatar from '../../components/HobbyAvatar/HobbyAvatar.js'
import { makeStyles } from '@material-ui/core/styles'
import hobbies from './staticData.js'
import HobbyModal from '../../components/HobbyModal/HobbyModal.js'

const useStyles = makeStyles((theme) => ({
  hobbiesContainer: {
    padding: '20px 20px',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      padding: '45px 40px',
    },
  },
  paperTitle: {
    display: 'flex',
    justifyContent: 'center',
    padding: '15px 16px',
    marginBottom: '20px',
  },
  pageTitle: {
    display: 'flex',
    justifyContent: 'center',
  },
  paperContainer: {
    [theme.breakpoints.up('sm')]: {
      margin: '0 40px',
    },
  },
  isVisible: {
    display: 'inline',
  },
  notVisible: {
    visibility: 'hidden',
  },
}))

function Hobbies(props) {
  const {
    paperTitle,
    pageTitle,
    hobbiesContainer,
    paperContainer,
    isVisible,
    notVisible,
  } = useStyles()

  const [hobbyDetail, setHobbyDetail] = useState({})
  const [isOpen, setIsOpen] = useState(false)
  const [toggle, setToggle] = useState(false)

  const openModal = (hobbyInfo) => {
    const { hobbyTitle, hobbyDescription, hobbyImage } = hobbyInfo
    setHobbyDetail({
      title: hobbyTitle,
      description: hobbyDescription,
      imageUrl: hobbyImage,
    })

    setIsOpen(true)
  }

  useEffect(() => {
    setTimeout(() => {
      setToggle(!toggle)
    }, 500)
  }, [toggle])

  return (
    <Grid container className={hobbiesContainer}>
      <Grid item xs={12} className={paperContainer}>
        <Paper elevation={3} className={paperTitle}>
          <Typography variant="h5" className={pageTitle}>
            Keep your hobbies alive
            <span className={toggle ? isVisible : notVisible}>_</span>
          </Typography>
        </Paper>
      </Grid>

      {hobbies.map((hobby, index) => {
        const { title, description, imageUrl } = hobby

        return (
          <Grid item xs={12} sm={4} md={4}>
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

      <HobbyModal
        hobbyTitle={hobbyDetail.title}
        hobbyDescription={hobbyDetail.description}
        hobbyImage={hobbyDetail.imageUrl}
        open={isOpen}
        setIsOpen={setIsOpen}
      />
    </Grid>
  )
}
export default Hobbies
