import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
  cursor: pointer;
  margin-bottom: 20px;
  border-radius: 4px;
  transition: .3s;
  
  &:hover, &:focus {
    box-shadow: 0px 0px 40px -10px #4040404f;
  }
`;

export const Image = styled.div`
  width: 300px;
  height: 300px;
  padding: 20px;
  margin-bottom: 10px;
  
  img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
`
export const Tag = styled.div`
  margin: 10px 0 20px 0;
  font-size: 11px
`;
