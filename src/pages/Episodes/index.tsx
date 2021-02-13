import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Grid from '@material-ui/core/Grid'
import {
  Columns,
  RowsProp,
  DataGrid,
  SortDirection,
  ValueGetterParams,
  PageChangeParams,
} from '@material-ui/data-grid'
import { RootState } from '../../store/rootReducer'
import { actionsEpisode } from '../../store/episodes/actions'

const columns: Columns = [
  { field: 'name', width: 250, headerName: 'Name' },
  {
    field: 'air_date',
    headerName: 'Air Date',
    width: 250,
  },
  { field: 'episode', width: 150, headerName: 'Episode' },
  { field: 'created', width: 250, headerName: 'Created' },
]
const sortModel = [
  {
    field: 'name',
    sort: 'asc' as SortDirection,
  },
]
export const Episodes = () => {
  const [page, setPage] = React.useState(1)
  const dispatch = useDispatch()

  const episodes = useSelector((state: RootState) => state.episodes.data)
  const info = useSelector((state: RootState) => state.episodes.infoData)

  const handlePageChange = (params: PageChangeParams) => {
    // dispatch(actionsEpisode.fetch(params.page))
    setPage(params.page)
  }
  useEffect(() => {
    dispatch(actionsEpisode.fetch(page))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])
  if (!episodes) return <div>not yet</div>
  return (
    <Grid container style={{ height: 400, width: '100%' }}>
      {' '}
      {info?.count && (
        <DataGrid
          autoHeight
          pageSize={20}
          onPageChange={handlePageChange}
          paginationMode='server'
          rowCount={info?.count}
          pagination
          rows={episodes}
          columns={columns}
        />
      )}
    </Grid>
  )
}
