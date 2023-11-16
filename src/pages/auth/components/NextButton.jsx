import styled from 'styled-components';

const NextButtonComponent = styled.button`
  width: 100%;
  height: 56px;
  font-weight: 600;
  font-size: 16px;
  background-color: #0085ff;
  color: white;
  border-radius: 10px;
`;

export default function NextButton() {
  return <NextButtonComponent type="submit">다음</NextButtonComponent>;
}
