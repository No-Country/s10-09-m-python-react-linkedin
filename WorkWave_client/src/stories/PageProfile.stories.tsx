import type { Meta, StoryObj } from "@storybook/react";
import Profile from "../pages/Profile/Profile";

const meta = {
  title: "Example/PageProfile",
  component: Profile,
  tags: ["root/Profile"],
} satisfies Meta<typeof Profile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    step: 1,
  },
};
