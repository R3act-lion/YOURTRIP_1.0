import React from 'react'
import styled, { keyframes } from 'styled-components'
import CloudImg from '../../assets/GyuminImg/1111.png'
import BalloonImg from '../../assets/GyuminImg/2222.png'
import Logotitle from '../../assets/GyuminImg/YourTrip.png'

const Animation1 = keyframes`
0% { transform: translate(-50%, 0); }
50% { transform: translate(0, 0); }
100% { transform: translate(-50%, 0); }
`;

const Animation2 = keyframes`

0% { transform: translate(50%, 0); }
50% { transform: translate(0, 0); }
100% { transform: translate(50%, 0); }
`;


const Container = styled.div`
    margin: 0 auto;
    width: 390px;
    height: 850px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`



const LeftImg = styled.img.attrs({
    src:`${CloudImg}`,
})`
width:100px;
height:80px;
position:absolute;
left:100px;
top:270px;
animation: ${Animation1} 5s infinite;

`

const CenterImg = styled.img.attrs({
    src:`${BalloonImg}`,
})`
width:150px;
height:150px;
z-index:3;
`

const RightImg = styled.img.attrs({
    src:`${CloudImg}`,
})`
width:120px;
height:90px;
position:absolute;
right:100px;
top:290px;
z-index:2;
animation:${Animation2} 5s infinite;
`

const ImgSection =  styled.section`
`

const MainTitleImg = styled.img.attrs({
    src:`${Logotitle}`,
})`
margin-top: 100px;
width:300px;
height:80px;
`


export default function MainLogo() {
  return (
    <Container>
    <ImgSection>
    <LeftImg/>
    <CenterImg/>
    <RightImg/>
    </ImgSection>
    <MainTitleImg/>
    </Container>
  )
}
