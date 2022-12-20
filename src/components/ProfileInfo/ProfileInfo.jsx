import { useState } from "react";
import defaultProfileImg from "../../assets/daeun-icon/default-profile.svg"
import styled from "styled-components";
import YourProfileBtn from "../Button/YourProfileBtn/YourProfileBtn";
import MyProfileBtn from "../Button/MyProfileBtn/MyProfileBtn";
import {Link} from "react-router-dom";

const ProfileWrapper = styled.section`
  background-color: #fff;
  text-align: center;
  padding-top: 102px;
`

const FollowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 37px;
`

const FollowInfo = styled(Link)`
  display: flex;
  flex-direction: column;
`

const ProfileImage = styled.img`
  width: 110px;
`

const FollowCount = styled.strong`
  color: #000;
  font-size: 18px;
  font-weight: 700;
  &.following{
    color: #767676;
  }
`

const FollowSpan = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: #767676;
  margin-top: 6px;
`

const UserNameH1 = styled.h1`
  margin-top: 16px;
  font-weight: 700;
  font-size: 16px;
`

const UserIdH2 = styled.h2`
  margin-top: 6px;
  margin-bottom: 16px;
  font-weight: 400;
  font-size: 12px;
  color: #767676;
`

const UserDescSpan = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #767676;
`

export default function ProfileInfo(props) {
  const [followerCount, setFollowerCount] = useState(2950);
  const [followingCount, setFollowingCount] = useState(128);

  return (
    <>
    <ProfileWrapper>
      <FollowWrapper>
        <FollowInfo to="/follow">
          <FollowCount>{followerCount}</FollowCount>
            <FollowSpan>followers</FollowSpan>
        </FollowInfo>
          <ProfileImage src={defaultProfileImg} alt="" />
        <FollowInfo to="/follow">
          <FollowCount className="following">{followingCount}</FollowCount>
          <FollowSpan>followings</FollowSpan>
        </FollowInfo>
      </FollowWrapper>
      <UserNameH1>위니브의 감귤</UserNameH1>
      <UserIdH2>@ weniv_Mandarine</UserIdH2>
      <UserDescSpan>애월읍 감귤 전국 배송, 귤따기 체험, 감귤 농장</UserDescSpan>
      {props.you ? 
        <YourProfileBtn /> 
        : <MyProfileBtn />
      }
      </ProfileWrapper>
      </>
  )
}
