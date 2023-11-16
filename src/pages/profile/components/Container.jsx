import styled from 'styled-components';

const ContainerComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Container({ children }) {
  return <ContainerComponent>{children}</ContainerComponent>;
}
