import React, { useEffect, useState } from "react";
import imgAvatar from "../../assets/noAvatar.png";
import { User } from "../../models/user";
import axios from "axios";

export interface Conversation {
  id: string;
  members: string[];
  createdAt: string;
  updatedAt: string;
}

interface ConversationsProps {
  conversation: Conversation;
  currentUser: User | null;
}

const Conversations: React.FC<ConversationsProps> = ({
  conversation,
  currentUser,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const API = process.env.REACT_APP_API_BACK;

  useEffect(() => {
    const friendId = conversation.members.find(
      (m) => m !== String(currentUser?.id)
    );

    const getUser = async () => {
      try {
        const res = await axios(`${API}/users?userId=` + friendId);

        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);
  // console.log("soy user", user);
  // console.log("soy user actual", currentUser);

  return (
    <div className="flex items-center gap-2 p-5 cursor-pointer">
      <div className="avatar">
        <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={user?.avatar ? user.avatar : imgAvatar} alt="Avatar" />
        </div>
      </div>
      <span className="font-semibold">
        {user && `${user.first_name} ${user.last_name}`}
      </span>
    </div>
  );
};

export default Conversations;
