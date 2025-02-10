import { IconButton, Tooltip, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

type PlacementTypes =
  | "bottom-end"
  | "bottom-start"
  | "bottom"
  | "left-end"
  | "left-start"
  | "left"
  | "right-end"
  | "right-start"
  | "right"
  | "top-end"
  | "top-start"
  | "top";
export interface InfoTooltipProps {
  tooltipTitle: string;
  tooltipPlacement?: PlacementTypes;
  size?: "small" | "medium" | "large";
  tooltipStyles?: React.CSSProperties;
  iconButtonStyles?: React.CSSProperties;
}

export const InfoTooltip = ({
  tooltipTitle,
  tooltipPlacement,
  size,
  tooltipStyles,
  iconButtonStyles,
}: InfoTooltipProps) => {
  return (
    <Tooltip
      title={
        <Typography fontSize={14} style={{ margin: "4px" }}>
          {tooltipTitle}
        </Typography>
      }
      placement={tooltipPlacement}
      style={tooltipStyles}
    >
      <IconButton style={iconButtonStyles}>
        <InfoOutlinedIcon fontSize={size ?? "medium"} />
      </IconButton>
    </Tooltip>
  );
};
