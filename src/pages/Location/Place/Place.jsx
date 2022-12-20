import React from 'react'
import styled from 'styled-components'
import PlaceDetailList from '../../../components/PlaceDetailList/PlaceDetailList'
import bgImg from '../../../assets/yeeun_image/heartOffImg.png'
import locationImg from '../../../assets/yeeun_image/locationIcon.png'

export const Container= styled.section`
    width: 390px;
    margin: 0 auto; 
    padding: 20px 0px 19px 22px; 
    box-sizing: border-box;
`

export const ContainerHeader= styled.h2`
    width: 100%;
    margin: 0 0 4px;
    font-size: 20px;
    font-weight: 500;
    position: relative;
    top: 15px;
`

export const ContainerLocation= styled.span`      
    font-size: 12px;
    vertical-align: top;
    position: relative;
    top: 15px;
`

export const ContainerLocationIcon= styled.img`
    width: 10px;
    height: 14px;
    position: relative;
    top: 14px;
`

export const ContainerHeartBtn= styled.button`
    width: 36px;
    height: 36px;
    background-color: white;
    float: right;
    position : relative;
    bottom: 10px;
    right: 35px;
    border-radius: 50%;
    border: none;
    background-image: url(${bgImg});
    background-repeat: no-repeat;
    background-position: center;
`

export default function Place() {
  return (
    <Container>
        <ContainerHeader>덕수궁</ContainerHeader>
        <ContainerLocationIcon src={locationImg}/>
        <ContainerLocation> 서울|</ContainerLocation>
        <ContainerLocation>중구 </ContainerLocation>
        <ContainerLocation>  궁궐</ContainerLocation>
        <ContainerHeartBtn/>
        <PlaceDetailList></PlaceDetailList>

        <ContainerHeader>경복궁</ContainerHeader>
        <ContainerLocationIcon src={locationImg}/>
        <ContainerLocation> 서울|</ContainerLocation>
        <ContainerLocation>중구 </ContainerLocation>
        <ContainerLocation>  궁궐</ContainerLocation>
        <ContainerHeartBtn/>
        <PlaceDetailList></PlaceDetailList>
    </Container>
  )
}