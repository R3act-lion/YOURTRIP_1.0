import React from 'react'
import styled from 'styled-components'
import mapsicleMap from '../../assets/yeeun_image/mapsicleMap.png'

const Container= styled.section`
  padding: 25px 22px;
`

const MapImg= styled.img`
  width: 100%;
  border: 1px solid #d4d4d4;
  border-radius: 5px;
`

const MapHeader= styled.address`
  margin: 15px 0 8px;
  color: #5a5a5a;
  font-size: 14px;
  line-height: 1.2;
`

const MapAddress= styled.address`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2;
`

export default function DetailMap() {
  return (
    <Container>
      <MapImg src={mapsicleMap}/>
      <MapHeader>도로명주소</MapHeader>
      <MapAddress>강원도 춘천시 사북면 춘화로 330-48 해피초원목장</MapAddress>
    </Container>
  )
}