import { styled, VariantProps } from "stitches/stitches.config";

export const StyledAvatarContainer = styled("div", {
  bg: "$gray300",
  br: "$radii$rounded",
  position: "relative",
  d: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  variants: {
    size: {
      lg: {
        width: "104px",
        height: "104px",
      },
      md: {
        width: "72px",
        height: "72px",
      },
      sm: {
        width: "32px",
        height: "32px",
      },
    },
  },
});

export const AvatarInitials = styled("h1", {
  fWeight: "normal",
  textAlign: "center",
  margin: 0,
  color: "$gray700",
  variants: {
    size: {
      lg: {
        fs: "36px",
      },
      md: {
        fs: "26px",
      },
      sm: {
        fs: "15px",
      },
    },
  },
});

export const AvatarImage = styled("img", {
  width: "100%",
  height: "100%",
  br: "$radii$rounded",
  objectFit: "cover",
  position: "absolute",
  top: 0,
  left: 0,
});

export type AvatarContainerVariantProps = VariantProps<typeof StyledAvatarContainer>;
export type AvatarInitialsVariantProps = VariantProps<typeof AvatarInitials>;
