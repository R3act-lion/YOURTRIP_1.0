import img from "../../assets/daeun-icon/default-profile.svg"
import styled from "styled-components"
import Button from "../../modules/Button/Button"

const user = [
  {
    name: "애월읍 한라봉 최고 맛집",
    desc: "정성을 다해 농사짓는 한라봉",
    isFollow : true
  },
  {
    name: "감귤의 품격 - 애월읍",
    desc: "제주 노지귤, 하우스 한라봉 판매합니다.",
    isFollow : true
  },
  {
    name: "한라봉의 신",
    desc: "30년 노하우로 정성스럽게 농사지은 노지...",
    isFollow : false
  },
  {
    name: "나 감귤 좋아하네",
    desc: "감귤농장 컬렉터 i love mandarin",
    isFollow : false
  },
  {
    name: "제주 키위, 한라봉 판매",
    desc: "",
    isFollow : true
  },
  {
    name: "나 감귤 좋아하네",
    desc: "감귤농장 컬렉터 i love mandarin",
    isFollow : false
  },
  {
    name: "한라봉의 신",
    desc: "30년 노하우로 정성스럽게 농사지은 노지...",
    isFollow : true
  },
]

const ListWrapper = styled.section`
  width: 390px;
  padding: 96px 16px;
  background-color: #fff;
  height: 100vh;
  position: fixed;
  overflow: hidden;
`

const ProfileImg = styled.img`
  width: 50px;
`

const FollowUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const FollowLi = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`

const FollowDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex-grow: 1;
`

const UserName = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: #000;
`

const UserIntro = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: #767676;
`

const FollowBtn = styled(Button)`
  float: right;
`

export default function FollowList() {
  return (
    <ListWrapper>
      <FollowUl>
        {user.map((follower, index) => {
          return(
          <FollowLi key={index}>
              <ProfileImg src={img} alt="" />
              <FollowDesc>
                <UserName>{follower.name}</UserName>
                <UserIntro>{follower.desc}</UserIntro>
              </FollowDesc>
              {follower.isFollow ? 
                <FollowBtn
                  text="팔로우"
                  color="#fff"
                  backgroundColor = "#3C70BC"
                  width="56px"
                  height="28px"
                  fontSize="12px"
                />
                :
                <FollowBtn
                  text="취소"
                  color="#767676"
                  backgroundColor = "#fff"
                  width="56px"
                  height="28px"
                  fontSize="12px"
                  className="btnChecked"
                />
            }
            </FollowLi>
          )
        }) }
      </FollowUl>
    </ListWrapper>
  )
}
