import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { actionsWatchList } from '../../store/watchList/actions'
import { RootState } from '../../store/rootReducer'

import Grid from '@material-ui/core/Grid'
import { FormCustom } from '../../components/Form/FormCustom'
import { WatchItem } from '../../components/WatchItem/WatchItem'

export const WatchList = () => {
  const dispatch = useDispatch()
  const watchList = useSelector((state: RootState) => state.watchList.watchList)

  const onClickAddItem = (item: string) => {
    dispatch(actionsWatchList.addItem(item))
  }

  const handleChangeChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(actionsWatchList.completeItem(event.target.id))
  }
  const onDeleteItem = (id: string) => {
    dispatch(actionsWatchList.deleteItem(id))
  }

  useEffect(() => {
    dispatch(actionsWatchList.fetch())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    localStorage.setItem('watchList', JSON.stringify(watchList))
  }, [watchList])

  return (
    <Grid container direction='column' alignItems='center'>
      <Grid item xs={12}>
        <FormCustom addItem={onClickAddItem} />
      </Grid>{' '}
      <Grid container justify='center' spacing={4} item sm={8}>
        {watchList &&
          watchList.map((item) => (
            <Grid key={item.id} item xs={12}>
              <WatchItem
                deleteItem={onDeleteItem}
                changeCheckbox={handleChangeChecked}
                id={item.id}
                complete={item.complete}
                item={item.item}
              />
            </Grid>
          ))}
      </Grid>
    </Grid>
  )
}
