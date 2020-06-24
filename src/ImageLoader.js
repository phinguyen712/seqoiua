import React, {useRef} from "react";
import './ImageLoader.css'
import PropTypes from 'prop-types'
import {useImageLoader} from './customHooks'


function ImageLoader(props) {
  const { placeholder, image, alt} = props
  const imgRef = useRef(null);
  let img = useImageLoader(placeholder, image, imgRef)
  
  return <img ref={imgRef} src={img} className="imageLoad" alt={alt}/>
}


ImageLoader.propTypes = {
  placeholder: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string,
}


export default ImageLoader;
