import React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Stack } from '@mui/material';
import { IconButton } from '@mui/material';


const MUI = () => {
    return (
        <div className='mui-component'>

        <h2 className='text'>Material UI Basic Components</h2>

        <Stack spacing={3} direction="row" flexWrap="wrap" justifyContent="space-between" alignItems="center">

            <Button variant="text" color="primary">btn variant text</Button>

            <Button variant='contained' color="secondary">Btn Contained</Button>
    
            <Button variant="outlined" color="secondary">Outline</Button>

            <Button variant="outlined" color="secondary" disabled>Disable</Button>

            <Button variant="outlined" href='https://www.google.com'>Link</Button>

            <Button variant="outlined" onClick={()=> alert("Hey Young man!")}>Handle Event</Button>

            <Button variant="contained" color='success'>success</Button>

            <Button variant="contained" color='error' size='small'>Error</Button>

            <Button variant="contained" color='primary' size='medium'>medium btn</Button>

            <Button variant="contained" color='error' size='large'>Large btn</Button>

            <Button variant="outlined" color="primary" startIcon={<DeleteIcon/>}>Delete</Button>

            <Button variant="outlined" color="primary" endIcon={<SendIcon/>}>Send</Button>
            <IconButton color='primary'>   <AddShoppingCartIcon /> </IconButton>

        </Stack>


        </div>
    );
};

export default MUI;