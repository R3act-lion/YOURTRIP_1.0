import React from 'react'
import styled from 'styled-components'
import img from '../../assets/yeeun_image/todayImg1.png'

const PlaceDetailCont= styled.section`
    width: 100%;
    display: flex;
    overflow: hidden;
    gap: 13px;
`

const PlaceDetailImg= styled.img`
    flex-shrink: 0;
    width: 212px;
    height: 280px; 
    margin-top: 13px;
    margin-bottom: 10px;
    border-radius: 5px;
`

const PlaceDetailPara= styled.p`
    margin-top: 0;
    margin-bottom: 20px;
    width: 304px;
    font-size: 14px;
`

export default function PlaceDetailList() {
  return (
    <>
        <PlaceDetailCont>
        {[1,2].map((a)=>{
            return(
                <PlaceDetailImg src={img} />
            )
        })}
        </PlaceDetailCont>
        <PlaceDetailPara>위치에 대한 설명이 나오는 공간입니다. 위치에 대한 설명이 나오는 공간입니다. 위치에 대한 설명이 나오는 공간입니다. 위치에 대한 설명이 나오는 공간입니다. 위치에 대한 설명이 나오는 공간입니다.</PlaceDetailPara>
    </>
  )
}
