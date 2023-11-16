import CS from './components/CS';
import Container from './components/Container';
import MyActivity from './components/MyActiviry';
import MyProfile from './components/MyProfile';

export default function ProfileView() {
  return (
    <Container>
      <MyProfile />

      <MyActivity />

      <CS />
    </Container>
  );
}
