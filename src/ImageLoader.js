import React, { useState, useEffect, useRef} from "react";
import './ImageLoader.css'
import PropTypes from 'prop-types'

function ImageLoader(props) {
  const { placeholder, image, alt} = props;
  const imgRef = useRef(null);
  const [img, setImg] = useState(placeholder);
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setImg(image)
          observer.unobserve(entry.target)
        }
      });
    },
    {
      rootMargin: '0px 0px 100px 0px',
    }
  );
  
  useEffect(()=> {
    observer.observe(imgRef.current);
  })
  
  return <img ref={imgRef} src={img} className="imageLoad" alt={alt}/>
}


ImageLoader.propTypes = {
  placeholder: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string,
}


export default ImageLoader;
