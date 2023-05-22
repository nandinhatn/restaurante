import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { Card, Text } from './style';
import Skeleton from '../Skeleton';


const ImageCard = ({photo, name})=>{
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(()=>{
    const imageLoader = new Image();
    imageLoader.src = photo;
    imageLoader.onload= ()=> setImageLoaded(true)
  },[photo])
    return (
      <>
      {imageLoaded ? ( <Card photo={photo}><Text>{name}</Text></Card>): 
      <Skeleton width="90px" height="90px"/>
      }
     
      </>
    )
}
export default ImageCard;