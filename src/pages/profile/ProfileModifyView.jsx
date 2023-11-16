import Container from './components/Container';
import GoBackButton from '../../components/GoBackButton';
import Header from './components/Header';
import MyInfo from './components/MyInfo';

export default function ProfileModifyView() {
  return (
    <Container>
      <GoBackButton />
      <Header />

      <MyInfo />
    </Container>
  );
}
