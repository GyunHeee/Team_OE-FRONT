import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
  font-weight: 600;
  font-size: 24px;
  margin-top: 100px;
  margin-bottom: 16px;
  padding-bottom: 14px;
  border-bottom: 2px solid black;
  padding-left: 14px;
  padding-right: 14px;
`;

const Description = styled.div`
  text-align: center;
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 90px;
  width: 268px;
`;

export default function Header({ title, description }) {
  return (
    <>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </>
  );
}
