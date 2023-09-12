import { useState, useContext, useEffect } from "react";
import Conversations from "../../components/Conversations/Conversations";
import Message from "../../components/Message/Message";
import FriendsOnline from "../../components/FriendsOnline/FriendsOnline";
import { TokenContext } from "../../context/TokenContext";
import axios from "axios";

function Chat() {
  const API = process.env.REACT_APP_API_BACK;
  const { user } = useContext(TokenContext);
  const [conversations, setConversations] = useState([]);
  const [currentChat] = useState(null);
  // const [currentChat] = useState(null);

  useEffect(() => {
    const getConversations = async () => {
      try {
        if (user) {
          const res = await axios.get(`${API}/conversations/${user.id}`);
          // Resto de tu código aquí
          setConversations(res.data);
        } else {
          console.error(
            "El usuario no existe. No se puede realizar la solicitud."
          );
        }
      } catch (error) {
        console.log(error);
      }
    };
    getConversations();
  }, [user?.id]);
  console.log(conversations);

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
          {conversations.map((obj, index) => (
            <div key={index}>
              <Conversations conversation={obj} currentUser={user} />
            </div>
          ))}
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
