import type { Meta, StoryObj } from "@storybook/react";

type ButtonProps = {
  text: string; // texto que aparecera en el boton
  blue: boolean; // cambio de estilos del boton si es azul o transparente
  routing: string;
  width: string;
  // ruta a la que va a enviar el boton
};
function Button(props: ButtonProps) {
  const { text = "", blue = true, width = "" } = props;
  return (
    <button
      className={`h-11 ${width} text-[#D9D9D9] w-[300px] sm:w-[450px]   rounded-lg p-1 text-center border-2  ${
        blue ? "bg-[#4F46E5] text-[#000C2C]" : "bg-inherit "
      } `}
    >
      {text}
    </button>
  );
}

const meta = {
  title: "Example/ComponentButtons",
  component: Button,

  tags: ["componentButtons/root"],
  argTypes: {
    text: String,
    blue: Boolean,
    width: String,
    routing: String,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: "",
    blue: true,
    text: "hola",
    routing: "/",
  },
};
