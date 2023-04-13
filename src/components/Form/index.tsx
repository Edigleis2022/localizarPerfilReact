import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function BasicTextFields() {
    return (
        <Box
            sx={{
                width: 500,
                maxWidth: '100%',
                position:'relative',
                justifyContent: 'center'

            }}
        >
            <TextField fullWidth label="fullWidth" id="fullWidth" />
            
        </Box>
    );
}