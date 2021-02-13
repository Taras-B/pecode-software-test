import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'

import Pagination from '@material-ui/lab/Pagination'
import PaginationItem from '@material-ui/lab/PaginationItem'

import Grid from '@material-ui/core/Grid'
import { RootState } from '../../store/rootReducer'
import { actionsCharacters } from '../../store/characters/actionsCharacters'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { CharacterItem } from '../../components/Character/Character'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

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
  const query = useQuery()
  const dispatch = useDispatch()

  let page = Number(query.get('page')) || 1
  const characters = useSelector((state: RootState) => state.characters.data)
  const info = useSelector((state: RootState) => state.characters.infoData)

  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    console.log(value)
    dispatch(actionsCharacters.fetch(value))
  }
  useEffect(() => {
    dispatch(actionsCharacters.fetch(page))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  //TODO Create component "NOT YET ..."
  if (!characters) return <Typography>Not yet characters</Typography>
  return (
    <Grid container justify='space-between' className={classes.wrapper} spacing={4}>
      {characters &&
        characters.map((item) => (
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

      <Grid container justify='center' item xs={12}>
        <Pagination
          page={page}
          count={info?.pages}
          onChange={handleChange}
          variant='outlined'
          color='primary'
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              to={`/${item.page === 1 ? '' : `?page=${item.page}`}`}
              {...item}
            />
          )}
        />
      </Grid>
    </Grid>
  )
}
