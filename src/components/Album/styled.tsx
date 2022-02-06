import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  font-size: 20px;
  margin: 70px 0 30px 0;
  text-decoration: underline;
`;

export const Grid = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
`;

export const Empty = styled.div`
  border: 1px dashed #ccc;
  font-size: 12px;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`
