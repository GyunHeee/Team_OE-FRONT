import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const AlertBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
  padding: 0.7rem 0.5rem;
  border-bottom: 1px solid #d9d9d9;
`;

const AlertImg = styled.div`
  width: 50px;
  height: 50px;
  background-color: black;
  border-radius: 100%;
`;

const AlertUser = styled.span`
  font-weight: 600;
`;

const AlertType = styled.span`
  font-weight: 600;
  color: #0085ff;
`;

const AlertText = styled.p`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.5px;
  text-align: left;
  margin-left: 0.5rem;
`;

export default function AlertView() {
  return (
    <Container>
      <AlertBox>
        <AlertImg />
        <AlertText>
          <AlertUser>OO님이</AlertUser> 회원님 게시물에{' '}
          <AlertType>댓글</AlertType>을 달았습니다.
        </AlertText>
      </AlertBox>

      <AlertBox>
        <AlertImg />
        <AlertText>
          <AlertUser>OO님이</AlertUser> 회원님 게시물에{' '}
          <AlertType>댓글</AlertType>을 달았습니다.
        </AlertText>
      </AlertBox>
    </Container>
  );
}
