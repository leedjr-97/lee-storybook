import { Meta, StoryObj } from "@storybook/react/*";
import { BasicAutocomplete, BasicAutocompleteProps } from "./BasicAutocomplete";
import { SelectOption } from "../../types";
import { useState } from "react";

const options: SelectOption[] = [
  {
    id: 0,
    name: "Option 1",
  },
  {
    id: 1,
    name: "Option 2",
  },
  {
    id: 2,
    name: "Option 3",
  },
];
const meta = {
  title: "Interactable/BasicAutocomplete",
  component: BasicAutocomplete,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BasicAutocomplete>;

export default meta;
type Story = StoryObj<typeof meta>;

const BasicUsage = (props: BasicAutocompleteProps) => {
  const [value, setValue] = useState<SelectOption | null>(null);

  return (
    <div style={{ width: "200px" }}>
      <BasicAutocomplete
        {...props}
        value={value}
        onChange={(value) => {
          setValue(value);
        }}
      />
    </div>
  );
};

export const Autocomplete: Story = {
  render: (props) => <BasicUsage {...props} />,
  args: {
    label: "Autocomplete",
    value: null,
    onChange: () => {},
    options: options,
  },
};
