import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  background: url('/mock/hotBanner.png');
  background-size: cover;
  align-items: center;
`;

const HotBanner = styled.p`
  padding: 8px;
  border-radius: 10px;
  gap: 4px;
  background-color: #ffffff;
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 600;
  color: #ff0000;
  margin-right: 0.3rem;
`;

const TitleBanner = styled.p`
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: -0.5px;
  text-align: left;
  color: #ffffff;
  margin-left: 0.3rem;
`;

const FilterBox = styled.div`
  margin: 1rem;
`;

const UncheckedButton = styled.button`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.5px;
  text-align: left;
  padding: 0.5rem 0.8rem;
  &.checked {
    color: #0085ff;
    border-bottom: 2px solid #0085ff;
  }
`;

const TimeSortBox = styled.div`
  margin: 0 0.7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UnRecommendedButton = styled.button`
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: -0.5px;
  text-align: center;
  padding: 0.6rem 0.7rem;
  background-color: #eeeeee;
  margin: 0.3rem;
  border-radius: 0.5rem;
  &.recommended {
    background: #0085ff;
    color: white;
  }
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: -0.5px;
  text-align: left;
  padding: 0.5rem 0.8rem;
  border: 1px solid #eeeeee;
  border-radius: 10px 10px 0 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 80px;
`;

const DropdownContent = styled.ul`
  position: absolute;
  background-color: #fff;
  border: 1px solid #eeeeee;
  border-top: none;
  border-radius: 0 0 10px 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  z-index: 1;
`;
const DropdownItem = styled.li`
  padding: 0.5rem 0.8rem;
  cursor: pointer;

  font-family: Pretendard;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: -0.5px;
  text-align: left;
  padding: 0.5rem 0.8rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 80px;

  &:hover {
    background-color: #f9f9f9;
  }
`;

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

const PostListView = () => {
  const [isHot, setIsHot] = useState(false);
  const [isRecommend, setIsRecommend] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const categories = ['전체', '자연재해', '시위', '축제'];
  const [isOpen, setIsOpen] = useState(false);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setIsOpen(false);
  };

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <BannerContainer>
        <HotBanner>🔥 HOT</HotBanner>
        <TitleBanner>광화문 우크라이나 시위</TitleBanner>
      </BannerContainer>
      <FilterBox>
        <UncheckedButton
          className={!isHot ? 'checked' : ''}
          onClick={() => setIsHot(false)}
        >
          전체
        </UncheckedButton>
        <UncheckedButton
          className={isHot ? 'checked' : ''}
          onClick={() => setIsHot(true)}
        >
          HOT
        </UncheckedButton>
      </FilterBox>
      <TimeSortBox>
        <div>
          <UnRecommendedButton
            className={isRecommend ? 'recommended' : ''}
            onClick={() => setIsRecommend(true)}
          >
            추천순
          </UnRecommendedButton>
          <UnRecommendedButton
            className={!isRecommend ? 'recommended' : ''}
            onClick={() => setIsRecommend(false)}
          >
            최신순
          </UnRecommendedButton>
        </div>
        <DropdownContainer>
          <DropdownButton onClick={handleDropdownToggle}>
            {selectedCategory} ⌃
          </DropdownButton>
          <DropdownContent isOpen={isOpen}>
            {categories.map((category) => (
              <DropdownItem
                key={category}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </DropdownItem>
            ))}
          </DropdownContent>
        </DropdownContainer>
      </TimeSortBox>
      <PostContainer>
        <div>
          <PostTitle>광화문 우크라이나 시위</PostTitle>
          <PostInfo>3시간전 조회수 732910회</PostInfo>
          <PostInfoContainer>
            <LikeContainer>
              <PostLike></PostLike>
              <LikeCnt>7,221개</LikeCnt>
            </LikeContainer>
            <CommentContainer>
              <CommentIcon></CommentIcon>
              <CommentCnt>4,413개</CommentCnt>
            </CommentContainer>
          </PostInfoContainer>
        </div>
        <PostImg></PostImg>
      </PostContainer>
    </Container>
  );
};

export default PostListView;
