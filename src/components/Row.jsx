import React, { useState } from "react";
import "../css/Row.css";

import Stack from '@mui/material/Stack';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Backdrop from '@mui/material/Backdrop';
import IconButton from '@mui/material/IconButton';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Link from '@mui/material/Link';

function Row({ images }) {

  const [open, setOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = useState({});
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="Row">
      

  <ImageList variant="masonry" cols={3} gap={10}>
  {images.map((image) => (
    <ImageListItem key={image.id}>
      <img
        src={`${image.webformatURL}?w=248&fit=crop&auto=format`}
        srcSet={`${image.webformatURL}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={image.tags}
        loading="lazy"
        onClick={() => {
          setSelectedImage(image)
          setOpen(!open);
        }}
        
      />
    </ImageListItem>
  ))}

<Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        {selectedImage.id && (
        <div className='backdrop' style={{ marginTop: '20px' }}>
          <img src={selectedImage.webformatURL} alt=''/>
          <Stack direction="row" spacing={10}>
            <p>
              <strong>Tags:</strong> {selectedImage.tags}
            </p>
            <IconButton aria-label="download">
              <Link href={selectedImage.pageURL}>
                <FileDownloadIcon color="primary"/>
              </Link>
            </IconButton>
          </Stack>
        
        </div>
      )}
      </Backdrop>
</ImageList>


    </div>
  )
}

export default Row