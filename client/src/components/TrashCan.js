import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

function TrashCan() {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const popClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

    const [notes, setNotes] = useState([{
        notetitle: 'LOADING NOTES',
        notebody: 'estimated time remaining: yes',
        noteid: '42'
    }])

    useEffect(() => {
        fetch('/notes').then(res => {
            if(res.ok) {
                return res.json()
            }
        }).then(jsonRes => setNotes(jsonRes));
    })

    function deleteNote(event) {
        event.preventDefault();
        alert('new feature: perm trash on the way!');
    
    // axios.delete('http://localhost:3001/create', newNote);
    //ReactDOM.render(<Notes/>, document.getElementById('main'));
    }

    function restoreNote(event) {
        event.preventDefault();
        alert('new feature: restore notes on the way!');
    
    // axios.delete('http://localhost:3001/create', newNote);
    //ReactDOM.render(<Notes/>, document.getElementById('main'));
    }

    return <><Container sx={{
        textAlign: 'center',
        overflow: 'hidden',
        borderRadius: '12px',
        bgcolor: 'background.paper',
        boxShadow: 2,
        height: '8vh',
        width: '100%',
        mb: '30px',
    }}>
        <Typography variant="h2" component="div" gutterBottom>
            Trash Can
        </Typography></Container>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

        {notes.map(note => 
        <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 256,
            height: 256,
          },
        }}
      >
            <Paper elevation={18} sx={{
                bgcolor: '#FFF9E5',
                p: '15px',
                display: 'grid',
                gridAutoRows: '80px'
            }}>
                <Typography variant='h5' gutterBottom component='div' textAlign='center' noWrap sx={{ gridColumn: '1', griwRow: '1 / 2' }}>
                    <DeleteForeverIcon/>{note.notetitle}<DeleteForeverIcon/><br/>
                    <Divider/>
                </Typography>
                <Typography variant='body1' gutterBottom component='div' textAlign='center' noWrap paragraph sx={{ gridColumn: '1', griwRow: '2 / 4' }}>
                <br />{note.notebody}<br />
                </Typography>

                <ButtonGroup size='small' fullWidth variant='text' aria-label='outlined primary button group' sx={{ gridColumn: '1', griwRow: '4 / 5' }}>
                    <Button aria-describedby={id} variant='text' onClick={popClick} color={'warning'}>
                        Delete
                    </Button>
                    <IconButton color={'success'} onClick={restoreNote}>
                    <Typography sx={{ p: 2 }}>
                        <Typography variant='caption' gutterBottom component='div'>
                            Restore Note
                        </Typography>
                    </Typography>
                        </IconButton>
                </ButtonGroup>
                <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                >
                <Typography sx={{ p: 2 }}>
                    <Typography variant='caption' gutterBottom component='div' sx={{textAlign: 'center'}}>
                        permanent<br />delete
                    </Typography>
                    <IconButton color={'error'} onClick={deleteNote}>
                        <DeleteForeverIcon fontSize='large'/>
                    </IconButton>
                </Typography></Popover>

            </Paper>
        </Box>
        )}

        </Grid>
          
          
            
    </Box></>
}


export default TrashCan