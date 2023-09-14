import { Button, Image } from "@nextui-org/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { TokenContext } from "../../context/TokenContext";

function Step2() {
  const { user } = useContext(TokenContext);
  console.log(user);

  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isLoadingState] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleImageClick = async () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";

    fileInput.onchange = (event: Event) => {
      const target = event.target as HTMLInputElement;
      const file = target.files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    };

    fileInput.click();
  };

  return (
    <div>
      <div className="flex flex-col justify-center  items-center mt-16">
        <h2 className="text-2xl px-4 mb-4 text-white w-full md:w-fit">
          INGRESA TUS DATOS
        </h2>
        <p className="text-white justify-center items-center flex px-4 w-full">
          Elige una fotografía para tu perfil{" "}
        </p>
        <Image
          onClick={handleImageClick}
          src={previewImage || "/frontimg.avif"}
          alt="frontImg"
          width={409}
          height={408}
          className={`cursor-pointer rounded-full ${
            previewImage ? "my-4" : ""
          }`}
        />
      </div>
      <div className="flex flex-col gap-4 w-full px-4 md:px-0 md:w-auto">
        <Button
          variant="solid"
          radius="full"
          fullWidth
          size="lg"
          className="p-2 hover:bg-black duration-500"
          onPress={() => navigate("/registro/step3")}
          isLoading={isLoadingState}
        >
          Cargar Imagen
        </Button>
        <Button
          variant="solid"
          onPress={() => navigate("/registro/step3")}
          radius="full"
          fullWidth
          size="lg"
          className="p-2 hover:bg-white hover:text-black duration-500"
        >
          Omitir Carga
        </Button>
      </div>
    </div>
  );
}

export default Step2;
