import { Meta, StoryObj } from "@storybook/react";
import { BasicDialog as BasicDialogComponent } from "./BasicDialog";
import { useState } from "react";
import { BasicButton } from "../../Interactable/Buttons/BasicButton";

const meta = {
  title: "Containers/BasicDialog",
  component: BasicDialogComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BasicDialogComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

const BasicUsage = ({
  dialogTitle,
  children,
}: {
  dialogTitle: string;
  children: React.ReactNode;
}) => {
  const [isOpen, toggleOpen] = useState(false);

  return (
    <>
      <BasicButton
        title={"Open Dialog"}
        onClick={() => {
          toggleOpen((val) => !val);
        }}
      />

      <BasicDialogComponent
        isOpen={isOpen}
        toggleDialog={toggleOpen}
        dialogTitle={dialogTitle}
      >
        {children}
      </BasicDialogComponent>
    </>
  );
};

export const BasicDialog: Story = {
  render: ({ dialogTitle, children }) => (
    <BasicUsage dialogTitle={dialogTitle} children={children} />
  ),
  args: {
    isOpen: false,
    toggleDialog: () => {},
    dialogTitle: "Basic Dialog",
    children: "With some content inside the dialog",
  },
};
