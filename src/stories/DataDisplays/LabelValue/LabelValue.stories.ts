import type { Meta, StoryObj } from "@storybook/react";
import { LabelValue } from "./LabelValue";

const meta = {
  title: "DataDisplays/LabelValue",
  component: LabelValue,
  parameters: {},

  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof LabelValue>;

export default meta;

type Story = StoryObj<typeof meta>;

export const StandardExample: Story = {
  args: {
    label: "Label",
    value: "Value",
  },
};
