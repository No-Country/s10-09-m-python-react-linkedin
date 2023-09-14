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
import AddImage from "./AddImage";
import { SyntheticEvent } from "react";

export default function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    console.log(e);
  }

  function handleTitleChange(e: SyntheticEvent) {
    console.log(e);
  }

  return (
    <>
      <form onSubmit={() => handleSubmit}>
        <Button onPress={onOpen} className="bg-inherit text-[#4318FF] text-md ">
          <p className="text-4xl">+</p>
          <p className="pt-1">Nueva Publicación</p>
        </Button>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement="top-center"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  ¿Qué piensas?
                </ModalHeader>
                <ModalBody>
                  <label htmlFor="titulo">Título</label>
                  <Input
                    autoFocus
                    variant="bordered"
                    onChange={handleTitleChange}
                  />
                  <label htmlFor="text"></label>
                  <Textarea label="Descripción" labelPlacement="outside" />
                  <AddImage />
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onPress={onClose}>
                    Publicar
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </form>
    </>
  );
}
