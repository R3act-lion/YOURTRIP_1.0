import { Link } from "react-router-dom"
import styled from "styled-components"
import addBtn from "../../assets/daeun-icon/btn-add.svg"

const ContWrapper = styled.section`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 0 34px;
`

const FormLabel = styled.label`
  color: #767676;
  font-weight: 500;
  font-size: 16px;  
  margin-bottom: 15px;
  :nth-child(1){
    margin-top: 102px;
  }
`

const FormInput = styled.input`
  font-size: 14px;
  padding-bottom: 8px;
  border: none;
  border-bottom: 1px solid #DBDBDB;
  margin-bottom: 30px;
  ::placeholder{
    color: #DBDBDB;
  }
  :focus{
    outline: none;
    border-bottom: 1px solid #000;
  }
`

const ListDiv = styled.div`
  background: #FBFBFB;
  border: 0.5px solid #DBDBDB;
  border-radius: 10px;
  position: relative;
  height: 136px;
`

const AddBtn = styled(Link)`
  width: 32px;
  height: 32px;
  position: absolute;
  bottom: 10px;
  right: 10px;
`

const BtnImg = styled.img`
  width: 32px;
`


export default function AddCuration() {
  return (
    <ContWrapper>
      <FormLabel htmlFor="titInput">큐레이션 제목</FormLabel>
      <FormInput type="text" id="titInput" placeholder="큐레이션 이름을 적어주세요." />
      
      <FormLabel htmlFor="descInput">소개</FormLabel>
      <FormInput type="text" id="descInput" placeholder="큐레이션에 대해 간단한 소개를 적어주세요. " />      
      
      <FormLabel htmlFor="">선택한 여행지</FormLabel>
      <ListDiv>
        <AddBtn to="/profile/addcuration/searchplace"><BtnImg src={addBtn} alt="여행지 리스트 추가 버츤" /></AddBtn>
      </ListDiv>
    </ContWrapper>
  )
}
