import React from 'react'
import styled from 'styled-components'
import Imgsircle from '../../../assets/GyuminImg/Profile.png'
import arrowimg from '../../../assets/GyuminImg/icon-arrow-left.png'
import uploadbutton from '../../../assets/GyuminImg/upload-file.svg'


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
    
  `

const UproadButton = styled.button`
    width: 90px;
    height: 32px;
    border-radius: 32px;
    background: #C9D9F0;
    color: #FFFFFF;
    border: 0px;   
`

const Section = styled.section`
    margin-top: 20px;
    display: flex;
`

const ProfileImg = styled.img.attrs({
    src:`${Imgsircle}`,
  })`
    width:36px;
    height:36px;
    margin-right:13px;
  `

const ContentText = styled.textarea`
    width: 100%;
    border: 0px;
    margin-top: 8px;
`

const ImgInput = styled.button`
    background-image: url(${uploadbutton});
    background-repeat: no-repeat;
    border: 0;
    background-size: cover;
    width:50px;
    height:50px;
    position:fixed;
    right:39%;
    background-color: #FFFFFF;
    cursor: pointer;
`


export default function Search() {
  return (
    <>
    <Container>
        <Headers>
        <ArrowButton/>
        <UproadButton>업로드</UproadButton>
        </Headers>
    
    <hr/>
    <Section>
    <ProfileImg/>
    <ContentText placeholder='내용을 입력해 주세요' rows={30}/>
    </Section>
    <ImgInput/>
    </Container>
    
    </>
  )
}
