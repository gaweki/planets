import styled from 'styled-components';

export const Main = styled.main`
  margin: 49px auto 0;
  padding: 0px 8px 16px 16px;
  width: 800px;
`;

export const Container = styled.div`
  font-family: Inter,-apple-system, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  'sans-serif';
  background-color: #F8F7FF;
  min-height: 100vh;
`;

export const BackContainer = styled.div`
  margin-top: 49px;
  height: 20px;
  width: 800px;
  padding: 16px 0;
`;

export const BackText = styled.span`
  cursor: pointer;
  &:hover{
    text-decoration: underline;
  }
`;
