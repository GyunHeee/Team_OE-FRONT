import React from 'react';
import styled from 'styled-components';

const PostContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
`;

const PostTitle = styled.p`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.5px;
  text-align: left;
  margin: 0;
`;

const PostInfo = styled.p`
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: -0.5px;
  text-align: left;
  margin: 0;
  color: #bdbdbd;
`;

const PostImg = styled.div`
  background: url('/mock/postImg.png');
  background-size: cover;
  width: 60px;
  height: 60px;
`;

const PostInfoContainer = styled.div`
  display: flex;
`;

const LikeContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PostLike = styled.div`
  background: url('/icons/like.png');
  background-size: cover;
  width: 24px;
  height: 24px;
  margin-right: 0.2rem;
`;

const LikeCnt = styled.p`
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: -0.5px;
  text-align: left;
  padding-right: 1rem;
  border-right: 2px solid #e0e0e0;
`;

const CommentContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1.3rem;
`;

const CommentIcon = styled.div`
  background: url('/icons/comment.png');
  background-size: cover;
  width: 21px;
  height: 19.38px;
  margin-right: 0.2rem;
`;

const CommentCnt = styled.p`
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: -0.5px;
  text-align: left;
`;

export default function Post({ title, time, postCnt, likeCnt, commentCnt }) {
  return (
    <PostContainer>
      <div>
        <PostTitle>{title}</PostTitle>
        <PostInfo>
          {time}시간전 조회수 {postCnt}회
        </PostInfo>
        <PostInfoContainer>
          <LikeContainer>
            <PostLike></PostLike>
            <LikeCnt>{likeCnt}개</LikeCnt>
          </LikeContainer>
          <CommentContainer>
            <CommentIcon></CommentIcon>
            <CommentCnt>{commentCnt}개</CommentCnt>
          </CommentContainer>
        </PostInfoContainer>
      </div>
      <PostImg></PostImg>
    </PostContainer>
  );
}
