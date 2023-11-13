import './App.css';
import { Outlet } from 'react-router-dom';
import BottomNav from './components/BottomNav';

function App() {
  return (
    <>
      <Outlet />
      <BottomNav />
    </>
  );
}

export default App;
