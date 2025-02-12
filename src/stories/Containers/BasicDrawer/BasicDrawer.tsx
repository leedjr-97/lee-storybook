import {
  Button,
  Drawer,
  FormHelperText,
  Skeleton,
  Typography,
} from "@mui/material";
import { BasicButton, ConfirmButton } from "../../Interactable";

export interface BasicDrawerProps {
  isOpen: boolean;
  toggleDrawer: (newState: boolean) => void;

  title?: string;
  children?: React.ReactNode;
  childrenLoading?: boolean;

  // Functional
  onReset?: () => void;
  resetText?: string;
  resetLoading?: boolean;
  onSave?: () => void;
  saveText?: string;
  saveLoading?: boolean;
  saveErrorText?: string;

  // UI
  placement?: "right" | "left" | "top" | "bottom";
  drawerWidth?: number;
}

export const BasicDrawer = ({
  isOpen,
  toggleDrawer,

  title,
  children,
  childrenLoading,

  // Functional
  onReset,
  resetText = "Reset",
  resetLoading,
  onSave,
  saveText = "Save",
  saveLoading,
  saveErrorText,

  // UI
  placement = "right",
  drawerWidth = 500,
}: BasicDrawerProps) => {
  const handleClose = () => {
    toggleDrawer(false);
  };

  return (
    <Drawer open={isOpen} onClose={handleClose} anchor={placement}>
      <div
        style={{
          width: `${drawerWidth}px`,
          marginTop: "16px",
          display: "flex",
          flexDirection: "column",
          flex: 1,
          height: "100%",
          overflow: "hidden",
        }}
      >
        <div style={{ margin: "0 8px 0 8px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Button
              variant={"outlined"}
              style={{ justifySelf: "flex-start" }}
              onClick={handleClose}
            >
              {"Close"}
            </Button>
            {onReset && (
              <BasicButton
                title={resetText}
                onClick={onReset}
                loading={resetLoading}
                variant={"outlined"}
                color={"error"}
              />
            )}
          </div>
          {title && (
            <Typography
              variant={"h4"}
              style={{ alignSelf: "center", margin: "8px 0 0 8px" }}
            >
              {title}
            </Typography>
          )}
        </div>

        <div
          style={{
            display: "flex",
            padding: "16px",
            flex: 1,
            overflowY: "scroll",
          }}
        >
          {childrenLoading ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <Skeleton width={"100%"} height={"100px"} />
              <Skeleton width={"100%"} height={"100px"} />
              <Skeleton width={"100%"} height={"100px"} />
              <Skeleton width={"100%"} height={"100px"} />
            </div>
          ) : (
            children
          )}
        </div>

        {onSave && (
          <div style={{ margin: "16px", justifySelf: "flex-end" }}>
            <ConfirmButton
              title={saveText}
              onClick={onSave}
              loading={saveLoading}
              fullWidth
            />
            <FormHelperText error>{saveErrorText}</FormHelperText>
          </div>
        )}
      </div>
    </Drawer>
  );
};
