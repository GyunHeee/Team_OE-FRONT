import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const items = [
  {
    href: '/map',
    label: '지도',
    icon: '/icons/nav_map.svg',
  },
  {
    href: '/boardList',
    label: '게시판',
    icon: '/icons/nav_board.svg',
  },
  {
    href: '/profile',
    label: '내정보',
    icon: '/icons/nav_profile.svg',
  },
];

const NavContainer = styled.nav`
  display: flex;
  width: 100%;
  height: 60px;
  box-shadow: 0px 15px 30px 30px rgb(0 0 0 / 0.05);
  background-color: white;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-left: 50px;
  padding-right: 50px;
`;

const NavLi = styled.li`
  list-style: none;
  width: 50px;
  font-size: 12px;
  font-weight: 600;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
`;

const ItemContainerClicked = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: #0085ff;
  filter: invert(35%) sepia(79%) saturate(2925%) hue-rotate(194deg)
    brightness(103%) contrast(106%);
`;

const ItemContainerUnClicked = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: black;
`;

export default function BottomNav() {
  const pathname = useLocation().pathname;

  return (
    <>
      <NavContainer>
        <NavList>
          {items.map((item) =>
            pathname.startsWith(item.href) ? (
              <NavLi key={item.label}>
                <ItemContainerClicked to={item.href}>
                  <img src={item.icon} alt={item.label} />
                  <span>{item.label}</span>
                </ItemContainerClicked>
              </NavLi>
            ) : (
              <NavLi key={item.label}>
                <ItemContainerUnClicked to={item.href}>
                  <img src={item.icon} alt={item.label} />
                  <span>{item.label}</span>
                </ItemContainerUnClicked>
              </NavLi>
            )
          )}
        </NavList>
      </NavContainer>
    </>
  );
}
