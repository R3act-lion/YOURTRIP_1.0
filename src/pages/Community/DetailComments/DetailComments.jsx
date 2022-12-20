import React from 'react'
import styled from 'styled-components'
import Imgsircle from '../../../assets/GyuminImg/Profile.png'
import contactimg from '../../../assets/GyuminImg/contact1.png'
import heartimg from '../../../assets/GyuminImg/Heart.svg'
import commentimg from '../../../assets/GyuminImg/comment.svg'
import detailsbutton from '../../../assets/GyuminImg/triple.png'



const Container = styled.div`
    margin: 0 auto;
    width: 390px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    
`

const HeaderTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 0;
  
`

const ProfileImg = styled.img.attrs({
  src:`${Imgsircle}`,
})`
  width:36px;
  height:36px;
  margin: 35px 12px 0px 16px;
`
const ComContact = styled.section`
  margin-top: 25px;
  display: flex;
  flex-direction: column;  
`
const HeaderId = styled.p`
  
  margin-top: 4px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #767676;
`

const ContactText = styled.p`
width: 304px;
margin-top: 15px;
font-weight: 400;
font-size: 14px;
line-height: 18px;
`

const ContactImg = styled.img.attrs({
  src:`${contactimg}`
})`
  width: 304px;
  height: 228px;
  left: 0px;
  top: 138px;
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
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #767676;
  margin-bottom: 0;
`
const DetailsButton = styled.button`
  background-image: url(${detailsbutton});
  margin-top:50px;
  border: none;
  width:100%;
  height: 18px;
  cursor: pointer;
  background-color: #FFFFFF;
`

const BorderLine = styled.hr`
    width: 390px;
    margin-top: 24px;
`


const CommentBox = styled.div`
    text-align: center;
`

const InputComment = styled.input`
    width: 270px;
    border: 0px;
    
    &::placeholder{
        color: #C4C4C4;
    }
`

const ResultButton = styled.button`
    width: 56px;
    height: 18px;
    border: 0px;
    background-color: #FFFFFF;
    font-size: 14px;
    color: #C4C4C4;
    cursor: pointer;
`


export default function Detail() {
  return (
    <>
    <Container>
    <ProfileImg />
    <ComContact>
      <HeaderTitle>애월읍 위니브 감귤농장</HeaderTitle>
      <HeaderId>@ weniv_Mandarin</HeaderId>
      <ContactText>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi sint modi aspernatur quas, consequatur illum libero quisquam recusandae ducimus quae quo tempora, deleniti sed, voluptas aliquid fugiat dolore inventore aut.
      Soluta veritatis numquam modi consequatur! Dolorum laboriosam perspiciatis quo odit impedit tempora, quae repellat eum aspernatur rem quisquam. Pariatur enim voluptates repellat eligendi veritatis perspiciatis ratione vero, fugiat impedit assumenda!</ContactText>
      <ContactImg/>
      <ContactEtc>
        <HeartImg/>
        <AddText>58</AddText>
        <CommentImg/>
        <AddText>12</AddText>
      </ContactEtc>
      <DateText>2020년 10월 21일</DateText>
    </ComContact>
    <DetailsButton/>
    </Container>

    <BorderLine/>

    <Container>
    <ProfileImg />
    <ComContact>
      <HeaderTitle>서귀포시 무슨 농장</HeaderTitle>
      <HeaderId>5분전</HeaderId>
      <ContactText>안녕하세요</ContactText>
    </ComContact>
    </Container>
    <Container>
    <ProfileImg />
    <ComContact>
      <HeaderTitle>서귀포시 무슨 농장</HeaderTitle>
      <HeaderId>5분전</HeaderId>
      <ContactText>안녕하세요</ContactText>
    </ComContact>
    </Container>

    <BorderLine/>
    <CommentBox>
    <ProfileImg />
    <InputComment placeholder='댓글 입력하기'/>
    <ResultButton>게시</ResultButton>
    </CommentBox>
    </>
  )
}