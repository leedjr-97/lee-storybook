import { Meta, StoryObj } from "@storybook/react/*";
import { CreateWidget } from "./CreateWidget";

const RenderDashboard = () => {
  return <div></div>;
};

const meta = {
  title: "Prebuilt/Dashboard/Dashboard",
  component: RenderDashboard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RenderDashboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dashboard: Story = {
  render: () => <RenderDashboard />,
  args: {},
};

const createWidgetMeta = {
  title: "Prebuilt/Dashboard/CreateWidget",
  component: CreateWidget,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CreateWidget>;
type CreateWidgetStory = StoryObj<typeof createWidgetMeta>;

export const CreateWidgetStory: CreateWidgetStory = {
  render: ({ onCreate }) => (
    <div style={{ width: "500px", height: "200px" }}>
      <CreateWidget onCreate={onCreate} containerStyle={{ height: "100%" }} />
    </div>
  ),
  args: {
    onCreate: () => {},
  },
};
