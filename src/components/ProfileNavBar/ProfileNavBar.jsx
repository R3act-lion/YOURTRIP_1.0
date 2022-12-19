import styled from "styled-components"
import ProfileCurationList from "../ProfileCurationList/ProfileCurationList"
import ProfileBookmarkList from "../ProfileBookmarkList/ProfileBookmarkList"
import { useState } from "react"

const NavWrapper = styled.nav`
  display: flex;
`

const NavBar = styled.li`
list-style: none;
  border-bottom: 0.5px solid #DBDBDB;
  color: #858585;
  box-sizing: border-box;
  font-size: 14px;
  padding: 13px 71px;
  &.on {
    border-bottom: 2px solid #000000;
    color: #000000;
    font-weight: 700;
  }
`

export default function ProfileNavBar(props) {
  const [curation, setCuration] = useState(true)
  const [saved, setSaved] = useState(false)

  const handleCategory = () => {
    setCuration(!curation)
    setSaved(!saved)
  }

  return (
    <>
      <NavWrapper>
        <NavBar onClick={handleCategory} className={curation? "on" : false}>큐레이션</NavBar>
        <NavBar onClick={handleCategory} className={saved? "on" : false}>즐겨찾기</NavBar>
      </NavWrapper>
      {curation ?
        <ProfileCurationList you={props.you} />
        : <ProfileBookmarkList you={props.you} />
      }
    </>
  )
}
