import React from 'react'
import styled from 'styled-components'
import profileImg from '../../assets/yeeun_image/profileImg.png'
import moreIcon from '../../assets/yeeun_image/moreImg.png'
import uploadUser from '../../assets/yeeun_image/uploadUser.png'

const Container= styled.section`
  padding: 5px 19px; 
  
`

const CommentsWrap= styled.section`
  border-bottom: 1px solid #dbdbdb;
`

const CommentProflie= styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`

const CommentsDiv=styled.div`
  display: flex;
`

const CommentsImg= styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.25));

`

const CommentsName= styled.div`
  display: flex;
  flex-direction: column;
  padding: 7px 0 7px 13px;
`

const CommentsWriter= styled.span`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 4px;
`

const CommentsTime= styled.span`
  font-size: 10px;
  font-weight: 400;
  color: #767676;
`

const CommentsMoreBtn= styled.img`
  width: 20px;
  height: 20px;
  margin: 7px 0;
  
`

const CommentsComment= styled.p`
  margin: 10px 0 20px;
  font-size: 14px;
  font-weight: 400;
  color: #333333;
`

const CommentsUpload= styled.div`
  padding: 12px 20px 16px;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;

`

const CommentsUploadImg= styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`

const CommentsInput= styled.input`
  color: black;
  border: none;
`

const CommentsUploadBtn= styled.button`
  float: right;
  border: none;
  position: relative;
  top: 10px;
  background-color: #fff;
`

export default function DetailComments() {
  return (
    <Container>
      {['서귀포시 무슨 농장','감귤러버','귤은맛있어'].map((name)=>{
        return(
          <CommentsWrap>
            <CommentProflie>
              <CommentsDiv>
              <CommentsImg src={profileImg}/>     
              <CommentsName>
                <CommentsWriter>{name}</CommentsWriter>
                <CommentsTime>5분전</CommentsTime>
              </CommentsName>
              </CommentsDiv>
              <CommentsMoreBtn src={moreIcon}/>
              
            </CommentProflie>
            <CommentsComment>
              해피초원목장 좋아요~ 해피초원목장 좋아요~ 해피초원목장 좋아요~ 해피초원목장 좋아요~ 해피초원목장 좋아요~ 해피초원목장 좋아요~ 해피초원목장 좋아요~ 해피초원목장 좋아요~ 
            </CommentsComment>
          </CommentsWrap>
        )
      })}    
      <CommentsUpload>
        <CommentsUploadImg src={uploadUser}/>
        <CommentsInput required="댓글 입력하기"/>
        <CommentsUploadBtn>게시</CommentsUploadBtn>
      </CommentsUpload>
        
    </Container>
  )
}