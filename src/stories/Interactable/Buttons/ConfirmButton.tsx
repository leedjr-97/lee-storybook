import { Button } from "@mui/material";

export interface ConfirmButtonProps {
  title?: string;
  onClick: () => void;
}
export const ConfirmButton = ({ title = "Confirm" }: ConfirmButtonProps) => {
  return (
    <Button variant={"contained"} color={"success"}>
      {title}
    </Button>
  );
};
