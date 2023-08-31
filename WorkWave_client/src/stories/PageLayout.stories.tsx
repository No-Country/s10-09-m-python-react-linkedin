import type { Meta, StoryObj } from "@storybook/react";
import Layout from "../pages/layout/Layout";

const meta = {
  title: "Example/PageLayout",
  component: Layout,
  tags: ["root/Layout"],
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    step: 1,
  },
};
