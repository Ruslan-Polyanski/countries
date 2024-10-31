import { FC } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Input: FC = () => {
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField onChange={(e) => console.log(e.target.value)} id="outlined-basic" label="Введите код страны (UZ)" variant="outlined" size="small" />
    </Box>
  );
}

export { Input }