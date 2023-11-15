import Container from './components/Container';
import Header from './components/Header';
import Form from './components/Form';
import Label from './components/Label';
import Button from './components/Button';
import Input from './components/Input';

export default function SetTel() {
  return (
    <Container>
      <Header title="전화번호" description="전화번호를 입력해주세요." />

      <Form>
        <Label label="전화번호" description="- 빼고 작성" stress="" />

        <Input />

        <Button>다음</Button>
      </Form>
    </Container>
  );
}
