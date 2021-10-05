import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 810px;
  margin: 0 auto;
  padding: 141px 0;

  @media(max-width: 810px){
    padding: 60px 10px;
  }
`;

export const Heading = styled.span`
  margin: 100px 0 20px -30px;
  font-weight: 700;
  font-size: 30px;
  line-height: 35px;
  text-align: center;
  text-transform: uppercase;

  @media(max-width: 810px){
    margin-top: 40px;
  }
`;

export const Party = styled.span`
  display: flex;
`;
