import { useState } from "react";
import Conversations from "../../components/Conversations/Conversations";
import Message from "../../components/Message/Message";
import FriendsOnline from "../../components/FriendsOnline/FriendsOnline";
function Chat() {
  const [currentChat, setCurrentChat] = useState(null);
  return (
    <div className="h-[calc(100vh-70px)] flex  justify-around mt-4">
      {/* chatMenu */}
      <div>
        <div>
          <input
            placeholder="Search for friends"
            className="p-2 border border-b border-gray-300 w-90 focus:outline-none focus:border-blue-500"
          />
          <Conversations />
          <Conversations />
          <Conversations />
          <Conversations />
        </div>
      </div>
      {/* chatBox */}
      <div>
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
      <div>
        <div className="h-full p-10">
          <FriendsOnline />
        </div>
      </div>
    </div>
  );
}

export default Chat;
