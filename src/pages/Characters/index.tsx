import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Grid from '@material-ui/core/Grid'
import { RootState } from '../../store/rootReducer'
import { actionsCharacters } from '../../store/characters/actionsCharacters'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { CharacterItem } from '../../components/Character/Character'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: 20,
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
}))

export const Characters = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const characters = useSelector((state: RootState) => state.characters.data)

  useEffect(() => {
    dispatch(actionsCharacters.fetch())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  //TODO Create component "NOT YET ..."
  if (characters.length === 0) return <Typography>Not yet characters</Typography>
  return (
    <Grid container justify='space-between' className={classes.wrapper} spacing={4}>
      {characters.map((item) => (
        <CharacterItem
          key={item.id}
          name={item.name}
          image={item.image}
          status={item.status}
          species={item.species}
          gender={item.gender}
          created={item.created}
          location={item.location.name}
        />
      ))}
    </Grid>
  )
}
