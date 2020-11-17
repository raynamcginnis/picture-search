import React from 'react';

// creates list of images, with key prop id, based on image url from unsplash API.
const ImageList = (props) => {
 const images = props.images.map(({description, id, urls}) => {
    return <img key= {id} src={urls.regular} alt={description}/>
 });

//displays images from above in div
return <div>{images}</div>

}
// allows ImageList to be used throughout application
export default ImageList;