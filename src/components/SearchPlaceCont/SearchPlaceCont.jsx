import React, { useState } from 'react'
import styled from 'styled-components'
import nextBtn from '../../assets/daeun-icon/next-btn.svg'
import unchecked from '../../assets/daeun-icon/btn-unchecked.svg'
import checked from '../../assets/daeun-icon/btn-checked.svg'

let locationArr = [
  {
    id: 1,
    place: '서울'
  },
  {
    id: 2,
    place: '경기도'
  },
  {
    id: 3,
    place: '강원도'
  },
  {
    id: 4,
    place: '제주도'
  },
  {
    id: 5,
    place: '충청남도'
  },
  {
    id: 6,
    place: '충청북도'
  },
  {
    id: 7,
    place: '전라남도'
  }
];

const PlaceContainer = styled.section`
    display: flex;
    align-items: center;
    margin-bottom: 16px;
`

const PlaceImg = styled.img`
    flex-shrink: 0;
    width: 77px;
    height: 77px;
    border-radius: 10px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`

const PlaceDescCont = styled.section`
    width: 100%;
    padding: 15px 0px 15px 10px;
`

const PlaceHeader = styled.h2`
    margin: 0 11px 8px 0;
    font-size: 20px;
    display: inline-block;
    font-weight: 500;
`

const PlaceBtn = styled.img`
    width: 9px;
    height: 16px;
`

const PlaceCount = styled.p`
    margin: 0;
    color: #676767;
    font-size: 14px;
    font-weight: 400;
`

const CheckBtn = styled.button`
  border: none;
  width: 32px;
  background-color: inherit;
`

const CheckImg = styled.img`
  width: 32px;
`

export default function SearchPlaceCont() {
  const [pick, setPick] = useState(locationArr)
  const [select, setSelect] = useState([])


  return (
    <>
        {pick.map((item)=>{
        return(
            <PlaceContainer key={item.id}>
                <PlaceImg src={'https://cdn.pixabay.com/photo/2022/12/10/11/05/snow-7646952_1280.jpg'}/>
                <PlaceDescCont>
                    <PlaceHeader>{item.place}</PlaceHeader>
                    <PlaceBtn src={nextBtn}/>
                    <PlaceCount>200개의 여행지</PlaceCount>
            </PlaceDescCont>
            <CheckBtn>
              <CheckImg onClick={() => {
                !select.includes(item.id) 
                  ? setSelect((select) => [...select, item.id])
                  : setSelect(select.filter((button) => button !== item.id)); 
              }} src={select.includes(item.id)? checked : unchecked} alt=""/>
            </CheckBtn>
            </PlaceContainer>
        )
    })}
    </>
  )}
    