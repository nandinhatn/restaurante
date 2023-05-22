import React, {useState} from 'react';
import { Container, Search , Img, Wrapper,  CarouselTitle, Carousel, Input, ModalTitle, ModalContent,containerMap} from './styles';
import logo from '../../Assets/logo.svg'
import { useDispatch, useSelector } from 'react-redux';
import { TextField,InputAdornment} from '@mui/material';
import IconButton from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import restaurante from '../../Assets/restaurante-fake.png';
import Slider from 'react-slick';
import ImageCard from '../../Components/ImageCard/';
import RestauranteCard from '../../Components/RestauranteCard';
import Modal from '../../Components/Modal';
import Map from '../../Components/Map';
import Loader from '../../Components/Loader';
import Skeleton from '../../Components/Skeleton';


const Home =()=>{
    const {restaurants, restaurantSelected}= useSelector((state)=> state.restaurants)
    const [inputValue ,setInputValue]=useState('');
    const [placeId, setPlaceId]= useState(null)
    const [modalOpened, setModalOpened]= useState(false)
    const[query, setQuery]=useState(null)
    

    const settings ={
        dots: false,
        infinite: true,
        speed: 300,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
    }

    function handleKeyPress(e){
       console.log('entrou')
       if(e.key==='Enter'){
        setQuery(e.target.value);
        console.log('apertei o enter')
       }

    }
    function handleOpenModal(placeId){
        console.log('cliquei')
        setPlaceId(placeId)
        setModalOpened(true)

    }
    return(
        <Wrapper>

<Container>
    <Search><Img src={logo} alt="Logo do Restaurante"/>
    <Input placeholder='Pesquisar' onKeyPress={(e)=> handleKeyPress(e)} onChange={(e)=>{setInputValue(e.target.value); }} />
   
    </Search>
    


    {restaurants.length >0 ? (<>
    
        <CarouselTitle>Na sua área</CarouselTitle>
    <Carousel {...settings}>
       
      {restaurants.map((restaurant)=>(
        <ImageCard key={restaurant.place_id} photo={restaurant.photos? restaurant.photos[0].getUrl(): restaurante} name={restaurant.name}/>
      ))}
        
     
    </Carousel>
    </>): <Loader/>}

{/*     <button onClick={()=>setModalOpened(true)}>Abrir Modal</button> */}
    {restaurants.map((restaurant)=> <RestauranteCard onClick={()=>handleOpenModal(restaurant.place_id)} key={restaurant.place_id} restaurant={restaurant}/>)}
  
</Container>
<containerMap>

<Map query={query} placeId={placeId}/>
</containerMap>
 <Modal open={modalOpened} onClose={()=>setModalOpened(!modalOpened)}>

    {restaurantSelected ? (<>
        <ModalTitle>{restaurantSelected?.name}</ModalTitle>
  <ModalContent>{restaurantSelected?.formatted_address}</ModalContent>
 <ModalContent>{restaurantSelected?.open_now ? 'Aberto agora': 'Fechado neste momento'}</ModalContent>
  <ModalContent>{restaurantSelected?.formatted_phone_number}</ModalContent>
    </>) : (
    <>
    
    <Skeleton width='10px' height='10px'/></>)}
  
    </Modal> 
    </Wrapper>
    )

}

export default Home;


