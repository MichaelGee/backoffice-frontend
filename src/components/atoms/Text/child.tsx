import React, { useMemo, ReactNode } from "react";
import { CSS } from "stitches/stitches.config";
import { useDOMRef } from "utils/dom";
import { TextTransforms } from "utils/props-types";
import { ReactRef } from "utils/refs";
import { StyledText, TextVariantsProps } from "./text.styles";

type As = keyof JSX.IntrinsicElements | React.ComponentType<any>;

export interface Props {
  tag: keyof JSX.IntrinsicElements;
  children?: ReactNode;
  color?: string;
  size?: string | number;
  margin?: string | number;
  marginBottom?: string | number;
  marginTop?: string | number;
  marginLeft?: string | number;
  marginRight?: string | number;
  transform?: TextTransforms;
  css?: CSS;
  as?: As;
  href?: string;
}

type NativeAttrs = Omit<React.HTMLAttributes<unknown>, keyof Props>;

export type TextChildProps = Props & NativeAttrs & TextVariantsProps;

export const TextChild = React.forwardRef((props: TextChildProps, ref: ReactRef<HTMLElement>) => {
  const {
    children,
    tag,
    color,
    transform,
    margin: marginProp,
    marginTop: marginTopProps,
    marginBottom: marginBottomProps,
    marginLeft: marginLeftProps,
    marginRight: marginRightProps,
    size,
    css,
    href,
    ...otherProps
  } = props;

  const domRef = useDOMRef(ref);

  const fontSize = useMemo<string>(() => {
    if (!size) return "inherit";
    if (typeof size === "number") return `${size}px`;
    return size;
  }, [size]);

  const margin = useMemo<string>(() => {
    if (typeof marginProp === "number") return `${marginProp}px`;
    return marginProp;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [marginProp]);

  const marginTop = useMemo<string>(() => {
    if (typeof marginTopProps === "number") return `${marginTopProps}px`;
    return marginTopProps;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [marginTopProps]);

  const marginBottom = useMemo<string>(() => {
    if (typeof marginBottomProps === "number") return `${marginBottomProps}px`;
    return marginBottomProps;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [marginBottomProps]);

  const marginLeft = useMemo<string>(() => {
    if (typeof marginLeftProps === "number") return `${marginLeftProps}px`;
    return marginLeftProps;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [marginLeftProps]);

  const marginRight = useMemo<string>(() => {
    if (typeof marginRightProps === "number") return `${marginLeftProps}px`;
    return marginRightProps;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [marginRightProps]);

  return (
    <StyledText
      ref={domRef}
      as={tag}
      href={href}
      css={{
        color,
        fontSize: size ? fontSize : "",
        margin,
        marginTop,
        marginBottom,
        marginLeft,
        marginRight,
        tt: transform,
        ...(css as any),
      }}
      {...otherProps}
    >
      {children}
    </StyledText>
  );
});

const MemoTextChild = React.memo(TextChild);

export default MemoTextChild;
