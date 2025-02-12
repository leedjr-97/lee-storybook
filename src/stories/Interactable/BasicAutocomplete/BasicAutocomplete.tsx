import {
  Autocomplete,
  FormControl,
  FormHelperText,
  TextField,
} from "@mui/material";
import { SelectOption } from "../../types";

export interface BasicAutocompleteProps {
  label?: string;
  value: SelectOption | null;
  options: SelectOption[];
  onChange: (value: SelectOption | null) => void;

  loading?: boolean;
  maxOptionHeight?: number;
  errorText?: string;
}

export const BasicAutocomplete = ({
  label,
  value,
  options,
  onChange,

  loading,
  maxOptionHeight,
  errorText,
}: BasicAutocompleteProps) => {
  return (
    <FormControl fullWidth>
      <Autocomplete
        value={value}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        options={options}
        onChange={(_, value) => {
          onChange(value ?? null);
        }}
        renderInput={(params) => <TextField {...params} label={label} />}
        fullWidth
        getOptionLabel={(option) => option.name}
        loading={loading}
        slotProps={{
          listbox: {
            style: {
              maxHeight: maxOptionHeight,
            },
          },
        }}
      />
      {errorText && <FormHelperText error>{errorText}</FormHelperText>}
    </FormControl>
  );
};
