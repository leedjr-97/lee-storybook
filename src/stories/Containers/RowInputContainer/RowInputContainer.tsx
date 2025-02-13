import { FormHelperText, Grid2 as Grid, Typography } from "@mui/material";
import { InfoTooltip } from "../../DataDisplays";

export interface RowInputContainerProps {
  label: string;
  inputDescription?: string;
  children: React.ReactNode;
  error?: boolean;
  errorMessage?: string;
  containerStyles?: React.CSSProperties;
}
export const RowInputContainer = ({
  label,
  inputDescription,
  children,
  error,
  errorMessage,
  containerStyles,
}: RowInputContainerProps) => {
  return (
    <Grid
      container
      spacing={1}
      style={{
        margin: "16px",
        alignItems: "center",
        ...containerStyles,
      }}
    >
      <Grid size={4} style={{ display: "flex", alignItems: "center" }}>
        <Typography color={error ? "error" : undefined}>{label}</Typography>
        {!!inputDescription && (
          <InfoTooltip tooltipTitle={inputDescription} size={"small"} />
        )}
      </Grid>
      <Grid size={8}>{children}</Grid>
      {error && (
        <>
          <Grid size={4} />
          <Grid size={8}>
            <FormHelperText error={true} style={{ margin: 0 }}>
              {errorMessage}
            </FormHelperText>
          </Grid>
        </>
      )}
    </Grid>
  );
};
