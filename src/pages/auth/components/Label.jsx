import styled from 'styled-components';

const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 4px;
  padding-right: 4px;
  font-weight: 600;
  font-size: 16px;
`;

const GraySpan = styled.span`
  color: #bdbdbd;
`;

const RedSpan = styled.span`
  color: red;
`;

export default function Label({ label, description, stress }) {
  return (
    <LabelContainer>
      <label htmlFor="input">
        {label}&nbsp;
        <RedSpan>{stress}</RedSpan>
      </label>

      <GraySpan>{description}</GraySpan>
    </LabelContainer>
  );
}
