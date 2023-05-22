import styled from "styled-components";


export const Restaurant = styled.div`
display: flex;
justify-content: space-betweem;
cursor: pointer;
margin-top: 5px;
padding: 16px;
background-color: white;
border-left: 5px solid transparent;
:hover{
    background-color: ${(props)=> props.theme.colors.background};
    border-left-color: ${(props)=> props.theme.colors.primary};
}

`;
export const RestaurantInfo = styled.div`
display: flex;
flex-direction: column;

`;

export const Title = styled.span`
font-family : ${(props)=> props.theme.fonts.regular};
color: ${(props)=> props.theme.colors.text};
font-size:20px;
font-weight: bold;
line-height: 29px;

`;
export const Address = styled.span`
font-family : ${(props)=> props.theme.fonts.regular};
color: ${(props)=> props.theme.colors.text};
font-size:16px;
line-height: 19px;
margin-bottom:10px;
`
export const Image  = styled.img`
display: ${(props)=> props.imageLoaded ? 'block': 'none'};
border-radius: 10px;
padding: 5px;
width: 100px;
height: 100px;
object-fit:cover;

`;