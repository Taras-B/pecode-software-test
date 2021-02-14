import React from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

import { IWatchItem } from '../../store/watchList/types'

interface IProps extends IWatchItem {
  changeCheckbox: (event: React.ChangeEvent<HTMLInputElement>) => void
  deleteItem: (id: string) => void
}

export const WatchItem: React.FC<IProps> = React.memo(
  ({ changeCheckbox, complete, id, item, deleteItem }) => {
    return (
      <Paper elevation={3}>
        <Grid container justify='space-between'>
          <Grid
            container
            direction='row'
            justify='flex-start'
            alignItems='center'
            item
            xs={10}
            md={9}>
            <Checkbox
              onChange={changeCheckbox}
              checked={complete}
              id={id}
              color='primary'
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
            <Typography variant='h6'>{item}</Typography>
          </Grid>
          <Grid container direction='row' justify='flex-end' item xs={2} md={3}>
            <IconButton
              aria-label='delete'
              color='secondary'
              onClick={() => deleteItem(id)}>
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    )
  }
)
