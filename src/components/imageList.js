import React from 'react';
import './imageList.css';
import ImageCard from './imagesCard';

// creates list of images, with key prop id, based on image url from unsplash API.
const ImageList = (props) => {
 const images = props.images.map((image) => {
    return <ImageCard key= {image.id} image={image}/>
 });

//displays images from above in div
return <div className="image-list">{images}</div>

}
// allows ImageList to be used throughout application
export default ImageList;