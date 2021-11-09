import React from 'react';
import { useLocation } from 'react-router-dom';

import {
  Container,
  TabItem,
} from './Tabs.styles';

const Header = () => {
  const { pathname } = useLocation();
  return (
    <Container>
      <TabItem to="/" current={pathname === '/' ? 'active' : ''}>List</TabItem>
      <TabItem to="/wishlist" current={pathname === '/wishlist' ? 'active' : ''}>Wishlist</TabItem>
    </Container>
  );
};

export default Header;
