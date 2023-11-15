import { AxiosError } from 'axios';
import API from '../main';
import { setToken } from '../../lib/handleToken';
import { KAKAO_REDIRECT_URL } from '../../lib/handleOAuth';

export const kakao = async (code) => {
  try {
    const response = await API.get(
      `/api/members/login?code=${code}&redirect-url=${KAKAO_REDIRECT_URL}&social-type=KAKAO`
    );

    setToken({ key: 'accessToken', value: response.data.token.accessToken });

    return response;
  } catch (e) {
    if (e instanceof AxiosError) {
      const message = e.response?.data.message;

      return message;
    }

    return '';
  }
};
