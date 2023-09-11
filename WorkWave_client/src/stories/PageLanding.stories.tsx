import type { Meta, StoryObj } from "@storybook/react";
import Landing from "../components/LandingHeader/LandingHeader";

const meta = {
  title: "Example/PageLanding",
  component: Landing,
  tags: ["root/Landing"],
} satisfies Meta<typeof Landing>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
