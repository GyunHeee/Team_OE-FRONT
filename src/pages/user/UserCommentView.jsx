import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;

const PostBox = styled.div`
  display: flex;
  align-items: center;
  margin: 0.6rem;
`;

const ImgBox = styled.img`
  width: 60px;
  height: 60px;

  border-radius: 10px;
`;

const CommentBox = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 0.7rem;
  align-items: center;
`;

const Title = styled.span`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.5px;
  text-align: left;

  color: #0085ff;
  margin-bottom: 0.1rem;
`;

const CommnetText = styled.span`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.5px;
  text-align: left;
`;

export default function UserCommentView() {
  return (
    <Section>
      <PostBox>
        <ImgBox src="/mock/post.png" alt="게시글 mock사진" />
        <CommentBox>
          <Title>광화문 우크라이나 시위</Title>
          <CommnetText>아.. 집가기 힘들겠다</CommnetText>
        </CommentBox>
      </PostBox>
      <PostBox>
        <ImgBox src="/mock/post.png" alt="게시글 mock사진" />
        <CommentBox>
          <Title>광화문 우크라이나 시위</Title>
          <CommnetText>아.. 집가기 힘들겠다</CommnetText>
        </CommentBox>
      </PostBox>
    </Section>
  );
}
