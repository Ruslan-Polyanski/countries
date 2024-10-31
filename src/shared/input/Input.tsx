import { FC } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface IInput {
  handleInput: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const Input: FC<IInput> = ({ handleInput }) => {
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField onChange={handleInput} id="outlined-basic" label="Введите код страны (UZ)" variant="outlined" size="small" />
    </Box>
  );
}

export { Input }