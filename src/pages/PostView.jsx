import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  margin: 0.5rem 0.8rem;
`;

const Title = styled.h1`
  width: 100%;
`;

const PostInfo = styled.p`
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: -0.5px;
  text-align: left;
  color: #9e9e9e;
`;

const UserName = styled.p`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.5px;
  text-align: left;
`;

const UserImg = styled.div`
  background: url('/mock/profile.png');
  background-size: cover;
  border-radius: 100%;
  margin-right: 0.3rem;
  width: 40px;
  height: 40px;
`;

const UserContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const UserBox = styled.div`
  display: flex;
`;

const UserBtn = styled.button`
  border: none;
  background: none;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.5px;
  text-align: left;
`;

const ContentBox = styled.div`
  margin: 0.5rem 0.8rem;
`;

const LikeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LikeBtn = styled.div`
  background: url('/icons/likeButton.png');
  background-size: cover;
  width: 50px;
  height: 50px;
`;

const LikeBox = styled.div`
  display: flex;
`;

const LikeText = styled.p`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.5px;
  margin-right: 0.2rem;
`;

const LikeCnt = styled.p`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.5px;
  color: #0085ff;
  margin-left: 0.2rem;
`;

const CommentContainer = styled.div`
  border-top: 2px solid #eeeeee;
  margin: 0.5rem 0.8rem;
`;

const CommentBox = styled.div`
  display: flex;
  align-items: center;
`;

const Comment = styled.p`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  margin-right: 0.3rem;
`;

const CommentCnt = styled.p`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
  color: #bdbdbd;
`;

const UserComment = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const CommentImg = styled.div`
  background: url('/mock/commentUser.png');
  background-size: cover;
  width: 32px;
  height: 32px;
`;

const CommentName = styled.p`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.5px;
  text-align: left;
  margin: 0;
`;

const CommentContent = styled.p`
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: -0.5px;
  text-align: left;
  margin: 0.1rem;
`;

const UserInfoBox = styled.div`
  margin-left: 0.4rem;
`;

const DeleteBtn = styled.div`
  background: url('/icons/deleteBtn.png');
  background-size: cover;
  width: 24px;
  height: 24px;
`;

const MobileTitle = styled(Title)`
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export default function PostView() {
  return (
    <Container>
      <TitleContainer>
        <MobileTitle>광화문 우크라이나 시위</MobileTitle>
        <div>
          <PostInfo>3시간전 조회수 732,910회</PostInfo>
        </div>
        <UserContainer>
          <UserBox>
            <UserImg></UserImg>
            <UserName>나라사랑</UserName>
          </UserBox>
          <UserBtn>작성글 더보기 ></UserBtn>
        </UserContainer>
      </TitleContainer>

      <img src="/mock/post.png" alt="" />
      <ContentBox>
        <p>
          이날 일찍가야되는데 엄청 늦게생겼네요.. <br /> 늦어도 봐줬으면
          좋겠다..ㅠㅠㅠ
        </p>
        <LikeContainer>
          <LikeBtn></LikeBtn>
          <LikeBox>
            <LikeText>좋아요</LikeText>
            <LikeCnt>7,211개</LikeCnt>
          </LikeBox>
        </LikeContainer>
      </ContentBox>
      <CommentContainer>
        <CommentBox>
          <Comment>댓글</Comment>
          <CommentCnt>4,413개</CommentCnt>
        </CommentBox>
        <div>
          <UserComment>
            <UserInfo>
              <CommentImg></CommentImg>
              <UserInfoBox>
                <CommentName>팩트폭행</CommentName>
                <CommentContent>이럴수가.. 출근길인데ㅠㅠ</CommentContent>
              </UserInfoBox>
            </UserInfo>
            <DeleteBtn></DeleteBtn>
          </UserComment>
        </div>
      </CommentContainer>
    </Container>
  );
}
