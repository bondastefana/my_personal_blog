import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'

const useStyles = makeStyles((theme) => ({
  avatarContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: '30px 10px',
    [theme.breakpoints.up('md')]: {
      padding: '40px 20px',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '70px 50px',
    },
  },
  avatar: {
    filter: 'brightness(50%)',
    width: '100%',
    height: 'auto',
    '&:hover': {
      cursor: 'pointer',
      filter: 'brightness(100%)',
      transition: '0.5s',
    },
  },
  tooltip: {
    fontSize: '30px',
  },
}))

function HobbyAvatar(props) {
  const { hobbyTitle, hobbyDescription, hobbyImage, openModal } = props
  const { avatarContainer, avatar, tooltip } = useStyles()

  const openHobbyModal = (event) => {
    openModal({ hobbyTitle, hobbyDescription, hobbyImage })
  }

  return (
    <div className={avatarContainer}>
      <Tooltip
        title={
          <h5 style={{ fontSize: '15px' }}>See more about {hobbyTitle}</h5>
        }
        className={tooltip}
        arrow
      >
        <Avatar
          alt="hobby-avatar"
          src={hobbyImage}
          className={avatar}
          onClick={openHobbyModal}
        />
      </Tooltip>
    </div>
  )
}

export default HobbyAvatar
