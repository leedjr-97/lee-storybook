import { Card, CardActions, CardContent, CardHeader } from "@mui/material";
import { JSX } from "react";

export interface BasicCardProps {
  title: string;
  description?: string;

  content: string | JSX.Element;
  actions?: JSX.Element;
}

export const BasicCard = ({
  title,
  description,
  content,
  actions,
}: BasicCardProps) => {
  return (
    <Card>
      <CardHeader title={title} subheader={description} />
      <CardContent style={{ marginTop: 0 }}>{content}</CardContent>
      {actions && (
        <CardActions style={{ display: "flex", justifyContent: "flex-end" }}>
          {actions}
        </CardActions>
      )}
    </Card>
  );
};
