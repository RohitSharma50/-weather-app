import React from 'react';
import { Container, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const SortOptions = ({ setSortBy }) => {
  return (
    <Container>
      <FormControl variant="outlined" style={{ minWidth: 200, marginTop: '20px' }}>
        <InputLabel>Sort By</InputLabel>
        <Select
          label="Sort By"
          onChange={(e) => setSortBy(e.target.value)}
        >
          <MenuItem value="temperature">Temperature</MenuItem>
          <MenuItem value="humidity">Humidity</MenuItem>
          <MenuItem value="conditions">Conditions</MenuItem>
        </Select>
      </FormControl>
    </Container>
  );
};

export default SortOptions;
