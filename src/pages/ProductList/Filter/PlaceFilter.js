import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function FilterModal({
  setFilterValue,
  setFilterDisabled,
  setPlaceInput,
  placeInput,
}) {
  const handleChange = event => {
    setPlaceInput(event.target.value);
  };

  const handleFilterValue = (value, name) => {
    setFilterValue(prev => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">놀이터</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={placeInput}
          label="value"
          onChange={handleChange}
        >
          <MenuItem
            onClick={() => {
              handleFilterValue('new_place', 'status');
              setFilterDisabled(true);
            }}
            value="newplace"
          >
            새로운 나랑 놀래 ?
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleFilterValue('finished_place', 'status');
              setFilterDisabled(false);
            }}
            value="finishedplace"
          >
            지난 나랑 놀래 ?
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
