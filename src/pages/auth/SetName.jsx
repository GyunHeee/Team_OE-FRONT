import Container from './components/Container';
import Header from './components/Header';
import Form from './components/Form';
import Label from './components/Label';
import Button from './components/Button';
import Input from './components/Input';

export default function SetName() {
  return (
    <Container>
      <Header title="닉네임" description="닉네임을 입력해주세요." />

      <Form>
        <Label label="닉네임" description="1~30자 이내" stress="(필수)" />

        <Input />

        <Button>다음</Button>
      </Form>
    </Container>
  );
}
