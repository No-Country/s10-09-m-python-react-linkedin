import type { Meta, StoryObj } from "@storybook/react";
import perfil from "../pages/perfil/Perfil";

const meta = {
  title: "Example/PagePerfil",
  component: perfil,
  tags: ["root/Pageperfil"],
} satisfies Meta<typeof perfil>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    step: 1,
  },
};
