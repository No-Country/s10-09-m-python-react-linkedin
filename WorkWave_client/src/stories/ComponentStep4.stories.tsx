import type { Meta, StoryObj } from "@storybook/react";
import Step4 from "../components/RegisterDetail/Step4";

const meta = {
  title: "Example/ComponentStep4",
  component: Step4,
  tags: ["root/Stepper"],
} satisfies Meta<typeof Step4>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    step: 1,
  },
};
