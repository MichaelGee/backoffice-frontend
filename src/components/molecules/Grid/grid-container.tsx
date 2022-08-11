import React, { useMemo, RefAttributes, PropsWithoutRef } from "react";
import GridBasicItem, { GridItemProps } from "./grid-item";
import { CSS } from "stitches/stitches.config";
import { Wrap } from "utils/props-types";
import withDefaults from "utils/with-defaults";
import clsx from "utils/clsx";

interface Props {
  gap?: number;
  wrap?: Wrap;
  className?: string;
  css?: CSS;
}

const defaultProps = {
  gap: 0,
  wrap: "wrap" as Wrap,
  className: "",
};

export type GridContainerProps = Props & Partial<typeof defaultProps> & GridItemProps;

const GridContainer = React.forwardRef<HTMLDivElement, React.PropsWithChildren<GridContainerProps>>(
  ({ gap, wrap, css, children, className, ...props }, ref) => {
    const gapUnit = useMemo(() => {
      return `calc(${gap} * $space$3)`;
    }, [gap]);

    return (
      <GridBasicItem
        ref={ref}
        className={clsx("grid-container", className)}
        css={{
          $$gridGapUnit: gapUnit,
          display: "flex",
          flexWrap: wrap,
          boxSizing: "border-box",
          margin: "calc(-1 * $$gridGapUnit)",
          width: "calc(100% + $$gridGapUnit * 2)",
          ...(css as any),
        }}
        {...props}
      >
        {children}
      </GridBasicItem>
    );
  }
);

type GridContainerComponent<T, P = {}> = React.ForwardRefExoticComponent<
  PropsWithoutRef<P> & RefAttributes<T>
>;

export default withDefaults(GridContainer, defaultProps) as GridContainerComponent<
  HTMLDivElement,
  GridContainerProps
>;
