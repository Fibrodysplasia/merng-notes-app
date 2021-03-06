import React from 'react';

import HomePage from './HomePage';
import Notes from './Notes';
import CreateNote from './CreateNote';
import TrashCan from './TrashCan';

import NoteAltIcon from '@mui/icons-material/NoteAlt';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import HomeIcon from '@mui/icons-material/Home';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export const NavData = [
    {
        title: 'Home',
        comp: <HomePage/>,
        icon: <HomeIcon/>,
        cName: 'nav-text'
    },
    {
        title: 'Notes',
        comp: <Notes/>,
        icon: <NoteAltIcon/>,
        cName: 'nav-text'
    },
    {
        title: 'Create Note',
        comp: <CreateNote/>,
        icon: <NoteAddIcon/>,
        cName: 'nav-text'
    },
    {
        title: 'Trash',
        comp: <TrashCan/>,
        icon: <DeleteOutlineIcon/>,
        cName: 'nav-text'
    }
]