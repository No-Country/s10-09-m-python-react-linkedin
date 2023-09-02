import type { Meta, StoryObj } from "@storybook/react";
import Step1 from "../components/RegisterDetail/Step1";

const meta = {
  title: "Example/ComponentStep1",
  component: Step1,
  tags: ["root/Step1"],
} satisfies Meta<typeof Step1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
