import React, { useEffect } from 'react';
import Portal from './Portal';
import {Overlay, Dialog} from './styles';
const Modal =({children, open,onClose})=>{
  window.addEventListener('keydown', onEsc);
  function onEsc(e){
    if(e.keyCode===27){
      onClose()
      return()=>{
        window.removeEventListener('keydown')
      }
    }
  }
 useEffect(()=>{
 
 },[])
    if(!open) return null;

    function onOverlayClick(){
       onClose();
    }
    function onDialogClick(e){
        e.stopPropagation();

    }
    return(

   
    <Portal>
      <Overlay onClick={onOverlayClick}>
        <Dialog onClick={onDialogClick}>{children}</Dialog>
      </Overlay>
    </Portal>

    )
}
export default Modal;