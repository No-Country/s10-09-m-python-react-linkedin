import { useState } from "react";
import Conversations from "../../components/Conversations/Conversations";
import Message from "../../components/Message/Message";
import FriendsOnline from "../../components/FriendsOnline/FriendsOnline";
function Chat() {
  const [currentChat] = useState(null);
  return (
    <div className="h-[calc(100vh-70px)] flex  justify-around  bg-[#2B3674]">
      {/* chatMenu */}
      <div className="pt-4">
        <div>
          <input
            type="text"
            placeholder="Buscar amigos"
            className="w-full max-w-xs input input-bordered input-sm"
          />
          <Conversations />
          <Conversations />
          <Conversations />
          <Conversations />
        </div>
      </div>
      {/* chatBox */}
      <div className="pt-4">
        <div className="relative flex flex-col justify-between h-full ">
          {!currentChat ? (
            <>
              <div className="h-full pr-10 overflow-y-scroll ">
                <Message own={false} />
                <Message own={true} />
                <Message own={false} />
                <Message own={true} />
                <Message own={true} />
                <Message own={true} />
              </div>
              <div className="flex items-center justify-between gap-4 mt-5">
                <textarea
                  className="p-10 w-80 h-90"
                  placeholder="write something..."
                ></textarea>
                <button className="w-20 h-10 text-white bg-teal-500 rounded cursor-pointer rounded-10">
                  Send
                </button>
              </div>
            </>
          ) : (
            <span className="absolute text-gray-300 cursor-default top-10 text-50">
              Open a conversation to start a chat.
            </span>
          )}
        </div>
      </div>
      {/* chatOnline */}
      <div className="pt-4">
        <div className="h-full p-10">
          <FriendsOnline />
        </div>
      </div>
    </div>
  );
}

export default Chat;
