import { styled, keyframes, VariantProps } from "stitches/stitches.config";

const rotate = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});

export const StyledButton = styled("button", {
  br: "10px",
  fs: "15px",
  fWeight: "$medium",
  lh: "22px",
  ta: "center",
  p: "12px 24px",
  border: "none",
  cursor: "pointer",
  dflex: "center",
  transition: "$button",
  "&:hover": {
    bg: "$purple200",
  },
  variants: {
    fullWidth: {
      true: {
        width: "100%",
      },
    },
    disabled: {
      true: {
        pe: "all",
        cursor: "not-allowed",
        bg: "$purple100",
        "&:hover": {
          bg: "$purple100",
        },
      },
    },
    rounded: {
      true: {
        br: "100px",
      },
    },
    variant: {
      primary: {
        bg: "$primary",
        color: "$white",
      },
      secondary: {
        bg: "$white",
        color: "$purple300",
        "&:hover": {
          bg: "$white",
        },
      },
      tertiary: {
        bg: "$purple500",
        color: "purple300",
        "&:hover": {
          bg: "$purple500",
        },
      },
    },
    loading: {
      true: {
        color: "transparent",
        pe: "none",
        p: "relative",
        dflex: "center",
        "&::after": {
          content: "",
          border: "2px solid $white",
          br: "$rounded",
          position: "absolute",
          borderRightColor: "transparent",
          animation: `${rotate} 1s ease infinite`,
          h: "1.2em",
          w: "1.2em",
        },
      },
    },
  },
  "@xsMax": {
    fs: "12px",
    p: "9px 16px",
  },
});

export type ButtonVariantsProps = VariantProps<typeof StyledButton>;
