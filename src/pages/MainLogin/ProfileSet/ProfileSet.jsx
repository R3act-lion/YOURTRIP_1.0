import React from 'react'
import styled from 'styled-components'
import Imgsircle from '../../../assets/GyuminImg/Profile.png'


const Container = styled.div`
    margin: 0 auto;
    width: 390px;
    height: 850px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`


const HeaderTitle = styled.h1`
    margin-top: 54px;
    margin-bottom: 12px;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    color: #000000;
    text-align: center;

    `

const HeaderSubTitle = styled.p`
    margin-bottom: 30px;
    color:#767676;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    `

const ImgSircle = styled.img.attrs({
    src:`${Imgsircle}`,
    })`
    width:110px;
    height:110px;
    margin: 0 auto;
    margin-bottom: 30px;
    position: relative;
`



const AddImgSircle = styled.input`
    display: none;
`

const ResultTitle = styled.p`
    margin-bottom: 16px;
    margin-left: 34px;
    color:#767676;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
`

const NameInput = styled.input`
    width: 322px;
    margin: 0 auto;
    border-top:none;
    border-left:none;
    border-right:none;
    border-bottom: 1px solid #DBDBDB;
    &::placeholder{
        color: #DBDBDB;
    }
`

const IdInput = styled.input`
    width: 322px;
    margin: 0 auto;
    margin-bottom: 16px;
    border-top:none;
    border-left:none;
    border-right:none;
    border-bottom: 1px solid #DBDBDB;
    &::placeholder{
        color: #DBDBDB;
        line-height: 14px;
    }
    
`

const IntroInput = styled.input`
    width: 322px;
    margin-bottom: 30px;
    margin: 0 auto;
    border-top:none;
    border-left:none;
    border-right:none;
    border-bottom: 1px solid #DBDBDB;
    &::placeholder{
        color: #DBDBDB;
        line-height: 14px;
    }
`

const ResultBtn = styled.button`
    width: 322px;
    height: 44px;
    margin: 30px 34px 20px 34px;
    border: 0px;
    background: #C9D9F0;
    border-radius: 44px;
    font-size: 14px;
    line-height: 18px;
    color: #FFFFFF;
    cursor: pointer;
    &:hover{
        background-color: #C9D9F0;
        color: #FFFFFF;}
`



export default function ProfileSet() {
  return (
    <>
    <Container>
        <HeaderTitle>프로필설정</HeaderTitle>
        <HeaderSubTitle>나중에 언제든지 변경할 수 있습니다.</HeaderSubTitle>
        <ImgSircle/>
        <AddImgSircle type={"file"} id={"input-file"}/>
        <ResultTitle>사용자이름</ResultTitle>
        <NameInput placeholder='2~10자 이내여야 합니다.'/>
        <ResultTitle>계정ID</ResultTitle>
        <IdInput placeholder='영문,숫자,특수문자(.),(_)만 사용 가능합니다.' />
        <ResultTitle>소개</ResultTitle>
        <IntroInput placeholder='나의 소개를 입력 해주세요'/>
        <ResultBtn>시작하기</ResultBtn>
    </Container>
    </>
  )
}
