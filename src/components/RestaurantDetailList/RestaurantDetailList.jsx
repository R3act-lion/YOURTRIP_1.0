import React from 'react'
import { PlaceDetailCont,PlaceDetailImg,PlaceDetailPara } from '../../components/PlaceDetailList/PlaceDetailList'
import img from '../../assets/yeeun_image/todayImg1.png'

export default function RestaurantDetailList() {
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
