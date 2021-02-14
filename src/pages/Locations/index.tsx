import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Grid from '@material-ui/core/Grid'
import {
  Columns,
  DataGrid,
  ValueFormatterParams,
  PageChangeParams,
} from '@material-ui/data-grid'
import { RootState } from '../../store/rootReducer'
import { actionsLocation } from '../../store/locations/actions'
import { makeStyles, Theme } from '@material-ui/core'

const columns: Columns = [
  {
    field: 'name',
    width: 250,
    headerName: 'Name',
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
  },
  {
    field: 'type',
    headerName: 'Type',
    width: 250,
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
  },
  {
    field: 'dimension',
    width: 280,
    headerName: 'Dimension',
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
  },
  {
    field: 'created',
    width: 120,
    headerName: 'Created',
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
    type: 'date',
    valueFormatter: (params: ValueFormatterParams) =>
      new Intl.DateTimeFormat('ua-UA').format(new Date(params.value as Date)),
  },
]

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    'height': 600,
    'width': '100%',
    '& .super-app-theme--header': {
      backgroundColor: theme.palette.text.disabled,
    },
  },
}))

export const Locations: React.FC = () => {
  const [page, setPage] = React.useState<number>(1)
  const classes = useStyles()
  const dispatch = useDispatch()

  const locations = useSelector((state: RootState) => state.locations.data)
  const info = useSelector((state: RootState) => state.locations.infoData)

  const handlePageChange = (params: PageChangeParams) => {
    setPage(params.page)
  }
  useEffect(() => {
    dispatch(actionsLocation.fetch(page))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])
  if (!locations) return <div>not yet</div>
  return (
    <Grid container className={classes.root}>
      {' '}
      {info?.count && (
        <DataGrid
          autoHeight
          pageSize={20}
          rowHeight={35}
          onPageChange={handlePageChange}
          paginationMode='server'
          rowCount={info?.count}
          sortingOrder={['desc', 'asc']}
          pagination
          rows={locations}
          columns={columns}
        />
      )}
    </Grid>
  )
}
