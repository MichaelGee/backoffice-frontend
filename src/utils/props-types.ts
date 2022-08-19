export const tuple = <T extends string[]>(...args: T) => args;
export const textTransforms = tuple(
  /* Keyword values */
  "none",
  "capitalize",
  "uppercase",
  "lowercase",
  "full-width",
  "full-size-kana",
  /* Global values */
  "inherit",
  "initial",
  "revert",
  "unset"
);

const justify = tuple(
  "flex-start",
  "center",
  "flex-end",
  "space-between",
  "space-around",
  "space-evenly"
);

const alignItems = tuple("flex-start", "flex-end", "center", "stretch", "baseline");
const wrap = tuple("nowrap", "wrap", "wrap-reverse");
const alignContent = tuple(
  "stretch",
  "center",
  "flex-start",
  "flex-end",
  "space-between",
  "space-around"
);

const direction = tuple("row", "row-reverse", "column", "column-reverse");
const display = tuple("flex", "block", "grid", "inline", "inline-block", "inline-flex", "inline-grid");
export type AlignContent = typeof alignContent[number];
export type AlignItems = typeof alignItems[number];
export type BreakpointsValue = number | boolean;
export type Direction = typeof direction[number];
export type Justify = typeof justify[number];
export type TextTransforms = typeof textTransforms[number];
export type Wrap = typeof wrap[number];
export type Display = typeof display[number];
