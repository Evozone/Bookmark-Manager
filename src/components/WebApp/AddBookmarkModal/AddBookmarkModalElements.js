import styled from 'styled-components';
import { MdOutlineClose } from 'react-icons/md';

export const ModalContainer = styled.div`
  z-index: 20;
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

export const Modal = styled.div`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  max-width: 95%;
  width: 500px;
`;

export const ModalHeader = styled.div`
  background: black;
  color: white;
  padding: 15px;
`;

export const CloseIcon = styled(MdOutlineClose)`
  float: right;
  color: white;
  font-size: 30px;
  position: relative;
  top: 13px;
  right: 13px;
  cursor: pointer;
`;

export const H3 = styled.h3`
  font-size: 20px;
  margin: 8px;
`;

export const ModalContent = styled.div`
  padding: 20px;
  background: whitesmoke;
`;

export const FormGroup = styled.div`
  height: 55px;
`;

export const FormLabel = styled.label`
  color: black;
`;

export const FormInput = styled.input`
  width: 97%;
  padding: 5px 10px;
  border: 2px solid black;
  border-radius: 20px;
  display: block;
  outline: none;
`;

export const SaveBookmarkBtn = styled.button`
  cursor: pointer;
  color: white;
  background: black;
  height: 30px;
  width: 100px;
  border: none;
  border-radius: 20px;
  margin-top: 10px;
  font-size: 20px;

  &:hover {
    filter: brightness(140%);
    color: rgb(66, 234, 240);
  }
`;
