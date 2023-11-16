import styled from 'styled-components';

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 16px;
  gap: 8px;
  width: 341px;
  height: 44px;
  border-radius: 10px;
  border: 1px solid black;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 8px;
`;

export default function MyActivity() {
  return (
    <>
      {/* 내 활동: 게시물 + 댓글 + 좋아요 */}
      <ItemContainer>
        <img src="/icons/profile_post.svg" alt="게시물" />
        <div>내가 쓴 게시물</div>
      </ItemContainer>
      <ItemContainer>
        <img src="/icons/profile_comment.svg" alt="댓글" />
        <div>내가 쓴 댓글</div>
      </ItemContainer>
      <ItemContainer>
        <img src="/icons/profile_like.svg" alt="좋아요" />
        <div>내가 좋아요 표시한 글</div>
      </ItemContainer>
    </>
  );
}
