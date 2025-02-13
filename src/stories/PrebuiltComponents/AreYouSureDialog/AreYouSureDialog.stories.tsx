import { Meta, StoryObj } from "@storybook/react/*";
import AreYouSureDialog, { AreYouSureDialogProps } from "./AreYouSureDialog";
import { BasicButton } from "../../Interactable";
import { useState } from "react";

const meta = {
  title: "Prebuilt/Dialogs/AreYouSureDialog",
  component: AreYouSureDialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AreYouSureDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

const BasicUsage = (props: AreYouSureDialogProps) => {
  const [isOpen, toggleOpen] = useState(false);

  return (
    <>
      <BasicButton
        title={"Open Dialog"}
        onClick={() => {
          toggleOpen((val) => !val);
        }}
      />

      <AreYouSureDialog {...props} isOpen={isOpen} toggleDialog={toggleOpen} />
    </>
  );
};

export const AreYouSureDialogStory: Story = {
  render: (props) => <BasicUsage {...props} />,
  args: {
    isOpen: false,
    toggleDialog: () => {},
    message: "Are you sure you want to perform some action?",
    onConfirm: () => {},
    onCancel: () => {},
  },
};
