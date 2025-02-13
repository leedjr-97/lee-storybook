import { Meta, StoryObj } from "@storybook/react/*";
import { RowInputContainer as RowInputContainerComponent } from "./RowInputContainer";
import { TextField } from "@mui/material";

const meta = {
  title: "Containers/RowInputContainer",
  component: RowInputContainerComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RowInputContainerComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RowInputContainer: Story = {
  args: {
    label: "Label",
    children: <TextField fullWidth />,
  },
};

export const RowInputContainerWithDescription: Story = {
  args: {
    label: "Label",
    children: <TextField fullWidth />,
    inputDescription: "This is a tooltip to help describe your input!",
  },
};

export const ErrorRowInputContainer: Story = {
  args: {
    label: "Label",
    children: <TextField fullWidth error={true} />,
    error: true,
    errorMessage: "This is an error message",
  },
};
