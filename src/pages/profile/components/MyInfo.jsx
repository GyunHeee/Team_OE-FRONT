import styled from 'styled-components';

const ItemContainer = styled.div`
  margin-bottom: 8px;
  width: 358px;
  font-weight: 600;
  font-size: 14px;
  position: relative;
`;

const LabelContainer = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const RedSpan = styled.span`
  color: red;
`;

const GraySpan = styled.span`
  color: #bdbdbd;
`;

const Input = styled.input`
  width: 306px;
  height: 44px;
  border: 1px solid black;
  border-radius: 10px;
  padding-left: 16px;
  padding-right: 36px;
  font-weight: 600;
  font-size: 14px;
`;

const LocationInput = styled(Input)`
  padding-left: 32px;
  width: 290px;
`;

const CancelButton = styled.button`
  position: absolute;
  top: 35px;
  right: 0;
  cursor: pointer;
`;

const LocationButton = styled.button`
  position: absolute;
  top: 35px;
  left: 0;
  cursor: pointer;
`;

const BioInput = styled.textarea`
  width: 326px;
  height: 110px;
  border: 1px solid black;
  border-radius: 10px;
  font-weight: 600;
  font-size: 14px;
  padding: 16px;
  margin-bottom: 16px;
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 56px;
  background-color: #0085ff;
  color: white;
  margin-bottom: 32px;
  font-weight: 600;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
`;

export default function MyInfo() {
  return (
    <form>
      <ItemContainer>
        <LabelContainer>
          <label>
            <span>닉네임 </span> <RedSpan>(필수)</RedSpan>
          </label>
          <GraySpan>1~30자 이내</GraySpan>
        </LabelContainer>

        <Input
          type="text"
          required={true}
          placeholder="닉네임을 입력해주세요."
        />
        <CancelButton type="button">
          <img src="/icons/btn_cancel.svg" alt="취소" />
        </CancelButton>
      </ItemContainer>

      <ItemContainer>
        <LabelContainer>
          <label>
            <span>위치설정 </span>
          </label>
        </LabelContainer>

        <LocationButton type="button">
          <img src="/icons/icon_location_gray.svg" alt="장소" />
        </LocationButton>

        <LocationInput type="text" placeholder="위치설정" />
        <CancelButton>
          <img src="/icons/btn_cancel.svg" alt="취소" />
        </CancelButton>
      </ItemContainer>

      <ItemContainer>
        <LabelContainer>
          <label>
            <span>자기소개 </span>
          </label>
          <GraySpan>30자 이내</GraySpan>
        </LabelContainer>

        <BioInput placeholder="자기소개" />
      </ItemContainer>

      <SubmitButton type="submit">수정완료</SubmitButton>
    </form>
  );
}
