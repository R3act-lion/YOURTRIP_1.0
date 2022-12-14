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
        <HeaderTitle>???????????????</HeaderTitle>
        <HeaderSubTitle>????????? ???????????? ????????? ??? ????????????.</HeaderSubTitle>
        <ImgSircle/>
        <AddImgSircle type={"file"} id={"input-file"}/>
        <ResultTitle>???????????????</ResultTitle>
        <NameInput placeholder='2~10??? ???????????? ?????????.'/>
        <ResultTitle>??????ID</ResultTitle>
        <IdInput placeholder='??????,??????,????????????(.),(_)??? ?????? ???????????????.' />
        <ResultTitle>??????</ResultTitle>
        <IntroInput placeholder='?????? ????????? ?????? ????????????'/>
        <ResultBtn>????????????</ResultBtn>
    </Container>
    </>
  )
}
