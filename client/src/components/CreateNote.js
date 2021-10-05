import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Notes from './Notes';

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
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
    console.log(input)
    const newNote = {
      notetitle: input.notetitle,
      notebody: input.notebody,
      noteid: Date.now()
    }

    axios.post('http://localhost:3001/create', newNote);
    ReactDOM.render(<Notes/>, document.getElementById('main'));
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
            <Button variant='contained' type='submit' form='note-form' onClick={handleClick} >Submit</Button>
            </form>

        </Container>
      
    </>
    
}

export default CreateNote