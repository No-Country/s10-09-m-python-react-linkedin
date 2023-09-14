import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Textarea,
} from "@nextui-org/react";
// import AddImage from "./AddImage";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { postPublication } from "../../services/Publications";

interface FormData {
  title: string;
  content: string;
  photo: string;
  video: string;
  post_date: Date;
  usersCustomuserId: number;
}

export default function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const userData = JSON.parse(localStorage.getItem("user") ?? "{}");

  const postSchema = yup.object({
    title: yup.string().defined().default("").required("Titulo es obligatorio"),
    content: yup.string().default("").required("Descripción es obligatorio"),
    photo: yup.string().default(""),
    video: yup.string().default(""),
    post_date: yup.date().default(() => new Date()),
    usersCustomuserId: yup
      .number()
      .required("falta id usuario")
      .default(userData.id),
  });
  const { register, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(postSchema),
  });
  const onSubmit = async (data: FormData) => {
    postPublication({ ...data });
  };

  return (
    <>
      <Button onPress={onOpen} className="bg-inherit text-[#4318FF] text-md ">
        <p className="text-4xl">+</p>
        <p className="pt-1">Nueva Publicación</p>
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <form onSubmit={handleSubmit(onSubmit)}>
                <ModalHeader className="flex flex-col gap-1">
                  ¿Qué piensas?
                </ModalHeader>
                <ModalBody>
                  <label htmlFor="titulo">Título</label>
                  <Input
                    autoFocus
                    id="title"
                    type="text"
                    autoComplete="title"
                    {...register("title")}
                  />

                  <label htmlFor="text">Descripción</label>
                  <Textarea
                    id="content"
                    autoComplete="content"
                    {...register("content")}
                  />
                  {/* <AddImage /> */}
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onPress={onClose} type="submit">
                    Publicar
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
