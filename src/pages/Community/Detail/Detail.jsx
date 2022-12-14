import React from 'react'
import styled from 'styled-components'
import Imgsircle from '../../../assets/GyuminImg/Profile.png'
import contactimg from '../../../assets/GyuminImg/contact1.png'
import heartimg from '../../../assets/GyuminImg/Heart.svg'
import commentimg from '../../../assets/GyuminImg/comment.svg'
import detailsbutton from '../../../assets/GyuminImg/triple.png'
import uploadbutton from '../../../assets/GyuminImg/button.png'


const Container = styled.div`
    margin: 0 auto;
    width: 390px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    
`

const HeaderTitle = styled.h1`
  margin-bottom: 0;
  
`

const ProfileImg = styled.img.attrs({
  src:`${Imgsircle}`,
})`
  width:36px;
  height:36px;
  margin: 47px 12px 0px 16px;
`
const ComContact = styled.section`
  margin-top: 25px;
  display: flex;
  flex-direction: column;  
`
const HeaderId = styled.p`
  margin-top: 2px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #767676;
`

const ContactText = styled.p`
width: 304px;
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

const UploadButton = styled.button`
  background-image:url(${uploadbutton});
  width:50px;
  height:50px;
  position:fixed;
  right:40%;
  border: none;
  background-color: #FFFFFF;
  cursor: pointer;
`



export default function Detail() {
  return (
    <>
    <Container>
    <ProfileImg />
    <ComContact>
      <HeaderTitle>????????? ????????? ????????????</HeaderTitle>
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
      <DateText>2020??? 10??? 21???</DateText>
    </ComContact>
    <DetailsButton/>
    </Container>
    <UploadButton/>
    </>
  )
}

