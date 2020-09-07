import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));



export default function SimpleSelect() {


   let state = {
    data: []
  };


  const classes = useStyles();
  const [age, setAge] = React.useState('');
  var valido = true

  const handleChange = (event) => {

    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },


    };

    setAge(event.target.value);
    console.log('age ', console.log('Cambio de categoria ', event.target.value))
    valido = false
    if (event.target.value == 1) {

      var url =
        'https://node-red-nxdup.mybluemix.net/productos/reloj/1'



      fetch(url, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log('data productos  ', result)
          
            state.data = result
          
        })

        .catch(

          err => {
            console.log('Error al obtener la información del servicio ', err)
          }

        )

    } else  if (event.target.value == 2) {

      var url =
        'https://node-red-nxdup.mybluemix.net/productos/videojuegos/1'



      fetch(url, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log('data productos  ', result)
          
            state.data = result
          
        })

        .catch(

          err => {
            console.log('Error al obtener la información del servicio ', err)
          }

        )

    }else  if (event.target.value == 3) {

      var url =
        'https://node-red-nxdup.mybluemix.net/productos/camisa/1'



      fetch(url, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log('data productos  ', result)
          
            state.data = result
          
        })

        .catch(

          err => {
            console.log('Error al obtener la información del servicio ', err)
          }

        )

    }
  };



  return (


      <div className="categorias">
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Categorias</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChange}
          >
            <MenuItem value={1}>Relojes</MenuItem>
            <MenuItem value={2}>Videojuegos</MenuItem>
            <MenuItem value={4}>Camisas</MenuItem>
          </Select>
        </FormControl>
     
      </div>
      
  
        
   


  )

}

