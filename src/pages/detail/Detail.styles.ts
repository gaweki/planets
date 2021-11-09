import styled from 'styled-components';

export const Main = styled.main`
  margin: 49px auto 0;
  padding: 0px 8px 16px 16px;
  width: 800px;
`;

export const CardContainer = styled.main`
  background-color: white;
  box-shadow: 0 2px 3px 0 rgba(0,0,0,0.2);
  display: flex;
  width: 800px;
  border-radius: 6px;
  padding: 16px;
  flex-direction: column;
`;

export const Title = styled.p`
  font-size: 24px;
  font-weight: 800px;
  margin-top: 0;
`;

export const Container = styled.div`
  font-family: Inter,-apple-system, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  'sans-serif';
  background-color: #F8F7FF;
  min-height: 100vh;
`;

export const Label = styled.p`
  font-size: 16px;
  margin: 0px 0 20px;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  &:last-child{
    ${Label}{
      margin-bottom: 0
    }
  }
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
