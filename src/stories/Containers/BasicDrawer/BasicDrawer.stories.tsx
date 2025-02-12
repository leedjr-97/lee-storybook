import { Meta, StoryObj } from "@storybook/react";
import { BasicDrawer, BasicDrawerProps } from "./BasicDrawer";
import { useState } from "react";
import { BasicButton } from "../../Interactable";
import { Typography } from "@mui/material";

const meta = {
  title: "Containers/BasicDrawer",
  component: BasicDrawer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BasicDrawer>;

export default meta;
type Story = StoryObj<typeof meta>;

const BasicUsage = ({ title, children, ...props }: BasicDrawerProps) => {
  const [isOpen, toggleOpen] = useState(false);

  return (
    <>
      <BasicButton
        title={"Open Drawer"}
        onClick={() => {
          toggleOpen((val) => !val);
        }}
      />

      <BasicDrawer
        title={title}
        {...props}
        isOpen={isOpen}
        toggleDrawer={toggleOpen}
      >
        {children}
      </BasicDrawer>
    </>
  );
};

export const Drawer: Story = {
  render: (props) => <BasicUsage {...props} />,
  args: {
    isOpen: false,
    toggleDrawer: () => {},
    title: "Basic Drawer Title",
    children: (
      <div>
        <Typography>
          {"You can have a title, cancel button, and reset button on the top."}
        </Typography>

        <div style={{ height: "400px" }} />

        <Typography>{"An the center is scrollable!"}</Typography>

        <div style={{ height: "400px" }} />

        <Typography>{"You can have a save button on the bottom!"}</Typography>
      </div>
    ),

    onSave: () => {},
  },
};

export const LoadingDrawer: Story = {
  render: (props) => <BasicUsage {...props} />,
  args: {
    isOpen: false,
    toggleDrawer: () => {},
    title: "Loading States",
    children: <div />,
    childrenLoading: true,

    onSave: () => {},
    saveLoading: true,
    onReset: () => {},
    resetLoading: true,
  },
};
