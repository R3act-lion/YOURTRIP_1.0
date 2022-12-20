import React from 'react'
import styled from 'styled-components'
import TodayRecommend from '../../../components/TodayRecommendList/TodayRecommendList'
import PlaceSimpleList from '../../../components/PlaceSimpleList/PlaceSimpleList'

export const Container = styled.section`
  width: 390px;
  margin: 0 auto; 
  padding: 20px 0px 19px 22px; 
  box-sizing: border-box;
` 

export const ContainerHeader = styled.h2`
  margin: 0;
  font-size: 20px;
`

export default function Today() {
  return (
    <>
    <Container>
        <ContainerHeader>오늘의 추천</ContainerHeader>
        <TodayRecommend />
        
    </Container>
    <Container>
        <ContainerHeader>많이 찾는 여행지</ContainerHeader>
        <PlaceSimpleList />
    </Container>
    </>
  )
}
