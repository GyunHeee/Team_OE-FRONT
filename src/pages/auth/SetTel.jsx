import Container from './components/Container';
import Header from './components/Header';
import Form from './components/Form';
import Label from './components/Label';
import Input from './components/Input';
import SkipButton from './components/SkipButton';
import ButtonContainer from './components/ButtonContainer';
import { useState, useCallback } from 'react';

export default function SetTel() {
  const [Tel, setTel] = useState('');

  const onChange = useCallback((e) => {
    setTel(e.currentTarget.value);
  }, []);

  const onClick = useCallback(() => {
    setTel('');
  }, []);

  return (
    <Container>
      <Header title="전화번호" description="전화번호를 입력해주세요." />

      <Form>
        <Label label="전화번호" description="- 빼고 작성" stress="" />
        <Input
          value={Tel}
          onChange={onChange}
          type="tel"
          loc={false}
          onClick={onClick}
        />

        <ButtonContainer prev={true} disable={false} />

        <SkipButton />
      </Form>
    </Container>
  );
}
