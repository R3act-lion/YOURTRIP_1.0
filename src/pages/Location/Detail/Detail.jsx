import React from 'react'
import styled from 'styled-components'
import { useState } from 'react' 
import DetailHome from '../../../components/Detail/DetailHome'
import DetailAround from '../../../components/Detail/DetailAround'
import DetailComments from '../../../components/Detail/DetailComments'
import DetailMap from '../../../components/Detail/DetailMap'
import beforeImg from '../../../assets/yeeun_image/beforeImg.png'
import moreImg from '../../../assets/yeeun_image/moreImg.png'
import detailImg from '../../../assets/yeeun_image/detailImg.png'

const Container= styled.section`
  width: 390px;
  margin: 0 auto;
`

const DetailHeaderCont= styled.section`
  height: 48px;
  padding: 13px 23px 12px 20px;
`

const DetailBeforeBtn= styled.img`
  margin-right: 9px;
  position: relative;
  top: 2px;
`

const DetailHeader= styled.h2`
  display: inline-block;
  font-size: 18px;
  font-weight: 500;
  line-height: 48px;
`

const DetailMoreBtn= styled.img`
  float: right;
  position: relative;
  top: 12px;
`

const DetailImg= styled.img`
  height: 478px;
`

const DetailTabCont= styled.nav`
  height: 44px;
  display: flex;
  box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.1)
`

const DetailTab= styled.button`
  color: #858585;
  border: none;
  font-size: 14px;
  background-color: #fff;
  flex-grow: 1;
  cursor: pointer;
`

export default function Detail() {
  let [tab, setTab]= useState(0);
  // let [tabFontColor, setTabFontColor]= useState('#858585');

  return (
    <div>
      <Container>
      <DetailHeaderCont>
        <DetailBeforeBtn src={beforeImg} />
        <DetailHeader>해피초원목장</DetailHeader>
        <DetailMoreBtn src={moreImg} />
      </DetailHeaderCont>
      <DetailImg src={detailImg}/>
      
      <DetailTabCont>
        <DetailTab onClick={()=>{
          setTab(0);        
        }}>홈</DetailTab>
        <DetailTab onClick={()=>{
          setTab(1)
        }}>주변</DetailTab>
        <DetailTab onClick={()=>{
          setTab(2)
        }}>댓글</DetailTab>
        <DetailTab onClick={()=>{
          setTab(3)
        }}>지도</DetailTab>
      </DetailTabCont>

      {
      [<DetailHome />, <DetailAround />, <DetailComments />, <DetailMap />][tab]
      }
      </Container>
    </div>
  )
}