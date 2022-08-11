import { ComponentMeta } from "@storybook/react";

import { Text } from "components/atoms/Text";
import { Modal } from "./index";
import React, { useState } from "react";
import { Button } from "components/atoms/button";

export default {
  title: "Components/Molecules/Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

const M = ({ openModal, closeModal }) => {
  return (
    <div>
      <Modal openModal={openModal} closeModal={closeModal}>
        <Modal.Header>
          <Text h1 weight='bold' size='25px'>
            Fund your wallet
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text weight='normal' size='16px'>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent
            commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus
            sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
            risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras
            justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl
            consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus
            ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at
            eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis
            consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
            eget quam.
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={closeModal}>Proceed</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export const ModalComponent = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  return (
    <div>
      <Button type='button' onClick={handleOpenModal}>
        Open Modal
      </Button>
      <M openModal={openModal} closeModal={() => setOpenModal(false)} />
    </div>
  );
};
