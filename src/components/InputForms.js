// src/components/InputForm.js
import React from 'react';
import { TextField, Button, Container } from '@mui/material';

const InputForms = ({ city, setCity, country, setCountry, handleFetchWeather }) => {
  return (
    <Container style={{ marginTop: '20px' }}>
      <TextField 
        req="true"
        label="City" 
        variant="outlined" 
        value={city} 
        
        onChange={(e) => setCity(e.target.value)} 
        style={{ margin: '10px' }}
      />
      <TextField 
       req="true"
        label="Country" 
        variant="outlined" 
        value={country} 
        onChange={(e) => setCountry(e.target.value)}
        style={{ margin: '10px' }}
      />
      <Button req="true" variant="contained" color="primary" onClick={handleFetchWeather} style={{ margin: '18px' }}>
        Get Weather
      </Button>
    </Container>
  );
};

export default InputForms;
