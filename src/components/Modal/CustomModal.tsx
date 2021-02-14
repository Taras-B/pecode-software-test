import React from 'react'

import DialogContent from '@material-ui/core/DialogContent'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'

import { IPropsCharacter } from '../Character/Character'

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      paddingRight: 0,
      color: theme.palette.grey[500],
    },
  })

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string
  children: React.ReactNode
  onClose: () => void
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant='h6'>{children}</Typography>
      {onClose ? (
        <IconButton aria-label='close' className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  )
})

interface IModalCustomProps extends Omit<IPropsCharacter, 'image'> {
  onClose: () => void
}

export const CustomModal: React.FC<IModalCustomProps> = React.memo(
  ({ onClose, status, name, location, species, created, gender }) => {
    return (
      <Grid item className=''>
        <DialogTitle id='form-dialog-title' onClose={onClose}>
          Additional information about {name}
        </DialogTitle>
        <DialogContent dividers>
          <Grid container justify='flex-start' spacing={2}>
            <Grid item xs={6} sm={3}>
              <Typography variant='h5' color='textPrimary'>
                Status:
              </Typography>
            </Grid>
            <Grid item xs={6} sm={9}>
              <Typography variant='h6' component='h2' color='textSecondary'>
                {status}
              </Typography>
            </Grid>
          </Grid>
          <Divider />
          <Grid container justify='flex-start' spacing={2}>
            <Grid item xs={6} sm={3}>
              <Typography variant='h5' color='textPrimary'>
                Species:
              </Typography>
            </Grid>
            <Grid item xs={6} sm={9}>
              <Typography variant='h6' component='h2' color='textSecondary'>
                {species}
              </Typography>
            </Grid>
          </Grid>
          <Divider />

          <Grid container justify='flex-start' spacing={2}>
            <Grid item xs={6} sm={3}>
              <Typography variant='h5' color='textPrimary'>
                Gender:
              </Typography>
            </Grid>
            <Grid item xs={6} sm={9}>
              <Typography variant='h6' component='h2' color='textSecondary'>
                {gender}
              </Typography>
            </Grid>
          </Grid>
          <Divider />
          <Grid container justify='flex-start' spacing={2}>
            <Grid item xs={5} sm={3}>
              <Typography variant='h5' color='textPrimary'>
                Location:
              </Typography>
            </Grid>
            <Grid item xs={7} sm={9}>
              <Typography variant='h6' component='h2' color='textSecondary'>
                {location}
              </Typography>
            </Grid>
          </Grid>
          <Divider />
          <Grid container justify='flex-start' spacing={2}>
            <Grid item xs={6} sm={3}>
              <Typography variant='h5' color='textPrimary'>
                Created:
              </Typography>
            </Grid>
            <Grid item xs={6} sm={9}>
              <Typography variant='h6' component='h2' color='textSecondary'>
                {new Intl.DateTimeFormat('ua-UA').format(new Date(created))}
              </Typography>
            </Grid>
          </Grid>
        </DialogContent>
      </Grid>
    )
  }
)
