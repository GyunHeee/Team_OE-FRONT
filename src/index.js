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
import AlertView from './pages/user/AlertView';
import LoginView from './pages/auth/LoginView';
import KaKaoLogin from './pages/auth/KaKaoLogin';
import SetName from './pages/auth/SetName';
import SetLoc from './pages/auth/SetLoc';
import ProfileView from './pages/profile/ProfileView';
import ProfileModifyView from './pages/profile/ProfileModifyView';
import AddPostView from './pages/user/AddPostView';
import SearchView from './pages/SearchView';
import UserCommentView from './pages/user/UserCommentView';
import MapView from './pages/map/MapView';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundView />,
    children: [
      { index: true, path: '/', element: <HomeView /> },
      { path: '/board/:board_id', element: <PostView /> },
      { path: '/boardList', element: <PostListView /> },
      { path: '/alert/:user_id', element: <AlertView /> },
      { path: '/login', element: <LoginView /> },
      { path: '/login/kakao', element: <KaKaoLogin /> },
      { path: '/login/set-name', element: <SetName /> },
      { path: '/login/set-loc', element: <SetLoc /> },
      { path: '/profile', element: <ProfileView /> },
      { path: '/profile/modify', element: <ProfileModifyView /> },
      { path: '/addPost', element: <AddPostView /> },
      { path: '/search/:user_id', element: <SearchView /> },
      { path: '/user/comment/:user_id', element: <UserCommentView /> },
      { path: '/map', element: <MapView /> },
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
