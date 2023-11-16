import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SkipButtonComponent = styled(Link)`
  font-weight: 600;
  font-size: 16px;
  color: #bdbdbd;
  text-decoration-line: underline;
  float: right;
  margin-top: 56px;
`;

export default function SkipButton() {
  return <SkipButtonComponent to="/">건너뛰기</SkipButtonComponent>;
}
