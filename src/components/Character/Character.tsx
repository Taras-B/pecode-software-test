import React from 'react'
import Grid from '@material-ui/core/Grid'

import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import Dialog from '@material-ui/core/Dialog'
import { CustomModal } from '../Modal/CustomModal'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 460,
  },
  media: {
    height: 180,
  },
}))

export interface IPropsCharacter {
  image: string
  name: string
  status: string
  species: string
  gender: string
  created: string
  location: string
}

export const CharacterItem: React.FC<IPropsCharacter> = React.memo(
  ({ image, status, name, location, species, created, gender }) => {
    const classes = useStyles()
    const [editMode, setEditMode] = React.useState(false)
    const handleClickOpen = () => {
      setEditMode(true)
    }
    const handleClose = () => {
      setEditMode(false)
    }
    return (
      <Grid item xs={12} md={4} sm={6} className={classes.root}>
        <Card>
          <CardActionArea>
            <CardMedia className={classes.media} image={image} title='Image Mars' />
            <CardContent>
              <Grid container spacing={3}>
                <Grid item xs={4}>
                  <Typography variant='h5' color='textPrimary'>
                    Name:
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography variant='h6' component='h2' color='textSecondary'>
                    {name}
                  </Typography>
                </Grid>
              </Grid>
              <Divider />
              <Grid container spacing={3} alignItems='center'>
                <Grid item xs={3}>
                  <Typography variant='body1' color='textPrimary'>
                    Status:
                  </Typography>
                </Grid>
                <Grid item xs={9}>
                  <Typography variant='body2' color='textSecondary' component='p'>
                    {status}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size='small' color='primary' onClick={handleClickOpen}>
              Open information
            </Button>
          </CardActions>
        </Card>
        <Dialog
          open={editMode}
          onClose={handleClose}
          fullWidth
          maxWidth='sm'
          aria-labelledby='form-dialog-title'>
          <CustomModal
            onClose={handleClose}
            name={name}
            status={status}
            species={species}
            gender={gender}
            created={created}
            location={location}
          />
        </Dialog>
      </Grid>
    )
  }
)
