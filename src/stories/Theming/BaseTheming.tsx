declare module "@mui/material/styles" {
  interface TypeGradient {
    [key: string]: string;
  }

  interface MyPaletteOptions {
    gradient: TypeGradient;
    blue: TypeGradient;
    purple: TypeGradient;
    green: TypeGradient;
    red: TypeGradient;
    pink: TypeGradient;
    yellow: TypeGradient;
    cyan: TypeGradient;
    zinc: TypeGradient;
  }

  interface TypeBackground {
    opposite: string;
  }
}

declare module "@mui/material/styles" {
  interface Palette extends MyPaletteOptions {}
  interface PaletteOptions extends MyPaletteOptions {}
}
