import styled from "styled-components"
import defaultProfileImg from "../../assets/daeun-icon/default-profile.svg"
import ImgBtn from "../../assets/daeun-icon/img-btn.svg"


const ContWrapper = styled.section`
  width: 390px;
  background-color: #fff;
  min-height: 100vh;
`

const ProfileInfo = styled.div`
  position: relative;
  text-align: center;
`
const ProfileImage = styled.img`
  margin-top: 102px;
  width: 110px;
`

const AddImgBtn = styled.img`
  position: absolute;
  right: 140px;
  bottom: 5px;
`

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 34px;
  margin-top: 30px;
`

const FormLabel = styled.label`
  font-size: 12px;
  color: #767676;
  margin-bottom: 10px;
  `

const FormInput = styled.input`
  padding: 8px;
  border: none;
  border-bottom: 1px solid #DBDBDB;
  margin-bottom: 15px;
  font-size: 14px;
  ::placeholder{
    color: #DBDBDB;
  }
  :focus{
    outline: none;
    border-bottom: 1px solid #000;
  }
`

export default function Edit() {
  return (
    <ContWrapper>
      <ProfileInfo>
        <ProfileImage src={defaultProfileImg} alt="" />
        <AddImgBtn src={ImgBtn} alt="" />
      </ProfileInfo>  
      <FormWrapper>
        <FormLabel htmlFor="userName">사용자 이름</FormLabel>
        <FormInput type="text" id="userName" placeholder="2~10자 이내여야 합니다."/>
        
        <FormLabel htmlFor="userName">계정 ID</FormLabel>
        <FormInput type="text" id="userName" placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."/>
        
        <FormLabel htmlFor="userName">소개</FormLabel>
          <FormInput type="text" id="userName" placeholder="자신과 판매할 상품에 대해 소개해 주세요!" />
      </FormWrapper>
    </ContWrapper>
  )
}
