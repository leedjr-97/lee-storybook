import type { Meta, StoryObj } from "@storybook/react";
import { InfoTooltip } from "./InfoTooltip";

const meta = {
  title: "DataDisplays/InfoTooltip",
  component: InfoTooltip,
  parameters: {},

  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof InfoTooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InfoTooltipExample: Story = {
  args: {
    tooltipTitle: "This is an informational tooltip",
  },
};
