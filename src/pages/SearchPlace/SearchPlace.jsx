import styled from "styled-components"
import searchBtn from "../../assets/daeun-icon/icon-search.svg"
import SearchPlaceList from "../../components/SearchPlaceList/SearchPlaceList"

const ContWrapper = styled.section`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-y: hidden;
  padding: 0 34px;
`

const FormLabel = styled.label`
  margin-top: 102px;
  font-weight: 500;
  font-size: 20px;
  line-height: 14px;
`

const InpWrapper = styled.div`
  position: relative;
`

const FormInput = styled.input`
  background: #F2F2F2;
  width: 90%;
  margin-top: 15px;
  border-radius: 30px;
  padding: 9px 13px;
  font-size: 14px;
  border: none;
  ::placeholder{
    color: #AAAAAA;
  }
  :focus{
    outline: none;
  }
`

const SearchBtn = styled.button`
  position: absolute;
  padding-left: 10px;
  cursor: pointer;
  top: 20px;
  right: 5px;
  border: none;
  background-color: inherit;
`



export default function SearchPlace() {
  return (
    <ContWrapper>
      <FormLabel htmlFor="searchPlace">추가할 여행지를 선택하세요.</FormLabel>
      <InpWrapper>
        <FormInput type="text" id="searchPlace" placeholder="여행지 검색" />
        <SearchBtn><img src={searchBtn} alt="" /></SearchBtn>      
      </InpWrapper> 
      <SearchPlaceList />
    </ContWrapper>
  )
}
