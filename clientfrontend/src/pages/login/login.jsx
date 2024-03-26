// login.jsx
import React from 'react';
//import { Clients } from '../../components/Clients'; // Importa el componente Clients
import { Container, Paper, Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';


export const Login = () => {
    const paperStyle={padding:'50px 20px', width:600, margin:'20px auto'}
    const[name, setName]=useState('')
    const[address, setAddress]=useState('')
    const[cc, setCc]=useState('')
    const[client, setCliente]=useState([])

    const handleClick=(e)=>{
        e.preventDefault()
        const client={name, address, cc}
        console.log(client)
        fetch("http://localhost:8080/client/add",{
            method:"POST", 
            headers: {"Content-Type":"application/json"}, 
            body:JSON.stringify(client)
    }).then(()=>{console.log("new client added")})
    }

    useEffect(()=>{
      fetch("http://localhost:8080/client/getAll")
      .then(res=>res.json())
      .then((result)=>{
        setCliente(result)
      })
    }, [])

  return (

    <Container>
    <Paper elevation={3} style={paperStyle}> 
        <h1> Ingresar información </h1>
    
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '60ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="nombres" variant="outlined" 
      value={name}
      onChange={(e)=>setName(e.target.value)}/>
      <TextField id="outlined-basic" label="documento" variant="outlined" 
      value={cc}
      onChange={(e)=>setCc(e.target.value)}/>
      <TextField id="outlined-basic" label="direccion" variant="outlined" 
      value={address}
      onChange={(e)=>setAddress(e.target.value)}/>

      <Button variant="contained" color="secondary" onClick={handleClick}>
        Enviar
        </Button>


        <h1>Clientes en la base de datos</h1>

        <Paper elevation={3} style={paperStyle}> 
        {client.map(client=>(
        <Paper elevation={6} style={{margin:"10px", padding:"15px", textAlign:"left"}} key={client.id}> 
        Id:{client.id}
        -Nombre:{client.name}
        -Direccion:{client.address}
        -CC:{client.cc}

        </Paper>))}
        </Paper>


      </Box>
      </Paper>
      </Container>
  );
}