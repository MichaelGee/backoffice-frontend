import React, { useMemo } from "react";
import { CSS } from "stitches/stitches.config";
import withDefaults from "utils/with-defaults";
import { StyledCard } from "./card.styles";

export interface Props {
  children?: React.ReactNode;
  css?: CSS;
  margin?: string | number;
  marginY?: string | number;
  marginX?: string | number;
  padding?: string | number;
  paddingY?: string | number;
  paddingX?: string | number;
}

const defaultProps = {
  margin: 0,
  marginY: 0,
  marginX: 0,
  padding: 0,
  paddingY: "1rem",
  paddingX: "1rem",
};

type NativeAttrs = Omit<React.HTMLAttributes<unknown>, keyof Props>;
export type CardProps = Props & typeof defaultProps & NativeAttrs;

const Card: React.FC<CardProps> = ({
  children,
  marginX: marginXProp,
  marginY: marginYProp,
  margin,
  paddingY: paddingYProp,
  paddingX: paddingXProp,
  padding,
  css,
  ...props
}) => {
  const marginHorizontal = useMemo<string>(() => {
    if (typeof marginXProp === "number") return `${marginXProp}px`;
    return marginXProp;
  }, [marginXProp]);

  const marginVertical = useMemo<string>(() => {
    if (typeof marginYProp === "number") return `${marginYProp}px`;
    return marginYProp;
  }, [marginYProp]);

  const marginAll = useMemo<string>(() => {
    if (typeof margin === "number") return `${margin}px`;
    return margin;
  }, [margin]);

  const paddingHorizontal = useMemo<string>(() => {
    if (typeof paddingXProp === "number") return `${paddingXProp}px`;
    return paddingXProp;
  }, [paddingXProp]);

  const paddingVertical = useMemo<string>(() => {
    if (typeof paddingYProp === "number") return `${paddingYProp}px`;
    return paddingYProp;
  }, [paddingYProp]);

  const paddingAll = useMemo<string>(() => {
    if (typeof padding === "number") return `${padding}px`;
    return padding;
  }, [padding]);

  return (
    <StyledCard
      css={{
        marginLeft: marginHorizontal,
        marginRight: marginHorizontal,
        marginTop: marginVertical,
        marginBottom: marginVertical,
        margin: marginAll,
        paddingTop: paddingVertical,
        paddingBottom: paddingVertical,
        paddingLeft: paddingHorizontal,
        paddingRight: paddingHorizontal,
        padding: paddingAll,
        ...(css as any),
      }}
      {...props}
    >
      {children}
    </StyledCard>
  );
};

export default withDefaults(Card, defaultProps);
