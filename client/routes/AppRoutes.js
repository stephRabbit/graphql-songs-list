import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

// ---------------
import SongList from '../components/SongList'
import SongCreate from '../components/SongCreate'
import SongDetail from '../components/SongDetail'

const AppRoutes = () => {
  return (
    <HashRouter>
      <div className="container">
        <Switch>
          <Route exact path="/" component={SongList} />
          <Route path="/songs/new" component={SongCreate} />
          <Route path="/songs/:id" component={SongDetail} />
        </Switch>
      </div>
    </HashRouter>
  )
}

export default AppRoutes
