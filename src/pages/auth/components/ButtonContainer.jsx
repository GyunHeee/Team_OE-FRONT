import styled from 'styled-components';

const ButtonContainerComponent = styled.div`
  display: flex;
  gap: 16px;
`;

const NextButtonComponent = styled.button`
  width: 100%;
  height: 56px;
  font-weight: 600;
  font-size: 16px;
  background-color: #0085ff;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  &:disabled {
    cursor: default;
    opacity: 0.4;
  }
`;

const PrevButtonComponent = styled.button`
  width: 100%;
  height: 56px;
  font-weight: 600;
  font-size: 16px;
  background-color: #eeeeee;
  color: #bdbdbd;
  border-radius: 10px;
  cursor: pointer;
`;

export default function ButtonContainer({ prev, disable }) {
  return (
    <ButtonContainerComponent>
      {prev && <PrevButtonComponent type="button">이전</PrevButtonComponent>}
      <NextButtonComponent disabled={disable} type="button">
        다음
      </NextButtonComponent>
    </ButtonContainerComponent>
  );
}
