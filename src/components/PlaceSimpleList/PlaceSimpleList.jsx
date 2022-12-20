import React from 'react'
import styled from 'styled-components'
import Image from '../../assets/yeeun_image/todayImg1.png'
import bgImg from '../../assets/yeeun_image/heartOffImg.png'

const PlaceSimpleLists = styled.section`
    display: flex;
    gap: 25px;
    width: 100%;
    overflow: hidden;
`

const PlaceSimpleCont = styled.section`
    flex-basis: 190px;
    flex-shrink: 0;
`

const PlaceSimpleImg = styled.img`
    width: 190px;
    margin-top: 15px;
    margin-bottom: 10px;
    border-radius: 5px;
`

const PlaceSimpleLikeBtn = styled.button`
    width: 36px;
    height: 36px;
    background-color: white;
    border-radius: 50%;
    border: none;
    background-image: url(${bgImg});
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    bottom: 250px;
    left: 140px;
`

const PlaceSimpleIntro = styled.p`
    position: relative;
    bottom: 40px;
    margin : 0;
    font-size: 18px;
    font-weight: 500;
`
const PlaceSimpleLocation = styled.span`
    position: relative;
    bottom: 40px;
    color: #676767;      
    font-size: 12px;
`

export default function PlaceSimpleList() {
  return (
    <PlaceSimpleLists>
      {[1,2].map((a,i)=>{
           return(
          <PlaceSimpleCont>
            <PlaceSimpleImg src={Image} alt='덕수궁' />
            <PlaceSimpleLikeBtn></PlaceSimpleLikeBtn>
            <PlaceSimpleIntro>덕수궁</PlaceSimpleIntro>
            <PlaceSimpleLocation>서울|중구</PlaceSimpleLocation>
            <PlaceSimpleLocation> 궁궐</PlaceSimpleLocation>
          </PlaceSimpleCont>
        )
      
      })}
    </PlaceSimpleLists>
  )
}
