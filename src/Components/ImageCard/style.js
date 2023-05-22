import styled from "styled-components";

export const Card = styled.div`
display:flex;
width:90px;
height:90px;
border-radius : 6px;
background-image : url(${(props)=> props.photo});
background-size: cover;

`;
export const Text= styled.p`
color: ${(props)=> props.theme.colors.photo};
font-family: ${(props)=> props.theme.fonts.regular};
font-size:16px;
margin-bottom:10px;
`;
