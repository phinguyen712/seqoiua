import React, { useEffect, useState } from "react";
import ImageLoader from './ImageLoader'
import './Thumbnail.css'


//This is a sample to component to show how ImageLoader is used
const placeholder ="https://coolbackgrounds.io/images/backgrounds/black/pure-black-background-f82588d3.jpg";

function Thumbnail() {
  const [images, setImages] = useState([]);
  
  useEffect(()=> {
    if(!images.length) {
      fetch('https://picsum.photos/v2/list?page=2&limit=40')
      .then(response => {
        if(response.ok) {
          return response.json();
        }
      })
      .then(data => {
        setImages(data);
      });
    }
  })

  if(!images.length) {
    return <div></div>
  }

  return images.map((image, index)=> {
    return (
      <div key={index} className='photoContainer'>
        <ImageLoader placeholder={placeholder} image={image.download_url} alt={image.author} />
      </div>
    )
  })
}
export default Thumbnail;
