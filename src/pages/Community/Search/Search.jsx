import React from 'react'
import styled from 'styled-components'
import arrowimg from '../../../assets/GyuminImg/icon-arrow-left.png'
import contactimg from '../../../assets/GyuminImg/contact1.png'
import heartimg from '../../../assets/GyuminImg/Heart.svg'
import commentimg from '../../../assets/GyuminImg/comment.svg'



const Container = styled.div`
    margin: 0 auto;
    width: 390px;
    text-align: center;
    background-color: #FFFFFF;

`

const Headers = styled.div`
    display: flex;
    justify-content: space-between;
`

const ArrowButton = styled.img.attrs({
    src:`${arrowimg}`
  })`
    width: 22px;
    height: 22px;
    margin-top:5px;
    
  `

const SearchInput = styled.input`
    width: 345px;
    height: 32px;
    border: none;
    background: #F2F2F2;
    border-radius: 32px;
`

const ComContact = styled.div`
    margin-top: 25px;
    text-align: left;
`

const SearchTitle = styled.h1`
    display: inline;
    font-size: 16px;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color:#3C70BC;
`

const ContactText = styled.p`
display: inline;
font-weight: 500;
font-size: 16px;
line-height: 20px;
`

const ContactImg = styled.img.attrs({
  src:`${contactimg}`
})`
  width: 121px;
  height: 126px;
  left: 0px;
  top: 138px;
  margin-top:10px;
  border: 0.5px solid #DBDBDB;
  border-radius: 10px;
`

const ContactEtc = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
`

const HeartImg = styled.button`
  background-image: url(${heartimg});
  width: 18px;
  height:18px;
  cursor: pointer;
  background-color: #FFFFFF;
  border:none;
`

const CommentImg = styled.button`
  background-image: url(${commentimg});
  width:18px;
  height:18px; 
  cursor: pointer;
  background-color: #FFFFFF;
  border:none;
`

const AddText = styled.p`
  margin-left: 6px;
  margin-right: 16px;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #767676;
` 

const DateText = styled.p`
  text-align: left;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #767676;
  margin-bottom: 0;
`



export default function Search() {
  return (
    <>
    <Container>
        <Headers>
        <ArrowButton/>
        <SearchInput/>
        </Headers>
        <hr/>
        <ComContact>
        <SearchTitle>애월읍</SearchTitle>
        <ContactText> 유명한곳 추천해주세요유명한곳 추천해주세요유명한곳 추천해주세요유명한곳 추천해주세요유명한곳 추천해주세요</ContactText> 
      
      <ContactImg/>
      <ContactImg/>
      <ContactImg/>
      <ContactEtc>
        <HeartImg/>
        <AddText>58</AddText>
        <CommentImg/>
        <AddText>12</AddText>
      </ContactEtc>
      <DateText>2020년 10월 21일</DateText>
         </ComContact>
        <hr/>
        <ComContact>
        <SearchTitle>애월읍</SearchTitle>
        <ContactText> 유명한곳 추천해주세요유명한곳 추천해주세요유명한곳 추천해주세요유명한곳 추천해주세요유명한곳 추천해주세요</ContactText> 
    
      <ContactEtc>
        <HeartImg/>
        <AddText>58</AddText>
        <CommentImg/>
        <AddText>12</AddText>
      </ContactEtc>
      <DateText>2020년 10월 21일</DateText>
         </ComContact>

    </Container>
    
    </>
  )
}
