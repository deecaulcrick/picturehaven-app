import React from "react";
import "../css/Row.css";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function Row({ images }) {
  return (
    <div className="Row">
      <ImageList variant="masonry" cols={3} gap={10}>
        {images.map((image) => (
          <ImageListItem key={image.id}>
            <img
              src={`${image.previewURL}?w=248&fit=crop&auto=format`}
              srcSet={`${image.webformatURL}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={image.tags}
              loading="lazy"
              onClick={() => window.open(image.pageURL)}
              />
          </ImageListItem>
        ))}     
      </ImageList>

    </div>
  )
}

export default Row