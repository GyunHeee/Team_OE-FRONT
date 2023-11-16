import Container from './components/Container';
import Header from './components/Header';
import Form from './components/Form';
import Label from './components/Label';
import Input from './components/Input';
import ButtonContainer from './components/ButtonContainer';

export default function SetName() {
  return (
    <Container>
      <Header title="닉네임" description="닉네임을 입력해주세요." />

      <Form>
        <Label label="닉네임" description="1~30자 이내" stress="(필수)" />

        <Input />

        <ButtonContainer prev={false} disable={true} />
      </Form>
    </Container>
  );
}
