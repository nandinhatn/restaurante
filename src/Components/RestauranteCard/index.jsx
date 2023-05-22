import React, {useState} from "react";
import {Restaurant, RestaurantInfo, Title, Address, Image} from './style';
import ReactStars from "react-rating-stars-component";
import restaurante from '../../Assets/restaurante-fake.png'
import Skeleton from "../Skeleton";
const RestauranteCard=({restaurant, onClick})=>{
   const [imageLoaded, setImageLoaded]= useState(false)
    return(
       <Restaurant key={restaurant.place_id} onClick={onClick}>
         <RestaurantInfo>
            <Title>{restaurant.name}</Title>
            <ReactStars
    count={5}
    isHalf
    /* onChange={ratingChanged} */
    size={24}
    edit={false}
    value={restaurant.rating}
    activeColor="#E5A404"
  />
            <Address>{restaurant.vicinity || restaurant.formatted_address
}</Address>
         </RestaurantInfo>
        <Image imageLoaded={imageLoaded} 
        onLoad={()=> setImageLoaded(true)} src={restaurant.photos ? restaurant.photos[0].getUrl(): restaurante} alt="Foto do Restaurante"/>
       {!imageLoaded && <Skeleton width="100px" height="100px"/>}
       </Restaurant>
    )

}

export default RestauranteCard;

