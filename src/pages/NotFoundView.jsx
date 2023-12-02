import React from 'react';
import BottomNav from '../components/BottomNav';
import { useLocation } from 'react-router-dom';

export default function NotFoundView() {
  const pathname = useLocation().pathname;

  return (
    <>
      <div className="not-found">Not found</div>
      {pathname.startsWith('/login') || <BottomNav />}
    </>
  );
}
