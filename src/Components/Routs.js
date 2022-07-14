import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Global from './Global'

export default function Routs() {
  return (
    <div>
      <Switch>
        <Route path="/">
          <Global />
        </Route>
      </Switch>
    </div>
  )
}
