import { Typography } from "@mui/material";

export interface LabelValueProps {
  label: string;
  value: string | number;
  fontSize?: number;
  styleOverrides?: React.CSSProperties;
}

export const LabelValue = ({
  label,
  value,
  fontSize = 20,
  styleOverrides,
}: LabelValueProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        ...styleOverrides,
      }}
    >
      <Typography
        variant={"overline"}
        style={{ marginRight: "8px", lineHeight: 2.66 }}
        fontSize={fontSize ? `${fontSize}px` : undefined}
      >{`${label}:`}</Typography>
      <Typography
        variant={"body2"}
        style={{ lineHeight: 2.66 }}
        fontSize={fontSize ? `${fontSize}px` : undefined}
      >
        {value}
      </Typography>
    </div>
  );
};
