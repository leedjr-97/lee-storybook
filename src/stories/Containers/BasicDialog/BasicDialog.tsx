import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { DeleteButton } from "../../Interactable/Buttons/DeleteButton";
import { ConfirmButton } from "../../Interactable/Buttons/ConfirmButton";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

export interface BasicDialogProps {
  isOpen: boolean;
  toggleDialog: (newState: boolean) => void;
  dialogTitle: string;
  children: React.ReactNode;

  closeIcon?: boolean;

  handleCancel?: () => void;
  cancelText?: string;
  handleConfirm?: () => void;
  confirmText?: string;
}

export const BasicDialog = ({
  isOpen,
  toggleDialog,
  dialogTitle,
  children,
  closeIcon = true,

  handleCancel,
  cancelText = "Cancel",
  handleConfirm,
  confirmText,
}: BasicDialogProps) => {
  const handleClose = () => {
    toggleDialog(false);
  };

  return (
    <Dialog open={isOpen} onClose={handleClose} fullWidth>
      <DialogTitle
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {dialogTitle}
        {closeIcon && (
          <IconButton onClick={handleClose}>
            <CloseRoundedIcon />
          </IconButton>
        )}
      </DialogTitle>

      <DialogContent>{children}</DialogContent>

      {(handleCancel || handleConfirm) && (
        <DialogActions>
          <DeleteButton
            onClick={handleCancel ?? handleClose}
            title={cancelText}
          />

          {handleConfirm && (
            <ConfirmButton onClick={handleConfirm} title={confirmText} />
          )}
        </DialogActions>
      )}
    </Dialog>
  );
};
