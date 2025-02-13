import { BasicDialog } from "../../Containers";

export interface AreYouSureDialogProps {
  isOpen: boolean;
  toggleDialog: (newState: boolean) => void;
  title?: string;
  message: string;

  onConfirm: () => void;
  onCancel: () => void;
}

export const AreYouSureDialog = ({
  isOpen,
  toggleDialog,
  title = "Are You Sure",
  message,

  onCancel,
  onConfirm,
}: AreYouSureDialogProps) => {
  return (
    <BasicDialog
      isOpen={isOpen}
      dialogTitle={title}
      toggleDialog={toggleDialog}
      children={message}
      handleCancel={onCancel}
      handleConfirm={onConfirm}
      confirmText={"Confirm"}
    />
  );
};
