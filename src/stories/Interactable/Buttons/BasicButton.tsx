import { Button, ButtonProps, CircularProgress } from "@mui/material";

export interface BasicButtonProps extends ButtonProps {
  title: string;
  onClick: () => void;
  loading?: boolean;
}
export const BasicButton = ({
  title,
  onClick,
  loading,
  ...props
}: BasicButtonProps) => {
  return (
    <Button variant={"contained"} onClick={onClick} {...props}>
      {loading && <CircularProgress size={16} style={{ marginRight: "8px" }} />}
      {title}
    </Button>
  );
};
