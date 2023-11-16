import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFoundView from './pages/NotFoundView';
import HomeView from './pages/HomeView';
import PostView from './pages/PostView';
import PostListView from './pages/PostListView';
import LoginView from './pages/auth/LoginView';
import KaKaoLogin from './pages/auth/KaKaoLogin';
import SetName from './pages/auth/SetName';
import SetTel from './pages/auth/SetTel';
import SetLoc from './pages/auth/SetLoc';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundView />,
    children: [
      { index: true, path: '/', element: <HomeView /> },
      { path: '/board/:board_id', element: <PostView /> },
      { path: '/boardList', element: <PostListView /> },
      { path: '/login', element: <LoginView /> },
      { path: '/login/kakao', element: <KaKaoLogin /> },
      { path: '/login/set-name', element: <SetName /> },
      { path: '/login/set-tel', element: <SetTel /> },
      { path: '/login/set-loc', element: <SetLoc /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
