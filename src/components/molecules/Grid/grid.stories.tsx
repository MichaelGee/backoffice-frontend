import { Meta } from "@storybook/react";
import { Spacer } from "components/atoms/Spacer";
import { Grid } from "./index";

export default {
  title: "Layout/Grid",
  component: Grid,
} as Meta;

const MockItem = ({ text }) => {
  return (
    <div style={{ width: "100%", color: "white", height: "100px", background: "#00BEFC" }}>{text}</div>
  );
};

export const Default = () => (
  <Grid.Container gap={2} justify='center'>
    <Grid xs={6} sm={3}>
      <MockItem text='Block' />
    </Grid>
    <Grid xs={6} sm={3}>
      <MockItem text='Block' />
    </Grid>
    <Grid xs={6} sm={3}>
      <MockItem text='Block' />
    </Grid>
    <Grid xs={6} sm={3}>
      <MockItem text='Block' />
    </Grid>
  </Grid.Container>
);

export const Fluid = () => (
  <Grid.Container gap={2} justify='center'>
    <Grid xs={12}>
      <MockItem text='Block' />
    </Grid>
    <Grid xs={12}>
      <MockItem text='Block' />
    </Grid>
    <Grid xs={12}>
      <MockItem text='Block' />
    </Grid>
    <Grid xs={3}>
      <MockItem text='Block' />
    </Grid>
    <Grid xs={3}>
      <MockItem text='Block' />
    </Grid>
    <Grid xs={3}>
      <MockItem text='Block' />
    </Grid>
    <Grid xs={3}>
      <MockItem text='Block' />
    </Grid>
    <Grid xs={3}>
      <MockItem text='Block' />
    </Grid>
    <Grid xs={12}>
      <MockItem text='Block' />
    </Grid>
    <Grid xs={3}>
      <MockItem text='Block' />
    </Grid>
  </Grid.Container>
);

export const Responsive = () => (
  <Grid.Container gap={2} justify='center'>
    <Grid xs={12} md={6}>
      <MockItem text='Block' />
    </Grid>
    <Grid xs={12} md={6}>
      <MockItem text='Block' />
    </Grid>
    <Grid xs={6} md={3}>
      <MockItem text='Block' />
    </Grid>
    <Grid xs={6} md={2}>
      <MockItem text='Block' />
    </Grid>
    <Grid xs={6} md={3}>
      <MockItem text='Block' />
    </Grid>
  </Grid.Container>
);

export const HideElements = () => (
  <Grid.Container gap={2} justify='center'>
    <Grid xs={0} md={6}>
      <MockItem text='Block' />
    </Grid>
    <Grid xs={0} md={6}>
      <MockItem text='Block' />
    </Grid>
    <Grid xs={12}>
      <MockItem text='Block' />
    </Grid>
    <Grid xs={12}>
      <MockItem text='Block' />
    </Grid>
  </Grid.Container>
);

export const AutoWidth = () => (
  <>
    <Grid.Container gap={2} justify='center'>
      <Grid xs>
        <MockItem text='Block' />
      </Grid>
      <Grid xs>
        <MockItem text='Block' />
      </Grid>
      <Grid xs>
        <MockItem text='Block' />
      </Grid>
    </Grid.Container>
    <Spacer y={1} />
    <Grid.Container gap={2} justify='center'>
      <Grid xs>
        <MockItem text='Block' />
      </Grid>
      <Grid xs={12}>
        <MockItem text='Block' />
      </Grid>
      <Grid xs>
        <MockItem text='Block' />
      </Grid>
    </Grid.Container>
  </>
);
