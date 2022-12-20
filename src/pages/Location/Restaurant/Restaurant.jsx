import React from 'react'
import locationImg from '../../../assets/yeeun_image/locationIcon.png'
import { Container, ContainerHeader, ContainerLocation ,ContainerHeartBtn, ContainerLocationIcon } from '../Place/Place'
import RestaurantDetailList from '../../../components/RestaurantDetailList/RestaurantDetailList'
export default function Restaurant() {
  return (
    <Container>
        <ContainerHeader>덕수궁</ContainerHeader>
        <ContainerLocationIcon src={locationImg}/>
        <ContainerLocation> 서울|</ContainerLocation>
        <ContainerLocation>중구 </ContainerLocation>
        <ContainerLocation>  궁궐</ContainerLocation>
        <ContainerHeartBtn/>
        <RestaurantDetailList></RestaurantDetailList>

        <ContainerHeader>경복궁</ContainerHeader>
        <ContainerLocationIcon src={locationImg}/>
        <ContainerLocation> 서울|</ContainerLocation>
        <ContainerLocation>중구 </ContainerLocation>
        <ContainerLocation>  궁궐</ContainerLocation>
        <ContainerHeartBtn/>
        <RestaurantDetailList></RestaurantDetailList>
    </Container>
  )
}