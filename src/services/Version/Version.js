import React, { Component } from 'react'
import './Version.css';

class Version extends Component {
  state = {
    data: [],
  }


  componentDidMount() {

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },


    };


    const url =
      'https://node-red-nxdup.mybluemix.net/visitor'

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log('data final  ', result)
        this.setState({
          data: result,
        })
      })
      .catch(

        err => {
          console.log('Error al obtener la información del servicio ', err)
        }

      )
  }

  render() {
    const { data } = this.state
    console.log('data final lectura ', data.data)
    if(data.data !== undefined){
    return <p className="alineado">{data.data.version}</p>
    }else{
      return <p>Sin Datos</p>
    }
   
  }
}

export default Version