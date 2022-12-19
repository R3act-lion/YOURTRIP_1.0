import React from 'react'
import styled from 'styled-components'

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
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    color: #000000;
    text-align: center;
`

const LoginTitle = styled.p`
    color:#767676;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
`

const EmailInput = styled.input`
    border-top:none;
    border-left:none;
    border-right:none;
    border-bottom: 1px solid #DBDBDB;
    &::placeholder{
      color: #DBDBDB;
    }
    
`

const PassWordTitle = styled.p`
    color:#767676;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
`

const PasswordInput = styled.input`
    border-top:none;
    border-left:none;
    border-right:none;
    border-bottom: 1px solid #DBDBDB;
    &::placeholder{
      color: #DBDBDB;
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


export default function Signup() {
  return (
    <>
    <Container>
        <HeaderTitle>이메일로 회원가입</HeaderTitle>
        <LoginTitle id="email" type="email">이메일</LoginTitle>
        <EmailInput placeholder='이메일 주소를 입력해주세요' />
        <PassWordTitle id="password" type="password">비밀번호</PassWordTitle>
        <PasswordInput placeholder='비밀번호를 설정해주세요'/>
        <ResultBtn type='submit'>다음</ResultBtn>
    </Container>
    </>
  )
}
