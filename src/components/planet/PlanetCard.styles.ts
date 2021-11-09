import styled from 'styled-components';

export const Container = styled.a`
  background: white;
  border-radius: 6px;
  box-shadow: 0 2px 3px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  margin: 8px 0;
  display: flex;
  flex: 1;
  color: black;
  text-decoration: none;
  flex-direction: column;
  padding: 16px;
  &:hover {
    box-shadow: 0 3px 4px 0 rgba(0,0,0,0.2);
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-top: 0;
`;

export const Tag = styled.p`
  color: #9381FF;
  font-weight: 800;
  font-size: 12px;
  background-color: #F8F7FF;
  border-radius: 6px;
  align-self: center;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 6px;
  padding-bottom: 6px;
  margin-top: 0;
`;

export const DescriptionContainer = styled.div`
`;

export const Description = styled.p`
  font-size: 12px;
  color: gray;
  margin: 0;
  text-align: right;
`;
