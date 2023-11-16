import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { kakao } from '../../api/auth';

export default function KaKaoLogin() {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get('code');

  useEffect(() => {
    if (code) {
      kakao(code).then((response) => {
        console.log(response);
        response.status === 201 && navigate('/');
      });
    }
  }, [code, navigate]);

  return <>카카오 로그인 페이지</>;
}
