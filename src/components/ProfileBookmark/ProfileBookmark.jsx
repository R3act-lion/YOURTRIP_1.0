import React from 'react'
import styled from 'styled-components'
import bgImg from '../../assets/daeun-icon/heartOffImg.svg'
import locationImg from '../../assets/daeun-icon/locationIcon.svg'

const list = [
  {
    "addr1": "서울 송파구 올림픽로 300 2층",
    "title": "가가상점",
    "cat1": "상점",
    "img" : "https://cdn.pixabay.com/photo/2021/12/08/05/13/gyeongbok-palace-6854763_1280.jpg"
  },
  {
    "addr1": "충청남도 공주시 당간지주길 10",
    "title": "가경목장",
    "cat1": "관광지",
    "img" : "https://cdn.pixabay.com/photo/2022/01/13/07/06/house-6934544__340.jpg"    
  },
  {
    "addr1": "경상북도 안동시 풍천면 하회남촌길 69-5",
    "title": "가경식당",
    "cat1": "식당",
    "img" : "https://cdn.pixabay.com/photo/2022/12/05/20/37/ferris-wheel-7637669__340.jpg"
  }
]

const Container= styled.section`
    padding: 20px 0px 19px 22px; 
`

const ContainerHeader= styled.h2`
    width: 100%;
    margin-bottom: 5px;
    font-size: 20px;
    font-weight: 500;
    position: relative;
    top: 15px;
`

const ContainerLocation= styled.span`      
    font-size: 12px;
    vertical-align: top;
    position: relative;
    top: 15px;
`

const ContainerLocationIcon= styled.img`
    width: 10px;
    height: 14px;
    position: relative;
    margin-right: 5px;
    top: 14px;
`


const ContainerHeartBtn= styled.button`
    width: 36px;
    height: 36px;
    background-color: white;
    float: right;
    position : relative;
    bottom: 10px;
    right: 35px;
    border-radius: 50%;
    border: none;
    background-image: url(${bgImg});
    background-repeat: no-repeat;
    background-position: center;
`

const PlaceDetailImg= styled.img`
    flex-shrink: 0;
    object-fit: cover;
    width: 212px;
    height: 280px; 
    margin-top: 13px;
    margin-bottom: 30px;
    border-radius: 5px;
`
const PlaceDetailCont= styled.section`
    width: 100%;
    display: flex;
    overflow-x: scroll;
    gap: 13px;
    // 스크롤 숨기기
    -ms-overflow-style: none; 
    scrollbar-width: none; 
    ::-webkit-scrollbar{
      display: none;
    }
`


export default function ProfileBookmark() {
  let startX, scrollLeft
  let isDown = false;

  function handleMouseDown(e) {
    isDown = true;
    startX = e.pageX - e.target.parentElement.offsetLeft;
    scrollLeft = e.target.parentElement.scrollLeft;
  }

  function handleMouseLeave(e) {
    isDown = false;
  }

  function handleMouseUp(e) {
    isDown = false;
  }

  function handleMouseMove(e) {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - e.target.parentElement.offsetLeft;
    e.target.parentElement.scrollLeft = scrollLeft - (x - startX);
  }

  return (
    <Container>
      <ul>
      {list.map((item, index) => {
        return (
          <li key={index}>
            <ContainerHeader>{item.title}</ContainerHeader>
            <ContainerLocationIcon src={locationImg} />
            <ContainerLocation>{item.addr1.split(" ")[0]}</ContainerLocation>
            <ContainerLocation> | {item.addr1.split(" ")[1]}</ContainerLocation>
            <ContainerLocation>∙{item.cat1}</ContainerLocation>
            <ContainerHeartBtn />
            <PlaceDetailCont onMouseLeave={handleMouseLeave} onMouseUp={handleMouseUp} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove}>
              {Array.from(Array(8), (x, i) => <PlaceDetailImg key={i} src={item.img} />)}
              {/* 후에 데이터에서 순회하는 걸로 변경 */}
            </PlaceDetailCont>
          </li>
        )
      }
        )}
        </ul>
    </Container>
  )
}
