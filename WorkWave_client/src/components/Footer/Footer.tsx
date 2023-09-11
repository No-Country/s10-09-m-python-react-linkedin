import { AiOutlineQuestionCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

import {
  Modal,
  Image,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

import logo from "../../assets/LOGOHorizontal.avif";
function Footer() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <footer className="footer gap-20 p-5 md:p-10 pt-16 bg-deep-blue flex flex-col md:flex-row  md:justify-around text-white h-auto lg:h-[215px]">
        <div className="flex w-full justify-around gap-6 ss:gap-20">
          <div>
            <div className="w-24">
              <Link to={"/"}>
                <Image
                  isZoomed
                  src={logo}
                  alt="logo"
                  className="object-contain"
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2 ss:gap-4">
            <Link to={"/nosotros"} className="link link-hover">
              <p>Quienes Somos</p>
            </Link>
            <Link to={"/empleos"} className="link link-hover">
              <p>Acerca de WorkWake</p>
            </Link>
            <Link to={"feed"} className="link link-hover">
              <p>Politicas de Cookies</p>
            </Link>
            <Link to={"notificaciones"} className="link link-hover">
              <p>Politicas de Uso</p>
            </Link>
          </div>
          <div className="flex w-40 flex-col gap-2 ss:gap-4">
            <Link to={"notificaciones"} className="link link-hover">
              <p>Politicas de Seguridad</p>
            </Link>
            <Link to={"notificaciones"} className="link link-hover">
              <p>Politicas de Copyrigtht</p>
            </Link>
            <Link to={"notificaciones"} className="link link-hover">
              <p>Politicas de Privacidad</p>
            </Link>
          </div>
        </div>
        <div className="flex relative w-full justify-center sx:gap-16 sm:gap-5">
          <button
            onClick={() => void onOpen()}
            className="btn flex justify-between text-white hover:text-black bg-[#3311DB] w-28 sm:w-[166px]"
          >
            AYUDA
            <AiOutlineQuestionCircle />
          </button>
        </div>
      </footer>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Ayuda</ModalHeader>
              <ModalBody>
                <p>
                  Si tiene algun inconveniente al usar la app escribanos en{" "}
                  <a
                    href="https://github.com/No-Country/s10-09-m-python-react-linkedin/issues"
                    target="_blank"
                    className="link link-hover"
                  >
                    Github
                  </a>
                </p>
                <p>
                  Si quiere contactarnos escribanos a nuestro correo{" "}
                  <span className="link link-hover">WorkWave2023@gmail.com</span>
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default Footer;
