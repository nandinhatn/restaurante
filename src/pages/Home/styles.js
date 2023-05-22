import styled from "styled-components";
import Slider from "react-slick";

export const Wrapper = styled.div`
display:flex;

flex-direction: row;

`;
export const Container = styled.aside`
background-color: ${(props)=> props.theme.colors.background};
color: ${(props)=> props.theme.colors.primary};
width:360px;
height: 100vh;
overflow-y:auto;
`;
export const Search = styled.section`
display: flex;
flex-direction: column;
background-color: white;
justify-content: center;
align-items:center;
padding:16px;


`;
export const Img = styled.img`
width: 150px;
padding:10px;

`;
export const Map = styled.div`
background-color: red;
width:500px;
`;

export const CarouselTitle = styled.h1`
font-family :${(props)=> props.theme.regular};
color: ${(props)=> props.theme.colors.text};
font-size: 24px;
font-weight: bold;
line-height: 29px;
margin:16px 0;
`;

export const Carousel = styled(Slider)`
.slick-slide{
    margin-right:16px;
}

`
export const Input = styled.input`
width: 100%;
height: 40px;
-webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
  border: 3px solid #ccc;
  border-radius: 6px;
  padding: 5px;

  ::placeholder::before  { font-family: fontAwesome; content:'teste'; color: #69f } /* ie */
:focus{
    border: 3px solid ${(props)=>props.theme.colors.primary};
};
`
;
export const ModalTitle = styled.p`
margin-bottom:10px;
letter-spacing: 0.11px;
font-family: ${(props)=>props.theme.fonts.regular};
color: ${(props)=> props.theme.colors.text}
text-transform: none;
line-height: 29px;
font-size:24px;
font-weight: bold;
`;

export const ModalContent = styled.p`
margin-bottom:10px;
letter-spacing: 0.11px;
font-family: ${(props)=>props.theme.fonts.regular};
color: ${(props)=> props.theme.colors.text}
text-transform: none;
line-height: 20px;
font-size:16px;

`;
export const containerMap = styled.div`
width: 600px;
overflow-x:  hidden;
`
