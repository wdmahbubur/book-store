import { useStore } from "@lib/useStore";
import getDateDiff from "@lib/utils/getDateDiff";
import Image from "next/image";
import React from "react";

interface ConversationUserProps {
  conv: {
    id: string;
    name: string;
    avatar: string;
    status: string;
    last_message: string;
    last_message_time: string;
  };
}

const ConversationUser = ({ conv }: ConversationUserProps) => {
  const { selectedChat, setSelectedChat } = useStore();
  return (
    <div
      className={`entry cursor-pointer transform hover:scale-105 duration-300 transition-transform ${
        selectedChat.id === conv.id ? "bg-gray-100" : "bg-white"
      } mb-4 rounded p-4 flex shadow-md`}
      key={conv.id}
      onClick={() => setSelectedChat(conv)}
    >
      <div className="flex-2">
        <div className="w-12 h-12 relative">
          <Image
            width={48}
            height={48}
            className="w-12 h-12 rounded-full mx-auto"
            src={conv.avatar}
            alt="chat-user"
          />
          {
            <span
              className={`absolute w-4 h-4 bg-${
                conv.status === "online" ? "green" : "gray"
              }-400 rounded-full right-0 bottom-0 border-2 border-white`}
            ></span>
          }
        </div>
      </div>
      <div className="flex-1 px-2">
        <div className="truncate w-32">
          <span className="text-gray-800">{conv.name}</span>
        </div>
        <div>
          <small className="text-gray-600">
            {conv.last_message.substring(0, 16) +
              (conv.last_message.length > 16 ? "..." : "")}
          </small>
        </div>
      </div>
      <div className="flex-2 text-right">
        <div>
          <small className="text-gray-500">
            {getDateDiff("day", conv.last_message_time) > 1
              ? getDateDiff("day", conv.last_message_time) + " days ago"
              : getDateDiff("hour", conv.last_message_time) > 1
              ? getDateDiff("hour", conv.last_message_time) + " hours ago"
              : getDateDiff("minute", conv.last_message_time) + " minutes ago"}
          </small>
        </div>
        <div>
          <small className="text-xs bg-red-500 text-white rounded-full h-6 w-6 leading-6 text-center inline-block">
            23
          </small>
        </div>
      </div>
    </div>
  );
};

export default ConversationUser;
