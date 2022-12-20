import React from 'react'
import styled from 'styled-components'
import locationIcon from '../../assets/yeeun_image/locationIcon.png'

const Container= styled.section`
  padding: 30px 22px 21px;
`

const Header= styled.h2`
  margin-bottom: 5px;
  font-size: 24px;
`

const LocationIcon= styled.img`
  margin: 0 4px;
  width: 10px;
  height: 14px;
`

const LocationInfo= styled.span`
  color: #676767;
  font-size: 14px;
  vertical-align: top;
`

const LocationDesc= styled.p`
  margin-top: 20px;
  font-size: 16px;
  line-height: 1.2;
`

export default function DetailHome() {
  return (
    <Container>
    <Header>해피초원목장</Header>
    <LocationIcon src={locationIcon}/>
    <LocationInfo>강원도 |</LocationInfo>
    <LocationInfo> 춘천</LocationInfo>
    <LocationInfo> ∙ 관람, 체험</LocationInfo>
    <LocationDesc>
      위치에 대한 설명이 나오는 공간입니다. 위치에 대한 설명이 나오는 공간입니다. 위치에 대한 설명이 나오는 공간입니다. 위치에 대한 설명이 나오는 공간입니다. 위치에 대한 설명이 나오는 공간입니다.

      위치에 대한 설명이 나오는 공간입니다. 위치에 대한 설명이 나오는 공간입니다. 위치에 대한 설명이 나오는 공간입니다. 위치에 대한 설명이 나오는 공간입니다. 위치에 대한 설명이 나오는 공간입니다.
    </LocationDesc>
    </Container>
  )
}
