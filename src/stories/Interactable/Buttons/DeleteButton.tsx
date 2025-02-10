import { Button } from "@mui/material";

export interface DeleteButtonProps {
  title?: string;
  onClick: () => void;
}
export const DeleteButton = ({ title = "Delete" }: DeleteButtonProps) => {
  return (
    <Button variant={"contained"} color={"error"}>
      {title}
    </Button>
  );
};
