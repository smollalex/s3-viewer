import styled from 'styled-components';

export const Wrapper = styled.div<{ isModalOpen: boolean | null }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: ${({ isModalOpen }) => isModalOpen ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  
  &:before {
    content: '';
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #0000007a;
    top: 0;
    left: 0;
    z-index: 0;
  }
`;

export const ModalWrapper = styled.div`
  background-color: #fff;
  z-index: 1;
  max-width: calc(100vh - 40px);
  max-height: calc(100vh - 40px);
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 1px solid #efefef;
  
  svg {
    cursor: pointer;
    stroke: black;
  }
`;

export const ModalBody = styled.div`
  padding: 40px 15px;
`;

export const ModalFooter = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-top: 1px solid #efefef;
`;

export const Button = styled.button<{ primary?: boolean}>`
  background-color: ${({ primary }) => primary ? '#57afe2' : '#fff'};
  color:  ${({ primary }) => primary ? '#fff' : '#444'};
  border: ${({ primary }) => primary ? 'none' : '1px solid #efefef'};
  padding: 0 20px;
  display: flex;
  align-items: center;
  min-height: 40px;
  cursor: pointer;
  border-radius: 2px;
  margin: 0 10px;
`;
