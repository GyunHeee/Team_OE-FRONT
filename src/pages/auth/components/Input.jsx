import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  position: relative;
`;

const InputComponent = styled.input`
  border: 0;
  border-bottom: 2px solid black;
  width: 340px;
  margin-top: 27px;
  margin-bottom: 60px;
  font-weight: 600;
  font-size: 16px;
  padding: 4px;
`;

const CancelButton = styled.button`
  position: absolute;
  top: 27px;
  right: 0;
  cursor: pointer;
`;

export default function Input() {
  return (
    <InputContainer>
      <InputComponent type="text" id="input" />
      <CancelButton type="button">
        <img src="/icons/btn_cancel.svg" alt="취소" />
      </CancelButton>
    </InputContainer>
  );
}
