import React from "react";
import { format } from "timeago.js";
import { MessageTypes } from "../../pages/chat/Chat";
interface MessageProps {
  own: boolean;
  message: MessageTypes;
}

const Message: React.FC<MessageProps> = ({ message, own }) => {
  return (
    <div className={`flex flex-col mt-4 ${own ? "" : "items-end"}`}>
      <div className="flex items-end">
        <img
          className="object-cover w-8 h-8 mr-2 rounded-full"
          // src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          src={
            own
              ? "https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              : "https://images.pexels.com/photos/12831255/pexels-photo-12831255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt=""
        />

        <div className="chat chat-start">
          <div className="chat-header">
            <time className="text-xs opacity-50">
              {format(message.createdAt)}
            </time>
          </div>

          <div
            className={` chat-bubble ${
              own ? "chat-bubble bg-white text-black" : "chat-bubble-accent"
            }`}
          >
            {message.text}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
