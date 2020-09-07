import React from 'react';
import logo from './imagenes/logo.png';
import './App.css';
import ApiGapsi from './services/Welcome/ApiGapsi'
import Version from './services/Version/Version'

import Header from './components/Header/Header';

import SimpleSelect from './services/Ecommerce/ecommerce';


import Button from '@material-ui/core/Button';





class App extends React.Component {

  constructor() {
    super();
    this.state = { show: true };
  }

  render() {
    return (
      this.state.show ?
        <div className="App">


          <Header />
          <header className="App-header">
            <img src={logo} className="logo" alt="logo" />

            <ApiGapsi />
            <Button variant="contained" color="primary" onClick={this.activateLasers.bind(this)}>
              Continuar
          </Button>

          </header>




          <Version />
        </div>
        : <SimpleSelect />
    );
  }

  activateLasers() {

  
    this.setState({ show: false });


  }
}




export default App;
