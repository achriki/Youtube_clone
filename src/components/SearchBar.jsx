import {React, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {Paper, IconButton} from '@mui/material';
import {Search} from '@mui/icons-material';
function SearchBar() {
    const [searchTerms, setSearchTerms] = useState('');
    const navigate  = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(searchTerms){
            navigate(`/search/${searchTerms}`);

            setSearchTerms('');
        }
    }
  return (
    <Paper 
        component="form"
        onSubmit={handleSubmit}
        sx={{
            borderRadius: 20,
            border: '1px solid #e3e3e3',
            pl:2,
            boxShadow: 'none',
            mr:{sm: 5}
        }}
    >
        <input
            className='search-bar'
            placeholder='Search...'
            value={searchTerms}
            onChange={(e)=>{setSearchTerms(e.target.value)}}
        />
        <IconButton type="submit" sx={{p:'1Opx',color:'red'}}>
            <Search/>
        </IconButton>
    </Paper>
  )
}

export default SearchBar