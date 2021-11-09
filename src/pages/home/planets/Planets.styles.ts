import styled from 'styled-components';

export const Container = styled.main`
  font-family: Inter,-apple-system, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    'sans-serif';
  background-color: #F8F7FF;
  min-height: 100vh;
`;

export const SearchInput = styled.input`
  border-radius: 8px;
  height: 23px;
  width: 20%;
  align-self: center;
  font-size: 12px;
  padding-left: 8px;
  padding-right: 8px;
`;

export const Main = styled.div`
  margin: 49px auto 0;
  padding: 0px 8px 16px 16px;
  width: 800px;
`;

export const SearchResult = styled.p`
  font-style: italic;
  font-size: 12px;
`;

export const Loading = styled.p`
  text-align: center;
  align-self: center;
  color: gray;
  font-size: 14px;
`;
