import type { Meta, StoryObj } from "@storybook/react";
import register from "../pages/register/index";

const meta = {
  title: "Example/PageRegister",
  component: register,
  tags: ["root/register"],
} satisfies Meta<typeof register>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
