import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const DisplayData = ({ weather }) => {
  if (weather.length === 0) return null;

  return (
    <Grid container spacing={3} style={{ marginTop: '20px' }} >
      {weather.map((data, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <Card style={{backgroundColor: "red"}}>
            <CardContent>
              <Typography variant="h5">Weather in {data.name}</Typography>
              <Typography variant="h6">{data.main.temp} °C</Typography>
              <Typography variant="body1">Humidity: {data.main.humidity}%</Typography>
              <Typography variant="body1">Conditions: {data.weather[0].description}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default DisplayData;
