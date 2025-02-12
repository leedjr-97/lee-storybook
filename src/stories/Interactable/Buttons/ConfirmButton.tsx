import { Button, ButtonProps, CircularProgress } from "@mui/material";

export interface ConfirmButtonProps extends ButtonProps {
  title?: string;
  onClick: () => void;
  loading?: boolean;
}
export const ConfirmButton = ({
  title = "Confirm",
  onClick,
  loading,
  ...props
}: ConfirmButtonProps) => {
  return (
    <Button
      variant={"contained"}
      color={"success"}
      onClick={onClick}
      {...props}
    >
      {loading && (
        <CircularProgress
          size={20}
          style={{ marginRight: "16px", color: "white" }}
        />
      )}
      {title}
    </Button>
  );
};
