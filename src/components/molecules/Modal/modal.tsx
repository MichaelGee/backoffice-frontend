import React, { memo } from "react";
import { StyledModalContainer, ModalHeader, ModalBody, ModalFooter } from "./modal.styles";
import "./style.css";

interface Props {
  children: React.ReactNode;
  openModal: boolean;
  closeModal?: () => void;
  title?: string;
  footer?: React.ReactNode;
  className?: string;
  noCancel?: boolean;
  afterOpen?: () => void;
  Header?: React.ReactNode;
}

const Modal: React.FC<Props> & { Header?: any; Body?: any; Footer?: any } = memo(
  ({ children, openModal, noCancel, closeModal, afterOpen, title, className, ...props }) => {
    return (
      <StyledModalContainer
        isOpen={openModal}
        onAfterOpen={afterOpen}
        onRequestClose={closeModal}
        overlayClassName='modal-overlay'
        parentSelector={() => document.querySelector("#root")}
        {...props}
      >
        {children}
      </StyledModalContainer>
    );
  }
);

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
