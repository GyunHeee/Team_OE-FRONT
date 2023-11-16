import styled from 'styled-components';
import { useCallback } from 'react';

const ButtonComponent = styled.button`
  margin: 16px;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  width: 24px;
  height: 24px;
`;

export default function GoBackButton() {
  const onClick = useCallback(() => {
    window.history.back();
  }, []);

  return (
    <ButtonComponent onClick={onClick}>
      <img src="/icons/btn_go_back.svg" alt="뒤로가기" />
    </ButtonComponent>
  );
}
