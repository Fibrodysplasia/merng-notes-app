import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

function Notes() {

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

    function handleClick(event) {
        event.preventDefault();
        alert('you trashed it');
    
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
            Notes
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
                bgcolor: '#FFFF88',
                p: '15px',
                display: 'grid',
                gridAutoRows: '80px'
            }}>
                <Typography variant='h3' gutterBottom component='div' textAlign='center' noWrap sx={{ gridColumn: '1', griwRow: '1 / 2' }}>
                    {note.notetitle}
                    <Divider/>
                </Typography>
                <Typography variant='body1' gutterBottom component='div' textAlign='center' mt={1} noWrap sx={{ gridColumn: '1', griwRow: '1 / 2' }}>
                    {note.notebody}
                    </Typography>
                    <Tooltip title="Move to Trash"><IconButton color='warning' onClick={handleClick}>
                    <DeleteForeverIcon fontSize='medium'/>
                </IconButton></Tooltip>

            </Paper>
        </Box>
        )}
        </Grid>
    </Box></>
}


export default Notes