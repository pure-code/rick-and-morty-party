import styled from 'styled-components';

interface Props{
  withBg?: boolean;
}

export const Container = styled.div<Props>`
  position: relative;
  width: 180px;
  height: 220px;
  ${({ withBg }) => withBg && 'background: #DADADA;'};
  margin: 0 30px 30px 0;
  :nth-child(4n){
    margin-right: 0;
  }

  @media(max-width: 810px){
    width: 140px;
    margin: 0 10px 10px 0;
  }
`;

export const Pic = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Name = styled.span`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 24px;
  line-height: 28px;
  color: #fff;
`;
