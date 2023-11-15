import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { kakaoAuthUrl } from '../../lib/handleOAuth';

const items = [
  {
    href: '/login/naver',
    label: '네이버',
    icon: 'icons/icon_naver.svg',
  },
  {
    href: kakaoAuthUrl,
    label: '카카오',
    icon: '/icons/icon_kakao.svg',
  },
  {
    href: '/login/google',
    label: '구글',
    icon: '/icons/icon_google.svg',
  },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginHeader = styled.h1`
  text-align: center;
  font-weight: 600;
  font-size: 24px;
  margin-top: 180px;
  margin-bottom: 90px;
  padding-bottom: 14px;
  border-bottom: 2px solid black;
  width: 90px;
`;

const AuthList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-left: 0;
  margin: 0;
`;

const AuthLi = styled.li`
  list-style-type: none;
`;

const AuthItem = styled(Link)`
  text-decoration: none;
  color: black;
  display: flex;
  justify-content: space-between;
  width: 300px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid black;
  align-items: center;
  font-weight: 600;
  font-size: 16px;
  padding-left: 24px;
  padding-right: 24px;
`;

const ButtonLater = styled(Link)`
  margin-top: 24px;
  cursor: pointer;
  text-decoration-line: underline;
  font-weight: 600;
  font-size: 16px;
  color: #bdbdbd;
`;

export default function LoginView() {
  return (
    <Container>
      <LoginHeader>로그인</LoginHeader>

      <AuthList>
        {items.map((item) => (
          <AuthLi key={item.label}>
            <AuthItem to={item.href}>
              <img src={item.icon} alt={item.label} />
              <span>{item.label}로 로그인하기</span>
              <span></span>
            </AuthItem>
          </AuthLi>
        ))}
      </AuthList>

      <ButtonLater to="/">나중에</ButtonLater>
    </Container>
  );
}
