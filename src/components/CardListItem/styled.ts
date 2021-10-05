import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 180px;
  height: 220px;
  margin: 0 30px 30px 0;
  :nth-child(4n){
    margin-right: 0;
  }
  
  @media(max-width: 810px){
    width: calc(25% - 10px);
    height: 140px;
    margin: 0 10px 10px 0;
  }
`;

export const Pic = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Delete = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
`;

export const CardButton = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`;
