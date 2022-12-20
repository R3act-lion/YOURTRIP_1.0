import React from 'react'
import styled from 'styled-components'
import ThemaPlace from '../../../../components/ThemaPlace/ThemaPlace'
import themaLocationMap from '../../../../assets/yeeun_image/themaLocationMap.png'

const Container= styled.section`
    width: 390px;
    margin: 0 auto;
    bakcground-color: #fff;
`

const ThemaMap= styled.img`
    height: 222px;
`

const ThemaWrap= styled.div`
    padding: 20px 64px 20px 22px;
`

const ThemaHeader= styled.h2`
    font-weight: 500;
    background-color: #fff;
    margin: 0;
    padding: 0;
`

const ThemaDesc= styled.p`
    font-size: 14px;
    font-weight: 400;
    background-color: #fff;
    margin: 0;
    padding: 0;
`
export default function Thema() {
  return (
    <Container>
        <ThemaMap src={themaLocationMap}/>
        <ThemaWrap>
            <ThemaHeader>
                다가오는 12월,서울에서 만나는 크리스마스
            </ThemaHeader>
            <ThemaDesc>
                위치에 대한 설명이 나오는 공간입니다. 위치에 대한 설명이 나오는 공간입니다. 위치에 대한 설명이 나오는 공간입니다. 위치에 대한 설명이 나오는 공간입니다. 위치에 대한 설명이 나오는 공간입니다.
            </ThemaDesc>
        </ThemaWrap>
        <ThemaPlace></ThemaPlace>
    </Container>
  )
}