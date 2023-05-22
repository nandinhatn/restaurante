import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {GoogleApiWrapper, Map, Marker} from 'google-maps-react';
import { setRestaurants, setRestaurant } from '../../redux/modules/restaurants';
export const MapContainer = (props)=>{
    const dispatch= useDispatch()
    const {restaurants}= useSelector((state)=> state.restaurants)
    const {google, query, placeId}=props;
    const [map, setMap]= useState(null)

    useEffect(()=>{
        if(query){
            searchByQuery(query);
        }
    },[query])

    useEffect(()=>{
        if(placeId){
            getRestaurantById(placeId)
        }
    },[placeId])

    function getRestaurantById(placeId){
        const service = new google.maps.places.PlacesService(map)
        dispatch(setRestaurant(null))
        const request ={
           placeId,
           fields:['name','opening_hours', 'formatted_address', 'formatted_phone_number'],
        }
        service.getDetails(request, (place, status)=>{
            if(status===google.maps.places.PlacesServiceStatus.OK){

                console.log('Dentro do GetDetailsrestaurante>>',place)
                dispatch(setRestaurant(place))
            }
        })

    }

    function searchByQuery(query){
        const service = new google.maps.places.PlacesService(map)
        dispatch(setRestaurants(null))
        const request ={
            location:map.center,
            radius : '200',
            type:['restaurant'],
            query,
        }
        service.textSearch(request, (results, status)=>{
            if(status===google.maps.places.PlacesServiceStatus.OK){

                console.log('restaurante>>',results)
                dispatch(setRestaurants(results))
            }
        })


    }
    function searchNearBy(map, center){
        const service = new google.maps.places.PlacesService(map)
        dispatch(setRestaurants([]))
        const request ={
            location:center,
            radius : '10000',
            type:['restaurant'],


        }
        service.nearbySearch(request, (results, status)=>{
            if(status===google.maps.places.PlacesServiceStatus.OK){

                console.log('restaurante>>',results)
                dispatch(setRestaurants(results))
               
            }
        })

    }
    function onMapReady(_, map){
        setMap(map);
        searchNearBy(map, map.center)
    }
    return(
        <Map  containerStyle={{width: "80vw", position:"fixed"}} google={google} centerAroundCurrentLocation onReady={onMapReady} onRecenter={onMapReady} {...props}>
            {restaurants.map((restaurant)=>(
                <Marker key={restaurant.place_id} name={restaurant.name} position={{
                    lat: restaurant.geometry.location.lat(),
                    lng: restaurant.geometry.location.lng(),
                }}/>
            ))}
            <Marker/>
            </Map>
    )
};


export default GoogleApiWrapper({
    apiKey: env.REACT_APP_GOOGLE_API_KEY,
    language:'pt-BR',
  })(MapContainer)