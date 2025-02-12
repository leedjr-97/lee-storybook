import { Meta, StoryObj } from "@storybook/react/*";
import { BasicCard, BasicCardProps } from "./BasicCard";
import { Typography } from "@mui/material";
import { ConfirmButton, DeleteButton } from "../../Interactable";

const meta = {
  title: "Containers/BasicCard",
  component: BasicCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BasicCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const BasicUsage = ({ ...props }: BasicCardProps) => {
  return (
    <div style={{ width: "400px" }}>
      <BasicCard {...props} />
    </div>
  );
};

export const Card: Story = {
  render: (props) => <BasicUsage {...props} />,
  args: {
    title: "Card Title",
    content: (
      <div>
        <Typography>{"This is a basic, informational card"}</Typography>
      </div>
    ),
  },
};

export const CardWithActions: Story = {
  render: (props) => <BasicUsage {...props} />,
  args: {
    title: "Card Title",
    content: (
      <div>
        <Typography>
          {"This is a card with a few actions on the bottom"}
        </Typography>
      </div>
    ),
    actions: (
      <>
        <DeleteButton onClick={() => {}} />
        <ConfirmButton onClick={() => {}} />
      </>
    ),
  },
};
