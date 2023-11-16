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
  padding: 4px 32px 4px 30px;
`;

const CancelButton = styled.button`
  position: absolute;
  top: 27px;
  right: 0;
  cursor: pointer;
`;

const LocationButton = styled.button`
  position: absolute;
  top: 27px;
  left: 0;
  cursor: pointer;
`;

export default function Input({ value, onChange, type, onClick, loc }) {
  return (
    <InputContainer>
      {loc && (
        <LocationButton>
          <img src="/icons/icon_location.svg" alt="장소" />
        </LocationButton>
      )}
      <InputComponent
        type={type}
        id="input"
        value={value}
        onChange={onChange}
      />
      <CancelButton type="button" onClick={onClick}>
        <img src="/icons/btn_cancel.svg" alt="취소" />
      </CancelButton>
    </InputContainer>
  );
}
