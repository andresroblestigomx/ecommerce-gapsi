import React from 'react'

import Button from '@material-ui/core/Button';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Ecommerce from '../../services/Ecommerce/ecommerce'

function ButtonUI() {
  return (

    <Router>
      <Button variant="contained" color="primary" onClick={activateLasers}>
        <Link to="/Ecommerce">Continuar</Link>
      </Button>

      <Switch>
          <Route path="/Ecommerce">
          <Ecommerce />
            </Route>
            </Switch>
      
    </Router>
  )
}

function activateLasers(){

    console.log('Se han activado ')

}

export default ButtonUI