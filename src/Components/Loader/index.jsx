import React from "react";
import Lottie from "react-lottie";


import animationData from '../../Assets/restaurants-loading.json';


export default ()=>{
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

      return <Lottie options={defaultOptions}  height={200}
      width={200}/>
}