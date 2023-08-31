import type { Meta, StoryObj } from "@storybook/react";
import Empleos from "../pages/empleos/Empleos";

const meta = {
  title: "Example/ComponentEmpleos",
  component: Empleos,
  tags: ["root/Empleos"],
} satisfies Meta<typeof Empleos>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
