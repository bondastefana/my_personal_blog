import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  avatarContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: '30px 0',
  },
  avatar: {
    height: 'auto',
    width: '70%',
  },
}))

function HobbyAvatar(props) {
  const { hobbyTitle, hobbyDescription, hobbyImage, openModal } = props
  const { avatarContainer, avatar } = useStyles()

  const openHobbyModal = (event) => {
    console.log(hobbyTitle, hobbyDescription, hobbyImage)
    openModal({ hobbyTitle, hobbyDescription, hobbyImage })
  }

  return (
    <div className={avatarContainer}>
      <Avatar
        alt="hobby-avatar"
        src={hobbyImage}
        className={avatar}
        onClick={openHobbyModal}
      />
    </div>
  )
}

export default HobbyAvatar
