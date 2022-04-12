import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function RecruitFilter({
  setFilterValue,
  filterDisabled,
  setRecruitInput,
  recruitInput,
}) {
  const handleChange = event => {
    setRecruitInput(event.target.value);
  };

  const handleFilterValue = (value, name) => {
    setFilterValue(prev => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth disabled={filterDisabled}>
        <InputLabel id="demo-simple-select-label">모집 상태</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={recruitInput}
          label="value"
          onChange={handleChange}
        >
          <MenuItem
            onClick={() => {
              handleFilterValue('every_place', 'participant');
            }}
            value="everyplace"
          >
            전체
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleFilterValue('less_visitor', 'participant');
            }}
            value="lessvisitor"
          >
            열렸다 ! 나랑 놀 곳
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleFilterValue('full_visitor', 'participant');
            }}
            value="fullvisitor"
          >
            다찼다 ! 나랑 놀 곳
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
