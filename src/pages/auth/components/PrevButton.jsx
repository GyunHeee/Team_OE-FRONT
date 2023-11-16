import styled from 'styled-components';

const PrevButtonComponent = styled.button`
  width: 100%;
  height: 56px;
  font-weight: 600;
  font-size: 16px;
  background-color: #eeeeee;
  color: #bdbdbd;
  border-radius: 10px;
`;

export default function PrevButton() {
  return <PrevButtonComponent type="button">이전</PrevButtonComponent>;
}
