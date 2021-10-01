import React, { useState } from 'react';

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'red',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  });

function CreateNote() {
    const [input, setInput] = useState({
        notetitle: '',
        notebody: '',
    })
    function handleChange(event) {
        const {id, value} = event.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [id]: value
            }
        })
    }

function handleClick(event) {
    event.preventDefault();
}

    return <><Container sx={{
      textAlign: 'center',
      overflow: 'hidden',
      borderRadius: '12px',
      bgcolor: 'background.paper',
      boxShadow: 2,
      height: '8vh',
      width: '50vw',
      mb: '30px',
    }}>
        <Typography variant="h2" component="div" gutterBottom>
            Create Note
        </Typography>
        </Container>
        <Divider />
        <Container sx={{
            textAlign: 'center',
            overflow: 'hidden',
            borderRadius: '12px',
            boxShadow: 2,
            width: '50vw',
            mt: '15px',
            p: '15px'
        }}>
        <Box
            component="form"
            noValidate
            sx={{
            gap: 2,
        }}>
            <form id='note-form' style={{ 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
            <CssTextField label='Title' id='notetitle' autoComplete='off' required sx={{ mb: '10px' }} onChange={handleChange}/>
            <CssTextField label='Note' id='notebody' autoComplete='off' sx={{ mb: '10px' }} onChange={handleChange}/>
            <Typography variant='caption' display='block' gutterBottom>
                *Required
            </Typography>
            <Button variant='contained' type='reset' form='note-form' onClick={handleClick} >Submit</Button>
            </form>

        </Box></Container>
      
    </>
    
}

export default CreateNote