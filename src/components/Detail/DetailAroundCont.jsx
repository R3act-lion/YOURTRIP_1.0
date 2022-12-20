import React from 'react'
import styled from 'styled-components'
import aroundImg from '../../assets/yeeun_image/aroundImg.png'
import heartOffImg from '../../assets/yeeun_image/heartOffImg.png'

const Header=styled.h2`
    margin-bottom: 16px;
    font-size: 20px;
    font-weight: 500;
`

const Container= styled.section`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 16px;
    padding-bottom: 30px;
`
const PlaceCont= styled.section`
    width: 162px;
`
const PlaceImg= styled.img`
    width: 100%;
    height: 218px;
    border-radius: 5px;
`

const LikeBtn= styled.img`
    width: 30px;
    height: 30px;
    position: relative;
    bottom: 215px;
    left: 125px;
`

const ImgCaption= styled.h3`
    margin: 10px 0 5px;
    font-size: 18px;
`

const ImgLocation= styled.span`
    font-size: 12px;
    color: #676767;
`

export default function DetailAroundCont() {
  return (
    <>
    {['볼거리', '맛집', '카페'].map((a)=>{
        return(
            <>
            <Header>{a}</Header>
            <Container>
            <PlaceCont>
                <PlaceImg src={aroundImg}/>
                <LikeBtn src={heartOffImg}/>
                <ImgCaption>소양강스카이워크</ImgCaption>
                <ImgLocation>강원도 | </ImgLocation>
                <ImgLocation>춘천 </ImgLocation>
                <ImgLocation> 전망대</ImgLocation>
            </PlaceCont>

        <PlaceCont>
            <PlaceImg src={aroundImg}/>
            <LikeBtn src={heartOffImg}/>
            <ImgCaption>소양강스카이워크</ImgCaption>
            <ImgLocation>강원도 | </ImgLocation>
            <ImgLocation>춘천 </ImgLocation>
            <ImgLocation> 전망대</ImgLocation>
        </PlaceCont>
        <PlaceCont>
            <PlaceImg src={aroundImg}/>
            <LikeBtn src={heartOffImg}/>
            <ImgCaption>소양강스카이워크</ImgCaption>
            <ImgLocation>강원도 | </ImgLocation>
            <ImgLocation>춘천 </ImgLocation>
            <ImgLocation> 전망대</ImgLocation>
        </PlaceCont>
        <PlaceCont>
            <PlaceImg src={aroundImg}/>
            <LikeBtn src={heartOffImg}/>
            <ImgCaption>소양강스카이워크</ImgCaption>
            <ImgLocation>강원도 | </ImgLocation>
            <ImgLocation>춘천 </ImgLocation>
            <ImgLocation> 전망대</ImgLocation>
        </PlaceCont>
        </Container>
        </>
        )}
        
    )}</>
    )}
    

