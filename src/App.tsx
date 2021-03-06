import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Container from '@material-ui/core/Container'

import './App.css'
import { Header } from './components/Header/Header'
import { Characters } from './pages/Characters'
import { Episodes } from './pages/Episodes'
import { Locations } from './pages/Locations'
import { WatchList } from './pages/WatchList'

function App() {
  return (
    <div>
      <Header />
      <Container maxWidth='md'>
        <Switch>
          <Route exact path='/' component={Characters} />
          <Route exact path='/episodes' component={Episodes} />
          <Route exact path='/locations' component={Locations} />
          <Route exact path='/watch-list' component={WatchList} />
        </Switch>
      </Container>
    </div>
  )
}

export default App
