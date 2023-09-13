import { useState, useContext, useEffect, useRef } from "react";
import Conversations from "../../components/Conversations/Conversations";
import Message from "../../components/Message/Message";
import FriendsOnline from "../../components/FriendsOnline/FriendsOnline";
import { TokenContext } from "../../context/TokenContext";
import { Conversation } from "../../components/Conversations/Conversations";
import axios from "axios";
import { io, Socket } from "socket.io-client";
interface ArrivalMessage {
  sender: string;
  text: string;
  createdAt: number;
}

function Chat() {
  const API = process.env.REACT_APP_API_BACK;
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState<Conversation | null>(null);
  // const [messages, setMessages] = useState([]);
  const [messages, setMessages] = useState<ArrivalMessage[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const socket = useRef<Socket | null>(null);

  const [arrivalMessage, setArrivalMessage] = useState<ArrivalMessage | null>(
    null
  );
  const { user } = useContext(TokenContext);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("useEffect se está ejecutando");
    socket.current = io("http://localhost:3002");
    socket.current.on("getMessage", (data) => {
      console.log("data viene back", data);

      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);
  console.log(arrivalMessage);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    if (socket.current) {
      socket.current.emit("addUser", user?.id);
      socket.current.on("getUsers", (users) => {
        console.log(users);
      });
    }
  }, [user]);

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

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get(`${API}/messages/` + currentChat.id);
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message = {
      usersCustomuserId: user?.id,
      text: newMessage,
      ConversationId: currentChat?.id,
    };

    const receiverId =
      currentChat &&
      currentChat.members.find((member) => member !== user?.id.toString());

    if (socket.current) {
      socket.current.emit("sendMessage", {
        senderId: user?.id,
        receiverId,
        text: newMessage,
      });
    }

    try {
      const res = await axios.post(`${API}/messages`, message);
      setMessages((prevMessages) => [...prevMessages, res.data]);
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="h-[calc(100vh-70px)] flex  justify-around  bg-[#2B3674] p-4">
      {/* chatMenu */}
      <div className=" p-4 shadow-xl card card-compact w-72  bg-[#172554]">
        <div>
          <input
            type="text"
            placeholder="Buscar amigos"
            className="w-full max-w-xs input input-bordered input-sm bg-[#2B3674]"
          />

          {conversations &&
            conversations.map((obj, index) => (
              <div key={index} onClick={() => setCurrentChat(obj)}>
                <Conversations conversation={obj} currentUser={user} />
              </div>
            ))}
        </div>
      </div>
      {/* chatBox */}
      <div className="w-3/5 pt-4">
        <div className="relative flex flex-col justify-between h-full ">
          {currentChat ? (
            <>
              <div className="h-full pr-10 overflow-y-scroll ">
                {messages.map((m, index) => (
                  <div key={index} ref={scrollRef}>
                    <Message
                      message={m}
                      own={m.usersCustomuserId === user?.id}
                    />
                  </div>
                ))}
              </div>
              <form
                onSubmit={handleSubmit}
                className="flex items-center gap-4 mt-5"
              >
                <textarea
                  className="w-full textarea textarea-bordered textarea-xs bg-[#172554]"
                  placeholder="Escribe el mensaje..."
                  onChange={(e) => setNewMessage(e.target.value)}
                  value={newMessage}
                ></textarea>
                <button
                  type="submit"
                  className=" btn w-20  text-white bg-[#172554] border-none hover:bg-[#1E3A8A]"
                >
                  Send
                </button>
              </form>
            </>
          ) : (
            <span className="absolute text-gray-300 cursor-default top-10 text-50">
              Open a conversation to start a chat.
            </span>
          )}
        </div>
      </div>
      {/* chatOnline */}
      <div className="pt-4 shadow-xl card card-compact w-60 bg-[#172554]">
        <div className="h-full px-4 ">
          <FriendsOnline />
        </div>
      </div>
    </div>
  );
}

export default Chat;
