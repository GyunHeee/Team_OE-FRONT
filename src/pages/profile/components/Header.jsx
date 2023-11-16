import styled from 'styled-components';

const Title = styled.h1`
  font-weight: 600;
  font-size: 16px;
  margin-top: 20px;
  margin-bottom: 32px;
`;

const ImageContainer = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 100%;
  background-color: #eeeeee;
  position: relative;
  margin-bottom: 6px;
`;

const ProfileImage = styled.img`
  border-radius: 100%;
  overflow: hidden;
  width: 120px;
  height: 120px;
`;

const ButtonComtainer = styled.button`
  background-color: #0085ff;
  width: 28px;
  height: 28px;
  border-radius: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Picturebutton = styled.img`
  width: 16px;
  height: 16px;
`;

export default function Header() {
  return (
    <>
      <Title>프로필 수정</Title>

      <ImageContainer>
        <ProfileImage src="/mock/icon_profile.svg" alt="프로필 사진" />
        <ButtonComtainer type="button">
          <Picturebutton src="/icons/btn_picture.svg" alt="사진 업로드" />
        </ButtonComtainer>
      </ImageContainer>
    </>
  );
}
