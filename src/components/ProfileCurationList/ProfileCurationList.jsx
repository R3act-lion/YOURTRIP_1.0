import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../modules/Button/Button";
import ProfileCuration from "../ProfileCuration/ProfileCuration";

const Post = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 135px;
`

const NoPostGuide = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: #858585;
`

export default function ProfileCurationList(props) {
  const post = false;
  return (
    <>
      {props.you ? 
        <ProfileCuration />
        :
        post ? 
          <ul>내가 만든 큐레이션 나열</ul>
          :
          <Post>
            <NoPostGuide>당신만의 큐레이션을 만들어보세요.</NoPostGuide>
            <Link to="/profile/addcuration">
              <Button
                text="만들기"
                margin="15px 0"
                color = "#FFF" 
                backgroundColor = "#3C70BC"
                width="124px"
                height="44px"
                fontSize="16px"
              />
            </Link>
          </Post>
     } 
    </>
  )
}
