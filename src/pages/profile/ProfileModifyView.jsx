import Container from './components/Container';
import GoBackButton from '../../components/GoBackButton';
import Header from './components/Header';
import MyInfo from './components/MyInfo';
import { useState, useCallback } from 'react';

export default function ProfileModifyView() {
  const [name, setName] = useState('');
  const [loc, setLoc] = useState('');

  const onChangeName = useCallback((e) => {
    setName(e.currentTarget.value);
  }, []);

  const onChangeLoc = useCallback((e) => {
    setLoc(e.currentTarget.value);
  }, []);

  const onClickName = useCallback(() => {
    setName('');
  }, []);

  const onClickLoc = useCallback(() => {
    setLoc('');
  }, []);

  const checkLength = useCallback((string) => {
    if (string.length > 0 && string.length <= 30) return false;
    else return true;
  }, []);

  return (
    <Container>
      <GoBackButton />
      <Header />

      <MyInfo
        name={name}
        onChangeName={onChangeName}
        loc={loc}
        onChangeLoc={onChangeLoc}
        onClickName={onClickName}
        onClickLoc={onClickLoc}
        checkLength={checkLength}
      />
    </Container>
  );
}
