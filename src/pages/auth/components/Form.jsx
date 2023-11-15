import styled from 'styled-components';

const FormComponent = styled.form`
  width: 348px;
`;

export default function Form({ children }) {
  return <FormComponent>{children}</FormComponent>;
}
