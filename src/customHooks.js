import {useState, useEffect} from "react"

const useImageLoader = (placeholder, image, imgRef) => {
    const [img, setImg] = useState(placeholder);
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setImg(image);
            observer.unobserve(entry.target);
          }
        }); 
      },
      {
        rootMargin: '0px 0px 100px 0px',
      }
    );
    useEffect(() => {
      observer.observe(imgRef.current);
    })
    return img
  }

  export {
      useImageLoader,
  }