import type { Meta, StoryObj } from "@storybook/react";
import Step2 from "../components/RegisterDetail/Step2";

const meta = {
  title: "Example/ComponentStep2",
  component: Step2,
  tags: ["root/Step2"],
} satisfies Meta<typeof Step2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    step: 1,
  },
};
