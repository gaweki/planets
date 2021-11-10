import styled from 'styled-components';

export const Name = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 0
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

export const Label = styled.p`
  font-size: 16px;
  margin: 0;
  &:last-child{
    font-weight: 600;
    font-size: 18px
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-bottom: 20px;
  &:last-child{
    margin-bottom: 0
  }
  &:first-child{
    margin-bottom: 20px
  }
`;
