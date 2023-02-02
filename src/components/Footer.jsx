import React from 'react'
import '../css/Footer.css'

import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function Footer() {
  return (
    <div className='Footer'>
        <p>Designed and Developed by Dee Caulcrick in 2023</p>
        <div className='social-links'>
              <Stack direction='row' spacing={1}>
              <Link href="https://twitter.com/deecaulcrick">
              <TwitterIcon />
            </Link>
            <Link href="https://github.com/deecaulcrick">
              <GitHubIcon />
            </Link>
            <Link href="https://www.linkedin.com/in/deborah-caulcrick/">
              <LinkedInIcon />
            </Link>
              </Stack>
        
        </div>
      </div>
    
  )
}

export default Footer