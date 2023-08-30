import type { Meta, StoryObj } from "@storybook/react";
import Step3 from "../components/RegisterDetail/Step3";

const meta = {
  title: "Example/ComponentStep3",
  component: Step3,
  argTypes: {
    step: Number,
  },
  tags: ["root/Step3"],
} satisfies Meta<typeof Step3>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { step: 5 },
};
