import type { Meta, StoryObj } from "@storybook/react";
import Footer2 from "../components/Footer/Footer";

const meta = {
  title: "Example/ComponentFooter2",
  component: Footer2,
  tags: ["footer2/root"],
} satisfies Meta<typeof Footer2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
