import React from 'react'
import styled from 'styled-components'
import KakaoLogo from '../../../assets/GyuminImg/Vector-1.png'
import GoogleLogo from '../../../assets/GyuminImg/Group.png'
import FaceBookLogo from '../../../assets/GyuminImg/Vector.png'


const Container = styled.div`
    margin: 0 auto;
    width: 390px;
    height: 850px;
    background-color: #CDCDCD;
`

const TopSection = styled.section`
    height: 500px;
    background-color: #CDCDCD;
`

const BottomSection = styled.section`
    height: 362px;
    background-color: #FFFFFF;
    border-radius: 20px;
`

const BtnList = styled.div`
    border-radius: 20px;
    padding: 50px 34px 125px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FFFFFF;
`

let Logoimg1 = styled.img.attrs({
    src: `${KakaoLogo}`,
})`
    float:left;
    margin-left:17px;
`

let Logoimg2 = styled.img.attrs({
    src: `${GoogleLogo}`,
})`
    float:left;
    margin-left:17px;
`



let Logoimg3 = styled.img.attrs({
    src: `${FaceBookLogo}`,
})`
    float:left;
    margin-left:17px;
`






let KakaoBtn = styled.button`
    width: 322px;
    height: 44px;
    margin-bottom: 10px;
    border: 1px solid #F2C94C;
    border-radius: 44px;
    background: white;
    font-size: 14px;
    line-height: 18px;
    color: #767676;
    cursor: pointer;
    &:hover{
        background-color: #F2C94C;
        color: #FFFFFF;
    }
`

let GoogleBtn = styled.button`
    width: 322px;
    height: 44px;
    margin-bottom: 10px;
    border: 1px solid #767676;
    border-radius: 44px;
    background: white;
    font-size: 14px;
    line-height: 18px;
    color: #767676;
    cursor: pointer;
    &:hover{
        background-color: #767676;
        color: #FFFFFF;
    }
`


let FacebookBtn = styled.button`
    width: 322px;
    height: 44px;
    margin-bottom: 20px;
    border: 1px solid #2D9CDB;
    border-radius: 44px;
    background: white;
    font-size: 14px;
    line-height: 18px;
    color: #767676;
    cursor: pointer;
    &:hover{
        background-color: #2D9CDB;
        color: #FFFFFF;
    }
`

let LoginSignList = styled.div`
    display: flex;
    flex-direction: row;
`

let LoginSign = styled.a`
    color: #767676;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    padding: 10px;
    cursor: pointer;
`


export default function Login() {
  return (
    <Container>
    <TopSection/>
    <BottomSection>
        <BtnList>
            <KakaoBtn><Logoimg1/>카카오톡 계정으로 로그인</KakaoBtn>
            <GoogleBtn><Logoimg2/>구글 계정으로 로그인</GoogleBtn>
            <FacebookBtn><Logoimg3/>페이스북 계정으로 로그인</FacebookBtn>
            
            <LoginSignList>
                <LoginSign>이메일로 로그인 </LoginSign>
                <LoginSign> | </LoginSign>
                <LoginSign>회원가입</LoginSign>
            </LoginSignList>
            
        </BtnList>
    </BottomSection>
    </Container>
    )
}
