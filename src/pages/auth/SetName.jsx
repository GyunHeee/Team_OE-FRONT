import Container from './components/Container';
import Header from './components/Header';
import Form from './components/Form';
import Label from './components/Label';
import Input from './components/Input';
import ButtonContainer from './components/ButtonContainer';
import { useState, useCallback } from 'react';

export default function SetName() {
  const [name, setName] = useState('');

  const onChange = useCallback((e) => {
    setName(e.currentTarget.value);
  }, []);

  const checkLength = useCallback((string) => {
    if (string.length > 0 && string.length <= 30) return false;
    else return true;
  }, []);

  const onClick = useCallback(() => {
    setName('');
  }, []);

  return (
    <Container>
      <Header title="닉네임" description="닉네임을 입력해주세요." />

      <Form>
        <Label label="닉네임" description="1~30자 이내" stress="(필수)" />

        <Input
          value={name}
          onChange={onChange}
          type="text"
          loc={false}
          onClick={onClick}
        />

        <ButtonContainer prev={false} disable={checkLength(name)} />
      </Form>
    </Container>
  );
}
