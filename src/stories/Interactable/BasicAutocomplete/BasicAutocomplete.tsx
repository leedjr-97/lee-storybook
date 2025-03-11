import {
  Autocomplete,
  FormControl,
  FormHelperText,
  TextField,
} from "@mui/material";
import { SelectOption } from "../../types";
import { useMemo } from "react";

export interface BasicAutocompleteProps<T extends SelectOption> {
  label?: string;
  value: SelectOption | number | null;
  options: T[];
  onChange: (value: SelectOption | null) => void;

  loading?: boolean;
  maxOptionHeight?: number;
  errorText?: string;
}

export function BasicAutocomplete<T extends SelectOption>({
  label,
  value,
  options,
  onChange,

  loading,
  maxOptionHeight,
  errorText,
}: BasicAutocompleteProps<T>) {
  const actualValue = useMemo(() => {
    if (typeof value === "number") {
      return options?.find((option) => option.id === value);
    }
    return value;
  }, [value, options]);
  return (
    <FormControl fullWidth>
      <Autocomplete
        value={actualValue}
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
}
