import styled from "styled-components";
import ProfileBookmark from "../ProfileBookmark/ProfileBookmark";


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
export default function ProfileBookmarkList(props) {
const post = false;
  return (
    <>
      {props.you ? 
        <ProfileBookmark />
        :
        post ? 
          <ProfileBookmark />
          : <Post>
            <NoPostGuide>아직 즐겨찾기한 장소가 없습니다.</NoPostGuide>
          </Post>
    }
    </>
  )
}
