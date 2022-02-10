import React, { useRef } from 'react';
import { saveAs } from 'file-saver';
import { useOnClickOutside } from 'usehooks-ts';
import { X } from 'react-feather';
import { ModalProps } from './types';
import { Wrapper, ModalWrapper, ModalHeader, ModalBody, ModalFooter, Button} from './styled';

export const Modal:React.FC<ModalProps> = (props) => {
  const {
    item,
    isModalOpen,
    setIsModalOpen
  } = props;

  const ref = useRef(null)

  const handleClickOutside = () => {
    document.body.classList.remove('modal-open');
    setIsModalOpen(false);
  }

  useOnClickOutside(ref, handleClickOutside)

  const saveFile = () => {
    fetch(`${item?.url}`, { mode: 'no-cors'})
      .then(res => res.blob())
      .then(blob => saveAs(blob, item?.filename))
  };

  return (
    <Wrapper isModalOpen={isModalOpen}>
      <ModalWrapper ref={ref}>
        <ModalHeader>
          Preview
          <X size={20}  onClick={handleClickOutside} />
        </ModalHeader>
        <ModalBody >
          <img src={item?.url} alt={item?.tag} />
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleClickOutside}>Cancel</Button>
          <Button onClick={saveFile} primary>Download</Button>
        </ModalFooter>
      </ModalWrapper>
    </Wrapper>
  )
}


