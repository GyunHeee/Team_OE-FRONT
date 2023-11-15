const KAKAO_REST_API_KEY = '1a4dfab0cb0141a3f147e670a678245e';
export const KAKAO_REDIRECT_URL = 'http://localhost:3000/login/kakao';
export const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URL}&response_type=code`;
