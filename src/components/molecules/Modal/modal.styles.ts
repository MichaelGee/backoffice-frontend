import { styled } from "stitches/stitches.config";
import ReactModal from "react-modal";

export const StyledModalContainer = styled(ReactModal, {
  bg: "$white",
  br: "8px",
  maxW: "544px",
  w: "90%",
  position: "relative",
  p: "30px 20px",
});

export const ModalHeader = styled("div", {
  d: "flex",
  alignItems: "center",
  textAlign: "center",
  justifyContent: "center",
  pb: "2rem",
});

export const ModalBody = styled("div", {
  overflow: "scroll",
  maxH: "70vh",
  outline: "none",
});

export const ModalFooter = styled("div", {
  display: "flex",
  pt: "1rem",
});
