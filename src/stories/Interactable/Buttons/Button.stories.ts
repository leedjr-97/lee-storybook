import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { BasicButton } from "./BasicButton";
import { ConfirmButton } from "./ConfirmButton";
import { DeleteButton } from "./DeleteButton";

const meta = {
  title: "Interactable/Button",
  component: BasicButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof BasicButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicButtonExample: Story = {
  args: {
    title: "Basic Button",
  },
};

const confirmButtonMeta = {
  title: "Interactable/Button",
  component: ConfirmButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof ConfirmButton>;
type ConfirmButtonStory = StoryObj<typeof confirmButtonMeta>;

export const ConfirmButtonExample: ConfirmButtonStory = {
  args: {},
};

const deleteButtonMeta = {
  title: "Interactable/Button",
  component: DeleteButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof DeleteButton>;
type DeleteButtonStory = StoryObj<typeof deleteButtonMeta>;

export const DeleteButtonExample: DeleteButtonStory = {
  args: {},
};
