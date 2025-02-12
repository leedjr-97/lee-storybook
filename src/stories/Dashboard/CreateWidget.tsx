import { Card, IconButton } from "@mui/material";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";

export interface CreateWidgetProps {
  onCreate: () => void;
  containerStyle?: React.CSSProperties;
}

export const CreateWidget = ({
  onCreate,
  containerStyle,
}: CreateWidgetProps) => {
  return (
    <Card style={containerStyle}>
      <IconButton
        onClick={onCreate}
        size={"large"}
        style={{ borderRadius: 5, width: "100%", height: "100%" }}
      >
        <AddCircleOutlineRoundedIcon fontSize={"large"} />
      </IconButton>
    </Card>
  );
};
