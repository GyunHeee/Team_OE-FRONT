import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.h1`
  text-align: center;
  font-weight: 600;
  font-size: 24px;
  margin-top: 100px;
  margin-bottom: 16px;
  padding-bottom: 14px;
  border-bottom: 2px solid black;
  width: 90px;
`;

const Description = styled.div`
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 90px;
`;

const Form = styled.form`
  width: 348px;
`;

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

const InputContainer = styled.div`
  display: flex;
  position: relative;
`;

const Input = styled.input`
  border: 0;
  border-bottom: 2px solid black;
  width: 340px;
  margin-top: 27px;
  margin-bottom: 60px;
  font-weight: 600;
  font-size: 16px;
  padding: 4px;
`;

const CancelButton = styled.button`
  position: absolute;
  top: 27px;
  right: 0;
`;

const Button = styled.button`
  width: 100%;
  height: 56px;
  font-weight: 600;
  font-size: 16px;
  background-color: #0085ff;
  color: white;
  border-radius: 10px;
`;

export default function SetName() {
  return (
    <Container>
      <Header>닉네임</Header>
      <Description>닉네임을 입력해주세요.</Description>

      <Form>
        <LabelContainer>
          <label htmlFor="name">
            닉네임&nbsp;
            <RedSpan>(필수)</RedSpan>
          </label>

          <GraySpan>1~30자 이내</GraySpan>
        </LabelContainer>

        <InputContainer>
          <Input type="text" id="name" />
          <CancelButton>
            <img src="/icons/btn_cancel.svg" alt="취소" />
          </CancelButton>
        </InputContainer>

        <Button type="submit">다음</Button>
      </Form>
    </Container>
  );
}
