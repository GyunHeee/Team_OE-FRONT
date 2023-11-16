import Container from './components/Container';
import Header from './components/Header';
import Form from './components/Form';
import Label from './components/Label';
import Input from './components/Input';
import SkipButton from './components/SkipButton';
import ButtonContainer from './components/ButtonContainer';
import { useState, useCallback } from 'react';

export default function SetLoc() {
  const [loc, setLoc] = useState('');

  const onChange = useCallback((e) => {
    setLoc(e.currentTarget.value);
  }, []);

  const onClick = useCallback(() => {
    setLoc('');
  }, []);

  return (
    <Container>
      <Header
        title="위치"
        description="위치를 설정해주세요. 해당지역의 사건사고를 빠르게 알려드립니다!"
      />

      <Form>
        <Label label="위치설정" description="" stress="" />

        <Input
          value={loc}
          onChange={onChange}
          type="text"
          loc={true}
          onClick={onClick}
        />

        <ButtonContainer prev={true} disable={false} />

        <SkipButton />
      </Form>
    </Container>
  );
}
