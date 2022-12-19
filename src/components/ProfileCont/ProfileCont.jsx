import ProfileNavBar from "../ProfileNavBar/ProfileNavBar";
import styled from "styled-components";

const ProfileContent = styled.section`
  margin-top: 6px;
  background-color: #FFF;
  min-height: 100vh;
`

export default function ProfileCont(props) {
  return (
    <ProfileContent>
      <ProfileNavBar you={props.you}/>
    </ProfileContent>
  )
}

// 빼도 될듯