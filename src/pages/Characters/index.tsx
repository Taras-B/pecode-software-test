import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Grid from '@material-ui/core/Grid'
import { RootState } from '../../store/rootReducer'
import { actionsCharacters } from '../../store/characters/actionsCharacters'
import Typography from '@material-ui/core/Typography'

export const Characters = () => {
  const dispatch = useDispatch()
  const characters = useSelector((state: RootState) => state.characters.data)

  useEffect(() => {
    dispatch(actionsCharacters.fetch())
  }, [])
  //TODO Create component "NOT YET ..."
  if (characters.length === 0) return <Typography>Not yet characters</Typography>
  return (
    <Grid container spacing={4}>
      {characters.map((item) => (
        <Grid item key={item.id}>
          Item name {item.name}
        </Grid>
      ))}
    </Grid>
  )
}
