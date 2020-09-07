
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from '../App';
import Ecommerce from './Ecommerce/ecommerce'
import Inicio from '../Pages/Inicio'

export default function Routes() {
    return (
      <Switch>
           <Route path="/" component={Inicio} />
          <Route path="/Ecommerce" component={Ecommerce} />
      
      </Switch>
    );
  }