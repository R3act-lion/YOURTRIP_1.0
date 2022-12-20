import React from 'react';
import styled from "styled-components";
import Image from '../../assets/yeeun_image/todayImg1.png';
import nextBtn from '../../assets/yeeun_image/nextBtn.png';
import { useNavigate } from 'react-router-dom';

export const TodayCont = styled.article`
  display: flex;
  flex-basis: 212px;
  gap: 8px;
  overflow: hidden;
`

export const TodayImg = styled.img`
  flex-shrink: 0;
  height: 280px; 
  margin-top: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
` 

export const TodayIntro = styled.span`
  margin : 0;
  font-size: 18px;
  font-weight: 500;
`

export const ContainerNextBtn = styled.img`
  width: 9px;
  height: 16px;  
  float: right;
  position: relative;
  bottom: 10px;
  right: 20px;
`

export default function TodayRecommend() { 
  const navigate= useNavigate();
  return (
    <>
      <TodayCont>
      {[1,2].map((a)=>{
           return(
            <TodayImg src={Image} alt='크리스마스 풍경' onClick={()=>{ 
                navigate('/today/thema')
            }}/>
          )
      })}
      </TodayCont>
      <TodayIntro>다가오는 12월,<br></br>서울에서 만나는 크리스마스</TodayIntro>  
      <ContainerNextBtn src={nextBtn}></ContainerNextBtn>  
    </>
  )}