import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import '../css/Hero.css'
import Row from './Row'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Pagination from '@mui/material/Pagination';

function Hero() {
  const [searchText, setSearchText ] = useState('');
  const [images, setImages] = useState([])
  const [page, setPage] = useState(1)

  //set pagination
  const handleChange = (e, value) => {
    setPage(value);
  };

  //set text
  const onTextChange = (e) =>{
      setSearchText(e.target.value)
  }

  const API_KEY = process.env.REACT_APP_API_KEY;
  const baseUrl = 'https://pixabay.com/api/'
    
  useEffect(() => {
      const fetchImages = async () => {
          const response = await axios(`${baseUrl}?key=${API_KEY}&per_page=18&q=${searchText}&page=${page}`);
          setImages(response.data.hits);
      
      };

      fetchImages();
    }, [searchText, page]);

  return (
    <div>

    
      <div className='Hero'>
          <div className='hero-content'>
          <h1>The best place to get free, stunning, high-quality images photos and videos for your next project.</h1>

          <Box component="form"
            sx={{
            '& > :not(style)': { m: 1, width: '100%' },
              }}
            noValidate
            autoComplete="off">

              <TextField id="outlined-basic" variant="outlined"
              name='searchText'
              value={searchText}
              onChange={onTextChange}
              placeholder='Search high-resolution images' />

            </Box>
          </div>
        
      </div>
      <Row images={images}/>
      <div className='pagination'>
        <Pagination count={10} color="primary" size="large" page={page} onChange={handleChange}className='pagination-item'/>
      </div>
      
    </div>
  )
}

export default Hero