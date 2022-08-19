import { styled, VariantProps } from "stitches/stitches.config";
import { Icon } from "components/atoms/icon";

export const StyledInputMainContainer = styled("div", {
  width: "100%",
  minW: "15rem",
});

export const StyledInput = styled("input", {
  bg: "$white",
  br: "$xs",
  fs: "14px",
  fWeight: "$medium",
  lh: "22px",
  border: "1px solid $purple100",
  bs: "$input",
  p: "10px 13px 12px 13px",
  color: "$purple300",
  width: "100%",
  mt: "5px",
  "&::placeholder": {
    color: "$purple100",
    transition: "opacity 0.65s ease 0s",
    MozTransition: "opacity 0.65s ease 0s",
    MsTransition: "opacity 0.65s ease 0s",
    WebkitTransition: "opacity 0.65s ease 0s",
  },
  variants: {
    focused: {
      true: {
        "&::placeholder": {
          opacity: 0,
          transition: "opacity 0.65s ease 0s",
        },
      },
    },
    passwordState: {
      true: {
        p: "10px 38px 12px 13px",
      },
    },
    checkAddon: {
      true: {
        p: "10px 12px 12px 45px !important",
      },
    },
  },
  "&:focus": {
    border: "1px solid $primary",
    outline: "none",
    transition: "$button",
  },
});

export const StyledInputLabel = styled("p", {
  fs: "14px",
  fWeight: "$medium",
  color: "$purple400",
});

export const Addon = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  top: "30%",
  left: "15px",
  position: "absolute",
});

export const PasswordEye = styled(Icon, {
  position: "absolute",
  top: "35%",
  right: "15px",
  cursor: "pointer",
});

export const StyledInnerContainer = styled("div", {
  position: "relative",
});

export type InputVariantsProps = VariantProps<typeof StyledInput>;
