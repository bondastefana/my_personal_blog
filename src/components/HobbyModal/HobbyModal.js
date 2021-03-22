import Dialog from '@material-ui/core/Dialog'

import DialogContent from '@material-ui/core/DialogContent'

import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import Box from '@material-ui/core/Box'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles((theme) => ({
  avatarContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10px 0',
  },
  avatar: {
    height: 'auto',
    width: '50%',
  },

  dividerContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: '10px 0',
  },
  divider: {
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
  },
  modalTitle: {
    display: 'flex',
    justifyContent: 'center',
  },

  modalDescription: {
    textAlign: 'center',
    paddingBottom: '30px',
    fontFamily: 'Poppins',
    fontWeight: 100,
  },
  closeButtonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}))

function HobbyModal(props) {
  const { hobbyTitle, hobbyDescription, hobbyImage, open, setIsOpen } = props

  const {
    avatarContainer,
    avatar,
    divider,
    dividerContainer,
    modalTitle,
    modalDescription,
    closeButtonContainer,
  } = useStyles()

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <Box className={closeButtonContainer}>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box className={avatarContainer}>
          <Avatar alt="hobby-avatar" src={hobbyImage} className={avatar} />
        </Box>
        <Typography variant="h4" color="primary" className={modalTitle}>
          {hobbyTitle}
        </Typography>
        <Box className={dividerContainer}>
          <Divider variant="middle" className={divider} />
        </Box>
        <DialogContent>
          <Typography className={modalDescription}>
            {hobbyDescription}
          </Typography>
        </DialogContent>
      </Dialog>
    </Box>
  )
}

export default HobbyModal
