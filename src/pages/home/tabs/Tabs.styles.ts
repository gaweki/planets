import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  width: 800px;
  margin: 0px 0px 10px 0px;
`;

export const TabItem = styled(NavLink)`
  display: block;
  text-align: center;
  padding: 14px 14px;
  font-size: 18px;
  text-decoration: none;
  font-weight: bold;
  color: #9381FF;
`;
