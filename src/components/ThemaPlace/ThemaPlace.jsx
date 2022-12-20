import React from 'react'
import styled from 'styled-components'
import { ContainerHeader, ContainerLocationIcon, ContainerLocation, ContainerHeartBtn } from '../../pages/Location/Place/Place'
import locationImg from '../../assets/yeeun_image/locationIcon.png'
import PlaceDetailList from '../PlaceDetailList/PlaceDetailList'

const Container= styled.section`
    width: 390px;
    margin: 0 auto; 
    padding: 20px 0px 19px 22px;
    background-color: #f5f5f5; 
    box-sizing: border-box;
`

export default function ThemaPlace() {
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
