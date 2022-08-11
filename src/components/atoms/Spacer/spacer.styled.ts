import { styled, VariantProps } from "stitches";

export const StyledSpacer = styled("span", {
  size: "1px",
  variants: {
    inline: {
      true: {
        display: "inline-block",
      },
      false: {
        display: "block",
      },
    },
  },
  defaultVariants: {
    inline: false,
  },
});

export type SpacerVariantsProps = VariantProps<typeof StyledSpacer>;
