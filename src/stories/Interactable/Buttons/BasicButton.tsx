import { Button } from "@mui/material";

export interface BasicButtonProps {
  title: string;
  onClick: () => void;
}
export const BasicButton = ({ title, onClick }: BasicButtonProps) => {
  return (
    <Button variant={"contained"} onClick={onClick}>
      {title}
    </Button>
  );
};
