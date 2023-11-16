import Container from './components/Container';
import Header from './components/Header';
import Form from './components/Form';
import Label from './components/Label';
import Input from './components/Input';
import SkipButton from './components/SkipButton';
import ButtonContainer from './components/ButtonContainer';

export default function SetLoc() {
  return (
    <Container>
      <Header
        title="위치"
        description="위치를 설정해주세요. 해당지역의 사건사고를 빠르게 알려드립니다!"
      />

      <Form>
        <Label label="위치설정" description="" stress="" />
        <Input />

        <ButtonContainer prev={true} disable={false} />

        <SkipButton />
      </Form>
    </Container>
  );
}
