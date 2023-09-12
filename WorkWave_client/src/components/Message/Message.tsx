import React from "react";

interface MessageProps {
  own: boolean;
}

const Message: React.FC<MessageProps> = ({ own }) => {
  return (
    <div className={`flex flex-col mt-4 ${own ? "items-end" : ""}`}>
      <div className="flex">
        <img
          className="object-cover w-8 h-8 mr-2 rounded-full"
          src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <p
          className={`p-2 rounded-2xl ${
            own ? "bg-gray-300 text-black" : "bg-blue-500 text-white"
          } max-w-xs`}
        >
          Hola
        </p>
      </div>
      <div className="mt-2 text-sm">Hace 1 hora</div>
    </div>
  );
};

export default Message;
